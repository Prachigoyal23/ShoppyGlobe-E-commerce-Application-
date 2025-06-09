import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Header.css'

function Header(){
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const location = useLocation(); // 👈 Get current route

  const handleSearch = (e) => {
    if (e.key === 'Enter' && search.trim()) {
      navigate(`/search?q=${search.trim()}`);
    }
  };

  const isHomePage = location.pathname === '/';

  return (
    <header>
      <h2>ShoppyGlobe <img width='60px' height='60px' src="https://www.shutterstock.com/image-vector/light-blue-shopping-bag-white-260nw-2514691587.jpg" alt="ShoppyGlobe Logo" /></h2>
      {/* Navigation Bar */}
      <nav>
        <div>
          <Link to="/">Home</Link>
          <Link to="/category/beauty">Beauty</Link>
          <Link to="/category/furniture">Furniture</Link>
          <Link to="/category/fragrances">Fragrances</Link>
          <Link to="/category/groceries">Groceries</Link>
        </div>

        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleSearch}
          
        />

        <Link to="/cart"><img width='50px' height='40px' src="https://static.vecteezy.com/system/resources/previews/004/999/463/non_2x/shopping-cart-icon-illustration-free-vector.jpg" alt="Cart" /></Link>
      </nav>

      {/* Show Carousel only on Home Page */}
      {isHomePage && (
        <Carousel
          autoPlay
          infiniteLoop
          interval={3000}
          showThumbs={false}
          showStatus={false}
          stopOnHover={false}
        >
          <div>
            <img
              src="https://static.vecteezy.com/system/resources/previews/000/675/828/non_2x/online-shopping-on-laptop-computer-or-e-commerce-on-blue-background-vector.jpg"
              alt="Slide 1"
            />
          </div>
          <div>
            <img
              src="https://cdn.pixabay.com/photo/2024/08/05/09/13/woman-8946233_1280.png"
              alt="Slide 2"
            />
          </div>
          <div>
            <img
              src="https://cdn.pixabay.com/photo/2020/12/10/12/33/laptop-5820171_1280.png"
              alt="Slide 3"
            />
          </div>
        </Carousel>
      )}
    </header>
  );
};

export default Header;




