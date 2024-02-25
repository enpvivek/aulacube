import CommentList from "./components/CommentList";

export default function App() {
  // console.log(ApiData.comments);
  return (
    <div className="h-auto w-full bg-neutral-900 text-neutral-50">
      <h1 className="text-center text-3xl font-bold py-4">
        Simple Nested Comment UI
      </h1>
      <div className="w-auto h-auto lg:mx-32">
        <CommentList />
      </div>
    </div>
  );
}
