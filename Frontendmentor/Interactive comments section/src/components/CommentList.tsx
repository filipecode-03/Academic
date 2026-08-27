import type { Comment, User } from "../types/comment";
import CommentCard from "./CommentCard";
import ReplyCard from "./ReplyCard";

interface CommentListProps {
    comments: Comment[];
    currentUser: User;
}

function CommentList({
    comments,
    currentUser,
}: CommentListProps) {
    return (
        <section className="space-y-4">

            {comments.map((comment) => (
                <div
                    key={comment.id}
                    className="space-y-4"
                >
                    <CommentCard
                        comment={comment}
                        currentUser={currentUser}
                    />

                    {comment.replies.length > 0 && (
                        <div className="ml-10 space-y-4 border-l-2 border-[#E9EBF0] pl-10">

                            {comment.replies.map((reply) => (
                                <ReplyCard
                                    key={reply.id}
                                    reply={reply}
                                    currentUser={currentUser}
                                />
                            ))}

                        </div>
                    )}

                </div>
            ))}

        </section>
    );
}

export default CommentList;