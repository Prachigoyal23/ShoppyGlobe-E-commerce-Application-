// import React, { Suspense, lazy } from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import NotFound from './components/NotFound';

// const ProductList = lazy(() => import('./components/ProductList'));
// const ProductDetail = lazy(() => import('./components/ProductDetail'));
// const Cart = lazy(() => import('./components/Cart'));
// const CategoryPage = lazy(() => import('./components/CategoryPage'));
// const SearchResults = lazy(() => import('./components/SearchResult'));

// function App() {
//   return (
//     <div>
//       <Header />
//       <Suspense fallback={<p>Loading...</p>}>
//         <Routes>
//           <Route path="/" element={<ProductList />} />
//           <Route path="/product/:id" element={<ProductDetail />} />
//           <Route path="/cart" element={<Cart />} />
//           <Route path="/category/:category" element={<CategoryPage />} />
//           <Route path="/search" element={<SearchResults />} />
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </Suspense>
//     </div>
//   );
// }

// export default App;


import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import NotFound from './components/NotFound';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer';

const ProductList = lazy(() => import('./components/ProductList'));
const ProductDetail = lazy(() => import('./components/ProductDetail'));
const Cart = lazy(() => import('./components/Cart'));
const CategoryPage = lazy(() => import('./components/CategoryPage'));
const SearchResults = lazy(() => import('./components/SearchResult'));
const OrderSuccess = lazy(()=>import ('./components/OrderSuccess'));

function App() {
  return (
    <div>
      <Header />
      <ToastContainer position="top-right" autoClose={2000} />
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout-success" element={<OrderSuccess />} /> 
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer/>
      </Suspense>
    </div>
  );
}

export default App;



