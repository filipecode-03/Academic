import { useState } from "react";
import type { Comment, User } from "../types/comment";
import CommentForm from "./CommentForm";
import Score from "./Score";

interface CommentCardProps {
    comment: Comment;
    currentUser: User;
}

function CommentCard({
    comment,
    currentUser,
}: CommentCardProps) {
    const [isReplying, setIsReplying] = useState(false);

    return (
        <div className="space-y-4">

            <article className="rounded-lg bg-white p-6">
                <div className="flex gap-6">

                    <Score score={comment.score} />

                    <div className="flex-1">

                        <div className="flex items-center justify-between">

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

                            <button
                                type="button"
                                onClick={() =>
                                    setIsReplying((current) => !current)
                                }
                                className="font-bold text-[#5357B6] transition-opacity hover:opacity-70"
                            >
                                Reply
                            </button>

                        </div>

                        <p className="mt-4 leading-6 text-[#67727E]">
                            {comment.content}
                        </p>

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