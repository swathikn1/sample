import { useState, useEffect } from "react";
import { Table } from "antd";
import { Link } from "@tanstack/react-router";
import "antd/dist/reset.css";

type Item = {
  key: number;
  userId: number;
  id: number;
  title: string;
  body: string;
};

function TablePage() {
  const [data, setData] = useState<Item[]>([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`
    )
      .then((res) => res.json())
      .then((json: Item[]) =>
        setData(json.map((item) => ({ ...item, key: item.id })))
      );
  }, [page, limit]);

  const columns = [
    { title: "User Id", dataIndex: "userId" },

    {
      title: "Id",
      dataIndex: "id",
      render: (id: number) => (
        <Link to="/table/$id" params={{ id }}>
          {id}
        </Link>
      ),
    },

    { title: "Title", dataIndex: "title" },
    { title: "Body", dataIndex: "body" },
  ];

  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={{
        current: page,
        pageSize: limit,
        total: 100,
        showSizeChanger: true,
        onChange: (p, l) => {
          setPage(p);
          setLimit(l ?? 10);
        },
      }}
    />
  );
}

export default TablePage;
