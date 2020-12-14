import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Container, Form, FormControl, Button } from "react-bootstrap";
import Posts from './components/Posts';
import Pagination from "./components/Pagination";

function App() {
   const [posts, setPosts]  = useState([])
   const [loading, setLoading] = useState(false)
   const [ currentPage, setCurrentPage] = useState(1)
   const [postsPerPage] = useState(5)

useEffect(  () =>  {
  const fetchPosts = async() =>{
    setLoading(true)
   const res =  await axios.get("https://jsonplaceholder.typicode.com/posts");
     setPosts(res.data);
     setLoading(false)
  
  }
  fetchPosts()
}, [])
console.log(posts);

//Get current posts
const indexOfLastPost = currentPage * postsPerPage
const indexOfFirstPost = indexOfLastPost - postsPerPage
const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

const paginate = pageNumber => setCurrentPage(pageNumber)

  return (
    <div className="App">
      <Container className="my-5">
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
        <br></br>

        <Posts posts={currentPosts} loading={loading} />

        <Pagination postsPerPage={postsPerPage} totalPosts={posts.length}
        paginate={paginate}
        />
     
      </Container>
    </div>
  );
}
export default App;
