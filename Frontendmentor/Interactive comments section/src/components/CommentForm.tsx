interface CommentFormProps {
    placeholder?: string;
}

function CommentForm({
    placeholder = "Write a reply..."
}: CommentFormProps) {
    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="flex items-start gap-4 rounded-lg bg-white p-6"
        >
            <textarea
                placeholder={placeholder}
                className="min-h-24 flex-1 resize-none rounded-lg border border-[#E9EBF0] p-4 text-[#334253] outline-none focus:border-[#5357B6]"
            />

            <button
                type="submit"
                className="rounded-lg bg-[#5357B6] px-6 py-3 font-bold uppercase text-white transition-opacity hover:opacity-70"
            >
                Send
            </button>
        </form>
    );
}

export default CommentForm;