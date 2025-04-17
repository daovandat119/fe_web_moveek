import React from "react";
import { ThumbsUp, ThumbsDown, Share } from "lucide-react";

export function EvaluateActions({ likes }) {
  return (
    <div className="flex justify-between items-center">
      <h1 className="inline-flex gap-2 items-center text-xs ml-5">
        +{likes}
        <button className="border border-black rounded-sm p-2 hover:bg-black group">
          <ThumbsUp size={12} className="text-black group-hover:text-white" />
        </button>
        <button className="border border-black rounded-sm p-2 hover:bg-black group">
          <ThumbsDown size={12} className="text-black group-hover:text-white" />
        </button>
      </h1>
      <button className="border border-black rounded-sm p-2 hover:bg-black group">
        <Share size={12} className="text-black group-hover:text-white" />
      </button>
    </div>
  );
}
