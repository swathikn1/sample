import { useParams } from "@tanstack/react-router";
import { useEffect, useState } from "react";

function TableDetail() {
  const { id } = useParams({ from: "/table/$id" });
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(async (res) => {
        const response = await res.json();
        setData(response);
  });
  }, [id]);

  return (
    <div>
      <h2>{data?.title}</h2>
      <p>{data?.body}</p>
    </div>
  );
}

export default TableDetail;
