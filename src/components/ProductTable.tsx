// import { useEffect, useMemo, useState } from 'react'
// import { getProducts } from '../api/products'
// import type { Product } from '../api/products'

// type SortOrder = 'asc' | 'desc'

// export default function ProductsTable() {
//   const [products, setProducts] = useState<Product[]>([])
//   const [search, setSearch] = useState('')
//   // const [sortOrder, setSortOrder] = useState<SortOrder>('asc')

//   useEffect(() => {
//     getProducts().then(setProducts)
//   }, [])

//   const filteredProducts = useMemo(() => {
//     return products
//       .filter(p =>
//         p.title.toLowerCase().includes(search.toLowerCase()),
//       )
//       .sort((a, b) =>
//         sortOrder === 'asc' ? a.price - b.price : b.price - a.price,
//       )
//   }, [products, search, sortOrder])

//   return (
//     <div>
//       {/* Controls */}
//       <div className="flex gap-4 mb-4">
//         <input
//           className="border rounded px-3 py-2 w-64"
//           placeholder="Search by title..."
//           value={search}
//           onChange={e => setSearch(e.target.value)}
//         />

//         <select
//           className="border rounded px-3 py-2"
//           value={sortOrder}
//           onChange={e => setSortOrder(e.target.value as SortOrder)}
//         >
//           <option value="asc">Price: Low → High</option>
//           <option value="desc">Price: High → Low</option>
//         </select>
//       </div>

//       {/* Table */}
//       <div className="overflow-x-auto">
//         <table className="min-w-full border border-gray-200 bg-white">
//           <thead className="bg-gray-100">
//             <tr>
//               <th className="border px-4 py-2 text-left">ID</th>
//               <th className="border px-4 py-2 text-left">Title</th>
//               <th className="border px-4 py-2 text-left">Category</th>
//               <th className="border px-4 py-2 text-right">Price</th>
//               <th className="border px-4 py-2 text-right">Stock</th>
//               <th className="border px-4 py-2 text-right">Rating</th>
//             </tr>
//           </thead>

//           <tbody>
//             {filteredProducts.map(product => (
//               <tr
//                 key={product.id}
//                 className="hover:bg-gray-50"
//               >
//                 <td className="border px-4 py-2">{product.id}</td>
//                 <td className="border px-4 py-2">{product.title}</td>
//                 <td className="border px-4 py-2 capitalize">
//                   {product.category}
//                 </td>
//                 <td className="border px-4 py-2 text-right">
//                   ${product.price}
//                 </td>
//                 <td className="border px-4 py-2 text-right">
//                   {product.stock}
//                 </td>
//                 <td className="border px-4 py-2 text-right">
//                   {product.rating}
//                 </td>
//               </tr>
//             ))}

//             {filteredProducts.length === 0 && (
//               <tr>
//                 <td
//                   colSpan={6}
//                   className="text-center py-4 text-gray-500"
//                 >
//                   No products found
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   )
// }
