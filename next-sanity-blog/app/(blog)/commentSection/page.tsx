"use client";

import { useState, useEffect } from "react";
import { FaEdit, FaTrashAlt, FaSave, FaTimes } from "react-icons/fa";

type Comment = {
  id: number;
  name: string;
  text: string;
};

const CommentSection = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newName, setNewName] = useState<string>("");
  const [newComment, setNewComment] = useState<string>("");
  const [editingComment, setEditingComment] = useState<number | null>(null);
  const [editText, setEditText] = useState<string>("");

  useEffect(() => {
    const savedComments = localStorage.getItem("comments");
    setComments(savedComments ? JSON.parse(savedComments) : []);
  }, []);

  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  const addComment = () => {
    if (newName.trim() === "" || newComment.trim() === "") return;
    setComments([...comments, { id: Date.now(), name: newName, text: newComment }]);
    setNewName("");
    setNewComment("");
  };

  const startEditing = (id: number, text: string) => {
    setEditingComment(id);
    setEditText(text);
  };

  const saveEdit = () => {
    if (editingComment === null) return;
    setComments(
      comments.map((comment) =>
        comment.id === editingComment ? { ...comment, text: editText } : comment
      )
    );
    setEditingComment(null);
    setEditText("");
  };

  const deleteComment = (id: number) => {
    setComments(comments.filter((comment) => comment.id !== id));
  };

  return (
    <div className="h-500 bg-gradient-to-b from-gray-900 to-black p-8 flex flex-col  items-center">

<div className="relative my-28">
              <div className="absolute w-96 h-96 bg-gradient-to-r from-teal-400 via-purple-500 to-blue-600 rounded-full filter blur-3xl opacity-30 -top-16 -left-16"></div>
              <div className="absolute w-96 h-96 bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 rounded-full filter blur-3xl opacity-30 -bottom-16 -right-16"></div>
              <div className="relative z-10">
              <div className="bg-gray-800 shadow-lg rounded-lg p-8 w-full max-w-4xl">
        <h2 className="text-3xl font-bold  text-teal-400   hover:text-white text-center mb-6">
          Comments
        </h2>
        <div className="mb-8">
          <input
            type="text"
            className="w-full mb-4 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <textarea
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={3}
            placeholder="Write your comment here..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button
            className="mt-4 px-6 py-2 bg-teal-400 text-white rounded-md hover:bg-white hover:text-teal-400 transition-all"
            onClick={addComment}
          >
            Add Comment
          </button>
        </div>
        <ul className="space-y-6">
          {comments.map((comment) => (
            <li
              key={comment.id}
              className="bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transform transition-transform hover:scale-105"
            >
              {editingComment === comment.id ? (
                <div>
                  <textarea
                    className="w-full p-3 bg-gray-600 border border-gray-500 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={3}
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                  />
                  <div className="mt-4 flex space-x-4">
                    <button
                      className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all"
                      onClick={saveEdit}
                    >
                      <FaSave className="mr-2" />
                      Save
                    </button>
                    <button
                      className="flex items-center px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-all"
                      onClick={() => setEditingComment(null)}
                    >
                      <FaTimes className="mr-2" />
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col">
                  <div className="flex justify-between items-center">
                    <p className="text-lg font-bold text-white">{comment.name}</p>
                    <div className="flex space-x-4">
                      <button
                        className="text-blue-400 hover:text-blue-500 transition-all"
                        onClick={() => startEditing(comment.id, comment.text)}
                      >
                        <FaEdit />
                      </button>
                      <button
                        className="text-red-400 hover:text-red-500 transition-all"
                        onClick={() => deleteComment(comment.id)}
                      >
                        <FaTrashAlt />
                      </button>
                    </div>
                  </div>
                  <p className="mt-3 text-gray-300">{comment.text}</p>
                </div>
              )}
            </li>
          ))}
        </ul>
        {comments.length === 0 && (
          <p className="text-gray-400 text-center mt-6">
            No comments yet. Be the first to comment!
          </p>
        )}
      </div>
              </div>
            </div>
      
    </div>
  );
};

export default CommentSection;
