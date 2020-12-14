import React from 'react';
import { Table } from "react-bootstrap";


const Posts = ({ posts, loading }) => {

    if(loading){
        return <h2>Loading...</h2>
    }
    return (
      <Table striped bordered hover variant="dark" mt-5>
        <thead>
          <tr>
            <th>#</th>
            <th> Title</th>
           
          </tr>
        </thead>
        <tbody>
          {posts &&
            posts.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    );
}
 
export default Posts;