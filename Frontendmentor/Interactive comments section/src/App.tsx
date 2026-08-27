import data from "./data/data.json";
import CommentList from "./components/CommentList";
import type { CommentsData } from "./types/comment";

function App() {
    const commentsData = data as CommentsData;

    return (
        <main className="min-h-screen px-4 py-8">
            <div className="mx-auto max-w-3xl">
                <CommentList comments={commentsData.comments} />
            </div>
        </main>
    );
}

export default App;