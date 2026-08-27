import { useState } from "react";
import type { Reply, User } from "../types/comment";
import CommentForm from "./CommentForm";
import Score from "./Score";

interface ReplyCardProps {
    reply: Reply;
    currentUser: User;
}

function ReplyCard({
    reply,
    currentUser,
}: ReplyCardProps) {
    const [isReplying, setIsReplying] = useState(false);

    return (
        <div className="space-y-4">

            <article className="rounded-lg bg-white p-6">
                <div className="flex gap-6">

                    <Score score={reply.score} />

                    <div className="flex-1">

                        <div className="flex items-center justify-between">

                            <div className="flex items-center gap-4">
                                <img
                                    src={reply.user.image.png}
                                    alt={reply.user.username}
                                    className="h-8 w-8"
                                />

                                <span className="font-bold text-[#334253]">
                                    {reply.user.username}
                                </span>

                                <span className="text-[#67727E]">
                                    {reply.createdAt}
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
                            <span className="font-bold text-[#5357B6]">
                                @{reply.replyingTo}
                            </span>{" "}
                            {reply.content}
                        </p>

                    </div>
                </div>
            </article>

            {isReplying && (
                <CommentForm
                    currentUser={currentUser}
                    username={reply.user.username}
                />
            )}

        </div>
    );
}

export default ReplyCard;