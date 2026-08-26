import data from "./data/data.json";
import CommentCard from "./components/CommentCard";
import type { CommentsData } from "./types/comment";

function App() {

    const commentsData = data as CommentsData;

    return (
        <main className="min-h-screen px-4 py-8">

            <section className="mx-auto max-w-3xl space-y-4">

                {commentsData.comments.map((comment) => (
                    <CommentCard
                        key={comment.id}
                        comment={comment}
                    />
                ))}

            </section>

        </main>
    );
}

export default App;