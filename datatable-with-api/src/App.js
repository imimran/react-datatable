import React, { useState, useEffect } from "react";
import "./style.css";
import Table from "./Table";
import axios from "axios";

export default function App() {
  const [headers, setHeaders] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setData(data);
      setHeaders(Object.keys(data[0]));
    };

    getPosts();
  }, []);

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <Table headers={headers} data={data} />
    </div>
  );
}
