import { useState } from "react";
import type { Reply, User } from "../types/comment";
import CommentForm from "./CommentForm";
import Score from "./Score";
import ReplyButton from "./ReplyButton";

interface ReplyCardProps {
    reply: Reply;
    currentUser: User;
}

function ReplyCard({
    reply,
    currentUser,
}: ReplyCardProps) {
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

                                <span className="font-bold text-[#334253]">
                                    {reply.user.username}
                                </span>

                                <span className="text-[#67727E]">
                                    {reply.createdAt}
                                </span>

                            </div>

                            <ReplyButton
                                onClick={handleReply}
                                className="hidden md:flex"
                            />

                        </header>

                        {/* Content */}
                        <p className="mt-4 leading-6 text-[#67727E]">
                            <span className="font-bold text-[#5357B6]">
                                @{reply.replyingTo}
                            </span>{" "}
                            {reply.content}
                        </p>

                        {/* Mobile actions */}
                        <div className="mt-4 flex items-center justify-between md:hidden">

                            <Score score={reply.score} />

                            <ReplyButton onClick={handleReply} />

                        </div>

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