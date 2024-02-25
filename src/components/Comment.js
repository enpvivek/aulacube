import { useState } from "react";

const Comment = ({ comment }) => {
  const [showList, setShowList] = useState(false);

  const handleReply = () => {
    setShowList(!showList);
  };

  return (
    <div className="flex flex-col w-full h-auto">
      <div className="flex flex-col w-auto h-auto mt-2 mx-2">
        <div className="mt-2">
          <textarea
            id="about"
            name="about"
            rows={4}
            defaultValue={comment.text}
            className="block w-full rounded-md border-0 py-1.5 px-4 text-lg text-gray-700 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6"
            readOnly
          />
        </div>
        <div className="flex justify-between my-4">
          <p onClick={handleReply} className="cursor-pointer">
            {showList ? "Hide Replies" : "Show Replies"}
          </p>
          <div className="flex gap-4 justify-end">
            <button className="py-1 px-8 bg-gray-100 text-slate-800 font-semibold rounded-md hover:bg-gray-200 hover:text-black">
              Star ⭐
            </button>
            <button className="py-1 px-8 bg-gray-100 text-slate-800 font-semibold rounded-md hover:bg-gray-200 hover:text-black">
              Reply
            </button>
            <button className="py-1 px-8 bg-gray-100 text-slate-800 font-semibold rounded-md hover:bg-gray-200 hover:text-black">
              Delete
            </button>
          </div>
        </div>
      </div>
      {showList && (
        <div className="flex w-auto h-auto ml-10">
          {comment.replies.map((reply) => (
            <Comment key={reply.id} comment={reply} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Comment;
