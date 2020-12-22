import React, { useState, useEffect } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";


function App() {
  const [data, setData] = useState([])


  useEffect(() => {
    const getPosts = async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setData(data);
      
    };

    getPosts();
  }, []);

  const columns = [
    {
      name: "Id",
      selector: "id",
      sortable: true,
    },
    {
      name: "Title",
      selector: "title",
      sortable: true,
    },
    {
      name: "Body",
      selector: "body",
      sortable: true,
    },
 
    // {
    //   name: "Genres",
    //   selector: "genres",
    //   sortable: true,
    //   cell: (d) => <span>{d.genres.join(", ")}</span>,
    // },
  
  
  ];


  const tableData = {
    columns,
    data
   
  };

  return (
    <DataTableExtensions {...tableData}>
      <DataTable
        columns={columns}
        data={data}
        noHeader
        defaultSortField="id"
        defaultSortAsc={false}
        pagination
        highlightOnHover
      />
    </DataTableExtensions>
  );
}

export default App;
