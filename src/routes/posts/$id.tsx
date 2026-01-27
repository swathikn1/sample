// import { createFileRoute } from "@tanstack/react-router";
// import { useQuery } from "@tanstack/react-query";
// import { fetchPostById } from "../../api/posts";

// export const Route = createFileRoute("/posts/$id")({
//   component: PostDetail,
// });

// function PostDetail() {
//   const { id } = Route.useParams();

//   const { data, isLoading } = useQuery({
//     queryKey: ["post", id],
//     queryFn: () => fetchPostById(id),
//   });
//   if (isLoading) return <p>Loading...</p>;

//   return (
//     <div className="bg-white p-6 rounded">
//       <h2 className="text-xl font-bold mb-3">{data!.title}</h2>
//       <p className="text-gray-700">{data!.body}</p>
//     </div>
//   );
// }
