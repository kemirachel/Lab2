
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

 

function App() {
  // React App


  return (
  <BrowserRouter>
    <div className="App">
      {/*here is a nav navbar for all my componrnts */}
          <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/read">Read</Nav.Link>
            <Nav.Link href="/create">Create</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
 
      {/*added some routing linka here */}

<Routes>
  <Route path='/' element={<Content></Content>}></Route>
  <Route path='/read' element={<Header></Header>}></Route>
  <Route path='/create' element={<Footer></Footer>}></Route>


</Routes>

    

    </div>
  
    </BrowserRouter>
  );
}

export default App;
