import React from "react";

const DataTable = ({ posts, loading, headers }) => {


  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="table-responsive">
      <table className="table table-hover">
        <thead>
          <tr>
            {headers.map((head, index) => (
              <th key={index} scope="col" className="text-center">
                {head}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {posts &&
            posts.map((row, index) => (
              <tr key={index}>
                {headers.map((head, index) => (
                  <td key={index} className="text-center">
                    {row[head]}
                  </td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
