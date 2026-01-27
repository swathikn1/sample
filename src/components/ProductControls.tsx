// type Props = {
//   search: string
//   setSearch: (v: string) => void
//   sort: string
//   setSort: (v: string) => void
// }

// export function ProductControls({
//   search,
//   setSearch,
//   sort,
//   setSort,
// }: Props) {
//   return (
//     <div className="flex flex-col sm:flex-row gap-4 mb-4">
//       <input
//         type="text"
//         placeholder="Search by title..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         className="border rounded px-3 py-2 w-full sm:w-64"
//       />

//       <select
//         value={sort}
//         onChange={(e) => setSort(e.target.value)}
//         className="border rounded px-3 py-2 w-full sm:w-48"
//       >
//         <option value="">Sort by</option>
//         <option value="price-asc">Price ↑</option>
//         <option value="price-desc">Price ↓</option>
//         <option value="rating">Rating</option>
//         <option value="stock">Stock</option>
//       </select>
//     </div>
//   )
// }
