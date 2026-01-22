import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";
import { createPost } from "@/api/posts";

export default function CreatePost() {
  const queryClient = useQueryClient();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const { mutate, isPending } = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });

      toast.success(
        <div className="text-white bg-black">Posted Successfully</div>,
      );
      setTitle("");
      setBody("");
    },
    onError: () => {
      toast.error("Failed to create post");
    },
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    mutate({
      userId: 1,
      title,
      body,
    });
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 space-y-3">
      <h2 className="font-semibold text-lg">Create Post</h2>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="w-full border p-2"
      />

      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Body"
        className="w-full border p-2"
      />

      <button
        type="submit"
        disabled={isPending}
        className="bg-gray-600 text-white px-4 py-2"
      >
        {isPending ? "Creating..." : "Create"}
      </button>
    </form>
  );
}
