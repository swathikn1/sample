import { createFileRoute, Link } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import { fetchPosts } from '../api/posts'

export const Route = createFileRoute('/')({
  component: PostsList,
})

function PostsList() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  })

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Error loading posts</p>

  return (
    <ul>
      {data!.map(post => (
        <li
          key={post.id}
          className="bg-white p-4">
          <Link
            to="/posts/$id"
            params={{ id: String(post.id) }}
            className="text-blue-600 font-semibold">
            {post.title}
          </Link>
        </li>
      ))}
    </ul>
  )
}
