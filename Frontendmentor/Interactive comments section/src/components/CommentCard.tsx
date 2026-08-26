import type { Comment } from "../types/comment";


interface CommentCardProps {
    comment: Comment;
}

function CommentCard({ comment }: CommentCardProps) {
    return (
        <article className="rounded-lg bg-white p-6">
            <div className="flex gap-6">
                
                {/* Score */}
                <div>
                    <div className="flex flex-col items-center gap-2 rounded-lg bg-[#F5F6FA] px-3 py-2">
                        <button className="text-[#C5C6EF] font-bold">
                            +
                        </button>

                        <span className="font-bold text-[#5357B6]">
                            {comment.score}
                        </span>

                        <button className="text-[#C5C6EF] font-bold">
                            -
                        </button>
                    </div>
                </div>

                {/* Comment content */}
                <div className="flex-1">

                    {/* Header */}
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

                        <button className="font-bold text-[#5357B6]">
                            Reply
                        </button>
                    </div>

                    {/* Content */}
                    <p className="mt-4 leading-6 text-[#67727E]">
                        {comment.content}
                    </p>

                </div>
            </div>
        </article>
    );
}

export default CommentCard;