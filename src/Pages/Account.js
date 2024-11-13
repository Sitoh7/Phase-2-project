import React, { useState } from 'react';

const AccountSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;

    // Basic validation (can be more extensive)
    const error = value.trim() === '' ? 'Field is required' : '';
    setErrors({ ...errors, [name]: error });

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // More advanced validation and error handling can be added here

    // Send data to server (replace with your server-side logic)
    fetch('/your-api-endpoint', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        // Handle success, e.g., show a success message, redirect
      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle errors, e.g., show an error message
      });

    // Clear form after successful submission
    setFormData({ name: '', email: '', location: '' });
  };

  return (
    <div>
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
          {errors.location && <p className="error">{errors.location}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AccountSection;