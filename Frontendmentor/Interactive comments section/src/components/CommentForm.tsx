import type { FormEvent } from "react";
import type { User } from "../types/comment";

interface CommentFormProps {
    currentUser: User;
    username?: string;
    isNewComment?: boolean;
}

function CommentForm({
    currentUser,
    username,
    isNewComment = false,
}: CommentFormProps) {

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="rounded-lg bg-white p-6"
        >
            <div className="flex flex-col gap-4 md:flex-row md:items-start">

                <img
                    src={currentUser.image.png}
                    alt={currentUser.username}
                    className="hidden h-8 w-8 shrink-0 md:block"
                />

                <textarea
                    placeholder={
                        isNewComment
                            ? "Add a comment..."
                            : `Reply to @${username}...`
                    }
                    className="
                        min-h-24
                        w-full
                        flex-1
                        resize-none
                        rounded-lg
                        border
                        border-[#E9EBF0]
                        px-4
                        py-3
                        text-[#334253]
                        outline-none
                        placeholder:text-[#67727E]
                        focus:border-[#5357B6]
                    "
                />

                <div className="flex items-center justify-between">

                    <img
                        src={currentUser.image.png}
                        alt={currentUser.username}
                        className="h-8 w-8 md:hidden"
                    />

                    <button
                        type="submit"
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
                        Send
                    </button>

                </div>

            </div>
        </form>
    );
}

export default CommentForm;