import { useState } from "react";
import type { Reply, User } from "../types/comment";
import CommentForm from "./CommentForm";
import DeleteModal from "./DeleteModal";
import ReplyButton from "./ReplyButton";
import Score from "./Score";

import deleteImg from '../../public/images/icon-delete.svg'
import editImg from '../../public/images/icon-edit.svg'

interface ReplyCardProps {
    reply: Reply;
    currentUser: User;
}

function ReplyCard({
    reply,
    currentUser,
}: ReplyCardProps) {

    const [isReplying, setIsReplying] = useState(false);

    const [isEditing, setIsEditing] = useState(false);

    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const [editedContent, setEditedContent] = useState(
        reply.content
    );

    const isCurrentUser =
        reply.user.username === currentUser.username;

    function handleReply() {
        setIsReplying((current) => !current);
    }

    function handleEdit() {
        setIsEditing(true);
    }

    function handleUpdate() {
        setIsEditing(false);
    }

    function handleDelete() {
        setIsDeleteModalOpen(false);
    }

    return (
        <>
            <div className="space-y-4">

                <article className="rounded-lg bg-white p-6">

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-[40px_1fr] md:gap-6">

                        {/* Score - Desktop */}
                        <div className="hidden md:block">
                            <Score score={reply.score} />
                        </div>

                        {/* Content */}
                        <div>

                            {/* Header */}
                            <header className="flex items-center justify-between">

                                <div className="flex items-center gap-4">

                                    <img
                                        src={reply.user.image.png}
                                        alt={reply.user.username}
                                        className="h-8 w-8"
                                    />

                                    <div className="flex items-center gap-2">

                                        <span className="font-bold text-[#334253]">
                                            {reply.user.username}
                                        </span>

                                        {isCurrentUser && (
                                            <span className="rounded-sm bg-[#5357B6] px-1.5 py-0.5 text-xs font-bold text-white">
                                                you
                                            </span>
                                        )}

                                    </div>

                                    <span className="text-[#67727E]">
                                        {reply.createdAt}
                                    </span>

                                </div>

                                {/* Desktop Actions */}
                                <div className="hidden items-center gap-5 md:flex">

                                    {isCurrentUser ? (
                                        <>
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    setIsDeleteModalOpen(true)
                                                }
                                                className="
                                                    flex
                                                    items-center
                                                    gap-2
                                                    font-bold
                                                    text-[#ED6368]
                                                    transition-opacity
                                                    hover:opacity-70
                                                "
                                            >
                                                <img src={deleteImg} alt="deleteImg" />

                                                Delete
                                            </button>

                                            <button
                                                type="button"
                                                onClick={handleEdit}
                                                className="
                                                    flex
                                                    items-center
                                                    gap-2
                                                    font-bold
                                                    text-[#5357B6]
                                                    transition-opacity
                                                    hover:opacity-70
                                                "
                                            >
                                                <img src={editImg} alt="editImg" />

                                                Edit
                                            </button>
                                        </>
                                    ) : (
                                        <ReplyButton
                                            onClick={handleReply}
                                        />
                                    )}

                                </div>

                            </header>

                            {/* Content */}
                            {isEditing ? (
                                <div className="mt-4">

                                    <textarea
                                        value={editedContent}
                                        onChange={(event) =>
                                            setEditedContent(
                                                event.target.value
                                            )
                                        }
                                        className="
                                            min-h-24
                                            w-full
                                            resize-none
                                            rounded-lg
                                            border
                                            border-[#E9EBF0]
                                            p-3
                                            text-[#334253]
                                            outline-none
                                            focus:border-[#5357B6]
                                        "
                                    />

                                    <div className="mt-3 flex justify-end">

                                        <button
                                            type="button"
                                            onClick={handleUpdate}
                                            className="
                                                rounded-lg
                                                bg-[#5357B6]
                                                px-6
                                                py-3
                                                font-bold
                                                uppercase
                                                text-white
                                                transition-opacity
                                                hover:opacity-70
                                            "
                                        >
                                            Update
                                        </button>

                                    </div>

                                </div>
                            ) : (
                                <p className="mt-4 leading-6 text-[#67727E]">
                                    <span className="font-bold text-[#5357B6]">
                                        @{reply.replyingTo}
                                    </span>{" "}
                                    {editedContent}
                                </p>
                            )}

                            {/* Mobile Actions */}
                            <div className="mt-4 flex items-center justify-between md:hidden">

                                <Score score={reply.score} />

                                {isCurrentUser ? (
                                    <div className="flex items-center gap-4">

                                        <button
                                            type="button"
                                            onClick={() =>
                                                setIsDeleteModalOpen(true)
                                            }
                                            className="
                                                flex
                                                items-center
                                                gap-2
                                                font-bold
                                                text-[#ED6368]
                                            "
                                        >
                                            <img src={deleteImg} alt="deleteImg" />
                                            <span>Delete</span>
                                        </button>

                                        <button
                                            type="button"
                                            onClick={handleEdit}
                                            className="
                                                flex
                                                items-center
                                                gap-2
                                                font-bold
                                                text-[#5357B6]
                                            "
                                        >
                                            <img src={editImg} alt="editImg" />
                                            <span>Edit</span>
                                        </button>

                                    </div>
                                ) : (
                                    <ReplyButton
                                        onClick={handleReply}
                                    />
                                )}

                            </div>

                        </div>

                    </div>

                </article>

                {isReplying && !isCurrentUser && (
                    <CommentForm
                        currentUser={currentUser}
                        username={reply.user.username}
                    />
                )}

            </div>

            {isDeleteModalOpen && (
                <DeleteModal
                    onCancel={() =>
                        setIsDeleteModalOpen(false)
                    }
                    onConfirm={handleDelete}
                />
            )}
        </>
    );
}

export default ReplyCard;