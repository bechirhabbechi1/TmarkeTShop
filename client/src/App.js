import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import ProductScreen from './screens/ProductScreen';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column">
        <header>
          <Navbar className="nvb">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand className="brnt">Tmarket</Navbar.Brand>
              </LinkContainer>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container className="mt-3">
            <Routes>
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/" element={<HomeScreen />} />
            </Routes>
          </Container>
        </main>
        <footer>
          <div className="text-center">
            All rights reserved Powered by BechirHabbechi
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;