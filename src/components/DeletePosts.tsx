import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deletePost } from "../api/posts";
import { toast } from "sonner";

export default function DeletePost() {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      toast.success("Post Deleted");
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  return (
    <button
      onClick={() => mutate(1)}
      disabled={isPending}
      className="bg-red-600 text-white px-4 py-2"
    >
      {isPending ? "Deleting..." : "Delete Post"}
    </button>
  );
}
