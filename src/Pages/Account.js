import React, { useState, useEffect } from 'react';

function Account() {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    address: '',
    deliveryOption: 'standard',
  });

  useEffect(() => {
    // Load saved data from localStorage if it exists
    const savedData = localStorage.getItem('userData');
    if (savedData) {
      setUserData(JSON.parse(savedData));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save data to localStorage
    localStorage.setItem('userData', JSON.stringify(userData));
    alert('Your information has been saved successfully.');
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Account Information</h2>
      <form onSubmit={handleSubmit} style={{ display: 'inline-block', textAlign: 'left' }}>
        <div style={{ marginBottom: '10px' }}>
          <label>Name:</label><br />
          <input
            type="text"
            name="name"
            value={userData.name}
            onChange={handleChange}
            style={{ padding: '8px', width: '100%' }}
            required
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Email:</label><br />
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            style={{ padding: '8px', width: '100%' }}
            required
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Address:</label><br />
          <input
            type="text"
            name="address"
            value={userData.address}
            onChange={handleChange}
            style={{ padding: '8px', width: '100%' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Delivery Option:</label><br />
          <select
            name="deliveryOption"
            value={userData.deliveryOption}
            onChange={handleChange}
            style={{ padding: '8px', width: '100%' }}
          >
            <option value="standard">Standard Delivery</option>
            <option value="express">Express Delivery</option>
          </select>
        </div>
        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', cursor: 'pointer' }}>
          Save Information
        </button>
      </form>
    </div>
  );
}

export default Account;
