import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { fetchProductsBySearch, fetchProductsBySort } from "../api/products";
import { useDebounce } from "../api/debounce";

export const Route = createFileRoute("/")({
  component: ProductsPage,
});

function ProductsPage() {
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const debouncedSearch = useDebounce(search, 1000);

  const searchQuery = useQuery({
    queryKey: ["products", "search", debouncedSearch],
    queryFn: () => fetchProductsBySearch(debouncedSearch),
  });

  const sortQuery = useQuery({
    queryKey: ["products", "sort", sortOrder],
    queryFn: () => fetchProductsBySort(sortOrder),
  });

  const isLoading = searchQuery.isLoading || sortQuery.isLoading;
  const error = searchQuery.error || sortQuery.error;

  const products =
    debouncedSearch.trim().length > 0 ? searchQuery.data : sortQuery.data;

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading products</p>;

  return (
    <div className="bg-white p-4">
      <div className="flex gap-4 mb-4">
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-3 py-2 w-64"
        />

        <button
          onClick={() =>
            setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"))
          }
          className="bg-gray-600 text-white px-4 py-2"
        >
          Sort by Price ({sortOrder.toUpperCase()})
        </button>
      </div>

      <table className="w-full">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th>Title</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product) => (
            <tr key={product.id}>
              <td>{product.title}</td>
              <td>{product.category}</td>
              <td>${product.price}</td>
              <td>{product.stock}</td>
              <td>{product.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
