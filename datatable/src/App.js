import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Container, Table, Form, FormControl, Button } from "react-bootstrap";

function App() {
   const [users, setUsers]  = useState("")


useEffect(  () =>  {
  const fetchData = async() =>{
   const userData =  await axios.get("https://jsonplaceholder.typicode.com/users");
   console.log(userData) 
     setUsers(userData);
  
  }
  fetchData()
 
  
}, [])

  return (
    <div className="App">
      <Container className="my-5">
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
        <br></br>

        <Table striped bordered hover variant="dark" mt-5>
          <thead>
            <tr>
              <th>#</th>
              <th> Name</th>
              <th> Email</th>
              <th>Address</th>
            </tr>
          </thead>

          <tbody>
            {users.data &&
              users.data.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.address.city}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}
export default App;
