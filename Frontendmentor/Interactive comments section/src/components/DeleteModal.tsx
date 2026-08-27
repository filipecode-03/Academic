interface DeleteModalProps {
    onCancel: () => void;
    onConfirm: () => void;
}

function DeleteModal({
    onCancel,
    onConfirm,
}: DeleteModalProps) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
            <div className="w-full max-w-md rounded-lg bg-white p-6">

                <h2 className="text-[24px] font-bold text-[#334253]">
                    Delete comment
                </h2>

                <p className="mt-4 text-[20px] leading-7 text-[#67727E]">
                    Are you sure you want to delete this comment?
                    This will remove the comment and can't be undone.
                </p>

                <div className="mt-6 flex justify-center gap-3">

                    <button
                        type="button"
                        onClick={onCancel}
                        className="
                            rounded-lg w-full
                            bg-[#67727E]
                            px-5
                            py-3
                            font-bold
                            uppercase
                            text-white
                            transition-opacity
                            hover:opacity-70
                        "
                    >
                        No, cancel
                    </button>

                    <button
                        type="button"
                        onClick={onConfirm}
                        className="
                            rounded-lg w-full
                            bg-[#ED6368]
                            px-5
                            py-3
                            font-bold
                            uppercase
                            text-white
                            transition-opacity
                            hover:opacity-70
                        "
                    >
                        Yes, delete
                    </button>

                </div>

            </div>
        </div>
    );
}

export default DeleteModal;