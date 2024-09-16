import React, { useState } from 'react';
import './RSVPForm.css'; // For underwater animation and styling
import { db } from './firebaseConfig'; // Import Firebase configuration
import { collection, addDoc } from 'firebase/firestore';

const RSVPForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    adults: 0,
    kids: 0,
    menuPreference: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Add data to Firestore
      await addDoc(collection(db, 'RSVPs'), formData);
      alert('RSVP Submitted!');
      setFormData({
        name: '',
        adults: 0,
        kids: 0,
        menuPreference: '',
        message: '',
      }); // Reset form after submission
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <div className="rsvp-form-container">
      <h2>RSVP to the Underworld Party</h2>
      <form onSubmit={handleSubmit} className="rsvp-form">
        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Number of Adults:</label>
          <input type="number" name="adults" value={formData.adults} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Number of Kids:</label>
          <input type="number" name="kids" value={formData.kids} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Menu Preference:</label>
          <select name="menuPreference" value={formData.menuPreference} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="veg">Vegetarian</option>
            <option value="non-veg">Non-Vegetarian</option>
          </select>
        </div>
        <div className="form-group">
          <label>Additional Message:</label>
          <textarea name="message" value={formData.message} onChange={handleChange}></textarea>
        </div>
        <button type="submit">Make a Splash</button>
      </form>
    </div>
  );
};

export default RSVPForm;
