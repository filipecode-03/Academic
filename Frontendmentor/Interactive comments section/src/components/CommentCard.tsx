import { useState } from "react";
import type { Comment, User } from "../types/comment";
import CommentForm from "./CommentForm";
import Score from "./Score";
import ReplyButton from "./ReplyButton";

interface CommentCardProps {
    comment: Comment;
    currentUser: User;
}

function CommentCard({
    comment,
    currentUser,
}: CommentCardProps) {
    const [isReplying, setIsReplying] = useState(false);

    function handleReply() {
        setIsReplying((current) => !current);
    }

    return (
        <div className="space-y-4">

            <article className="rounded-lg bg-white p-6">

                <div className="grid grid-cols-1 gap-4 md:grid-cols-[40px_1fr] md:gap-6">

                    {/* Score */}
                    <div className="hidden md:block">
                        <Score score={comment.score} />
                    </div>

                    {/* Content */}
                    <div>

                        {/* Header */}
                        <header className="flex items-center justify-between">

                            <div className="flex items-center gap-4">

                                <img
                                    src={comment.user.image.png}
                                    alt={comment.user.username}
                                    className="h-8 w-8"
                                />

                                <span className="font-bold text-[#334253]">
                                    {comment.user.username}
                                </span>

                                <span className="text-[#67727E]">
                                    {comment.createdAt}
                                </span>

                            </div>

                            <ReplyButton onClick={handleReply} />

                        </header>

                        {/* Content */}
                        <p className="mt-4 leading-6 text-[#67727E]">
                            {comment.content}
                        </p>

                        {/* Mobile actions */}
                        <div className="mt-4 flex items-center justify-between md:hidden">

                            <Score score={comment.score} />

                            <ReplyButton onClick={handleReply} />

                        </div>

                    </div>

                </div>

            </article>

            {isReplying && (
                <CommentForm
                    currentUser={currentUser}
                    username={comment.user.username}
                />
            )}

        </div>
    );
}

export default CommentCard;