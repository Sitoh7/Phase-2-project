import { useState, useEffect } from 'react';
import { Outlet, useOutletContext } from 'react-router-dom';
import ItemCard from '../components/ItemCard';
import Search from '../components/Search';
import Parts from '../components/Parts';

function Home() {
  const [carParts, setCarParts] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  function fetchParts() {
    fetch('http://localhost:3000/carParts')
      .then(res => res.json())
      .then(carParts => setCarParts(carParts));
  }

  useEffect(() => {
    fetchParts();
  }, []);

  function partSearch(search) {
    if (search) {
      const searchedCarParts = carParts.filter(part => part.name.toLowerCase().includes(search.toLowerCase()));
      setCarParts(searchedCarParts);
    } else {
      fetchParts();
    }
  }

  function confirmItem() {
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000);
  }

  return (
    <>
      <Search partSearch={partSearch} />
      <Outlet />
      <Parts carParts={carParts} confirmItem={confirmItem} />
      {showPopup && (
        <div style={{ position: 'fixed', top: '20px', right: '20px', background: '#333', color: '#fff', padding: '10px', borderRadius: '5px' }}>
          Item added to cart
        </div>
      )}
    </>
  );
}

export default Home;
