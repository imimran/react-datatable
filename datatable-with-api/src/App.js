
import React, { useState, useEffect } from "react";
import DataTable from "./DataTable";
import axios from "axios";
import ReactPaginate from "react-paginate";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const [data, setData] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(2);
  const [offset, setOffset] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    const getPosts = async () => {
      setLoading(true);
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      
      setData(data);
      setPageCount(Math.ceil(data.length / postsPerPage));
      setHeaders(Object.keys(data[0]));
      setLoading(false);
    };
    // console.log(data)
    // console.log(Object.keys(data[0]));

    getPosts();
  }, [offset]);

  //Get current data
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const slice = data.slice(offset, offset + postsPerPage);
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);
  

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1);
    console.log(selectedPage);
  };

  

  const filteredData = slice.filter(
    (post) =>
      post.title.toLowerCase().includes(keyword) ||
      post.body.toLowerCase().includes(keyword)
  );

  const onInputChange = (e) => {
    e.preventDefault();

    setKeyword(e.target.value.toLowerCase());
  };

  return (
    <div className="container mt-5">
      <div className="seller-profile-panel">
        <div className="seller-profile-panel-body">
          <div className="row justify-content-end mb-3">
            <div className="col-lg-3">
              <div className="table-search-form mt-5">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Search..."
                  onChange={onInputChange}
                />
              </div>
            </div>
          </div>

          <DataTable headers={headers} posts={filteredData} loading={loading} />

          <div className="row align-items-center mt-2">
            <div className="col-lg-6">
              <div className="number-of-entries">
                Showing {indexOfFirstPost + 1 } to {indexOfLastPost} of{" "}
                {data.length} entries
              </div>
            </div>
            <div className="col-lg-6">
              <ReactPaginate
                previousLabel={"Prev"}
                nextLabel={"Next"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"}
                breakClassName={"page-item"}
                breakLinkClassName={"page-link"}
                containerClassName={"pagination"}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                previousClassName={"page-item"}
                previousLinkClassName={"page-link"}
                nextClassName={"page-item"}
                nextLinkClassName={"page-link"}
                activeClassName={"active"}
              />
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
}



// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import ReactPaginate from "react-paginate";


// function App() {
//   const [offset, setOffset] = useState(0);
//   const [data, setData] = useState([]);
//   const [perPage] = useState(10);
//   const [pageCount, setPageCount] = useState(0);

//   const getData = async () => {
//     const res = await axios.get(`https://jsonplaceholder.typicode.com/photos`);
//     const data = res.data;
//     const slice = data.slice(offset, offset + perPage);
//     const postData = slice.map((pd) => (
//       <div key={pd.id}>
//         <p>{pd.title}</p>
//         <img src={pd.thumbnailUrl} alt="" />
//       </div>
//     ));
//     setData(postData);
//     setPageCount(Math.ceil(data.length / perPage));
//   };
//   const handlePageClick = (e) => {
//     const selectedPage = e.selected;
//     setOffset(selectedPage + 1);
//   };

//   useEffect(() => {
//     getData();
//   }, [offset]);

//   return (
//     <div className="App">
//       {data}
//       <ReactPaginate
//         previousLabel={"prev"}
//         nextLabel={"next"}
//         breakLabel={"..."}
//         breakClassName={"break-me"}
//         pageCount={pageCount}
//         marginPagesDisplayed={2}
//         pageRangeDisplayed={5}
//         onPageChange={handlePageClick}
//         containerClassName={"pagination"}
//         subContainerClassName={"pages pagination"}
//         activeClassName={"active"}
//       />
//     </div>
//   );
// }

// export default App;