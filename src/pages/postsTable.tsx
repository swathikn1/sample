
import { useState, useEffect } from "react";
import { Table } from "antd";
import "antd/dist/reset.css";
import axios from "axios";

type Item = {
  key: number;
  userId:number;
  id:number;
  title:string;
  body:string;
}

function FetchData() {
  const [data, setData] = useState<Item[]>([]);
  const [page , setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  
  useEffect(() => {
    axios.get<Item[]>("https://jsonplaceholder.typicode.com/posts", {
        params: {_page: page,_limit: limit,},
      })
      .then((response) => {setData(response.data.map((item) => ({...item,key: item.id,}))
        );
      });
  }, [page, limit]);


  
  const columns = [
    { title: "User Id", dataIndex: "userId" },
    { title: "Id", dataIndex: "id" },
    { title: "Title", dataIndex: "title" },
    { title: "Body", dataIndex: "body" },
  ];

  return <Table columns={columns} dataSource={data}
  pagination={{
    current: page,
    pageSize: limit,
    total:100,
    showSizeChanger:true,
    pageSizeOptions:["10","20","50","100"],
    onChange:(newPage, newPageSize) =>{
    setPage(newPage); 
    setLimit(newPageSize)
    }
  }} 
  />;
}

export default FetchData;
