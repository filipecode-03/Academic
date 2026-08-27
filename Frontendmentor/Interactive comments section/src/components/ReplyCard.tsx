import { useState } from "react";
import type { Reply } from "../types/comment";
import CommentForm from "./CommentForm";

interface ReplyCardProps {
    reply: Reply;
}

function ReplyCard({ reply }: ReplyCardProps) {
    const [isReplying, setIsReplying] = useState(false);

    return (
        <div className="space-y-4">

            <article className="rounded-lg bg-white p-6">
                <div className="flex gap-6">

                    {/* Score */}
                    <div>
                        <div className="flex flex-col items-center gap-2 rounded-lg bg-[#F5F6FA] px-3 py-2">
                            <button className="font-bold text-[#C5C6EF]">
                                +
                            </button>

                            <span className="font-bold text-[#5357B6]">
                                {reply.score}
                            </span>

                            <button className="font-bold text-[#C5C6EF]">
                                -
                            </button>
                        </div>
                    </div>

                    {/* Conteúdo */}
                    <div className="flex-1">

                        {/* Header */}
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
                                onClick={() => setIsReplying(true)}
                                className="font-bold text-[#5357B6] hover:opacity-70"
                            >
                                Reply
                            </button>
                        </div>

                        {/* Content */}
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
                <CommentForm />
            )}

        </div>
    );
}

export default ReplyCard;