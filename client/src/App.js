import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { useContext } from 'react';
import { Store } from './Store';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import ProductScreen from './screens/ProductScreen';
import HomeScreen from './screens/HomeScreen';
import Badge from 'react-bootstrap/esm/Badge';
import CartScreen from './screens/CartScreen';

function App() {
  const { state } = useContext(Store);
  const { cart } = state;
  return (
    <BrowserRouter>
      <div className="d-flex flex-column">
        <header>
          <Navbar className="nvb">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand className="brnt">Tmarket</Navbar.Brand>
              </LinkContainer>
              <Nav className="me-auto">
                <Link to="/cart" className="nav-link">
                  Cart
                  {cart.cartItems.length > 0 && (
                    <Badge pill bg="danger">
                      {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                    </Badge>
                  )}
                </Link>
              </Nav>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container className="mt-3">
            <Routes>
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/" element={<HomeScreen />} />
              <Route path="/cart" element={<CartScreen />} />
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
