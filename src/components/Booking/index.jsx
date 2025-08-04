import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { FaCheckCircle } from "react-icons/fa";

import './index.css';

const Booking = ({ doctors }) => {
  const { id } = useParams();
  const details = doctors.find((each) => each.id === id);

  const [confirmed, setConfirmed] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
  });

  useEffect(() => {
    // Reset form when ID (doctor) changes
    setConfirmed(false);
    setFormData({
      name: '',
      email: '',
      date: '',
      time: '',
    });
  }, [id]);

  if (!details) return <h1>Doctor not found</h1>;

  const { name: doctorName } = details;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    const { name, email, date, time } = formData;
    if (name && email && date && time) {
      setConfirmed(true);
    } else {
      alert('Please fill in all fields.');
    }
  };

  const { date, time } = formData;

  const navigate = useNavigate();

  return (
    <div className="booking-container">
      {!confirmed ? (
        <>
          <h1 className="booking-heading">Book Appointment with {doctorName}</h1>
          <form className="booking-form" onSubmit={onSubmitForm}>
            <label htmlFor="name" className="label-text">Name</label>
            <input type="text" id="name" className="input-element" name="name" onChange={handleChange} value={formData.name} />

            <label htmlFor="email" className="label-text">Email</label>
            <input type="email" id="email" className="input-element" name="email" onChange={handleChange} value={formData.email} />

            <label htmlFor="date" className="label-text">Date</label>
            <input type="date" id="date" className="input-element" name="date" onChange={handleChange} value={formData.date} />

            <label htmlFor="time" className="label-text">Time</label>
            <input type="time" id="time" className="input-element" name="time" onChange={handleChange} value={formData.time} />

            <button type="submit" className="confirm-booking">Confirm Booking</button>
          </form>
        </>
      ) : (
        <div className='confirmed-container'>
            <FaCheckCircle className='confirmed-icon'/>
            <h1 className='confirmed-heading'>Booking Confirmed</h1>
            <p className='confirmend-content'>{`Your appointment with Dr. ${doctorName} is confirmed for ${date} at ${time}.`}</p>
            <button onClick={() => navigate('/')} className="back-home-button" >
                Go to Home
            </button>
        </div>
      )}
    </div>
  );
};

export default Booking;
