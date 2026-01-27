export type Product = {
  id: number;
  title: string;
  category: string;
  price: number;
  stock: number;
  rating: number;
};

type ProductsResponse = {
  products: Product[];
};
export async function fetchProductsBySearch(
  search: string,
): Promise<Product[]> {
  const url = search
    ? `https://dummyjson.com/products/search?q=${encodeURIComponent(search)}`
    : `https://dummyjson.com/products`;

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data: ProductsResponse = await res.json();
  return data.products;
}

export async function fetchProductsBySort(
  sortOrder: "asc" | "desc",
): Promise<Product[]> {
  const res = await fetch(
    `https://dummyjson.com/products?sortBy=price&order=${sortOrder}`,
  );

  if (!res.ok) {
    throw new Error("Failed to fetch products by sort");
  }

  const data: ProductsResponse = await res.json();
  return data.products;
}
