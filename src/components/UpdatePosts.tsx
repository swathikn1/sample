import { toast } from "sonner";
import { updatePost } from "../api/posts";
import { useQueryClient, useMutation } from "@tanstack/react-query";

export default function UpdatePosts() {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: updatePost,
    onSuccess: () => {
      toast.success("Updated Successfuly");
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  return (
    <button
      onClick={() =>
        mutate({
          id: 1,
          title: "Good",
          body: "Evening",
          userId: 1,
        })
      }
      disabled={isPending}
      className="flex gap-3 bg-blue-500 text-black px-4 py-2"
    >
      {isPending ? "Updating..." : "Update Post"}
    </button>
  );
}
