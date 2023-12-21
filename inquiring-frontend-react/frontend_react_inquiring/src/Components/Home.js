import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Renderer from '../Renderer';
import Axios from 'axios';
import call_query from '../call-query.avif'


const baseUrl = "http://localhost:8000/api/inquiry-create/";

function App() {
  const [data, setData] = useState({
    firstName: '',
    address: '',
    email: '',
    phoneNumber: '',
    message: '',
    branch: '',
    agree: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    console.log(name, value);
    setData((prev) => ({
      ...prev,
      [name]: newValue
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', data);
    Axios.post(baseUrl, {
      name: data.firstName,
      email: data.email,
      address: data.address,
      phonnumber: data.phoneNumber,
      branch: data.branch,
      message: data.message
    })
      .then((response) => {
        console.log("Response:",response.data);
        if (response.status === 201) {
          // Redirect to another page
          // history.push('/success');
          // window.location.href = '/';
              // Redirect to another page with query parameters
              const queryParams = `?name=${data.firstName}&email=${data.email}`;
              const redirectUrl = `/query-submit/success${queryParams}`;
              window.location.href = redirectUrl;
        }
        else{
          console.log("Error submitting form")
        }
      })
      .catch((error) => {
        console.log(error);
      });
    setData({
      firstName: '',
      address: '',
      email: '',
      phoneNumber: '',
      message: '',
      branch: '',
      agree: false
    }); // Clear form fields
    

  };

  return (

    <>
 
     <style>{`
        body {
          background-color: #f8f9fa;
        }
      `}</style>
    <div className="container mt-5 mb-5">
    <div className="row gx-5 align-items-start">
      <div className="col-md-3 p-0 shadow rounded mt-5">
      <img src={call_query} className="img-fluid" alt="Img"/>
      </div>
      <div className="col-md-9 ps-5">
      <h1 className="mb-4 text-center text-primary display-4 text-bold custom-font">INQUIRY-Sharing-Problems</h1>
      <form className='row gx-3' onSubmit={handleSubmit} action="https://google.com">
        <div className="mb-3 col-md-6">
          <label htmlFor="firstName" className="form-label text-secondary">
            Name:
          </label>
          <input
            type="text"
            className="form-control custom-input"
            id="firstName"
            name="firstName"
            value={data.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 col-md-6">
          <label htmlFor="Address" className="form-label text-secondary">
            Address:
          </label>
          <input
            type="text"
            className="form-control custom-input"
            id="address"
            name="address"
            value={data.address}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 col-md-6">
          <label htmlFor="email" className="form-label text-secondary">
            Email:
          </label>
          <input
            type="email"
            className="form-control custom-input"
            id="email"
            name="email"
            value={data.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 col-md-6">
          <label htmlFor="phoneNumber" className="form-label text-secondary">
            Phone Number:
          </label>
          <input
            type="tel"
            className="form-control custom-input"
            id="phoneNumber"
            name="phoneNumber"
            value={data.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 col-12">
          <label htmlFor="branch" className="form-label text-secondary">
            Branch:
          </label>
          <select
            id="branch"
            className="form-select custom-input text-secondary"
            name="branch"
            value={data.branch}
            onChange={handleChange}
          >
            <option value="">Select Branch</option>
            <option value="Itahari">Itahari</option>
            <option value="Pokhara">Pokhara</option>
            <option value="Kathmandu">Kathmandu</option>
            <option value="Biratnagar">Biratnagar</option>
            <option value="Birtamod">Birtamod</option>
            <option value="Dharan">Dharan</option>
            <option value="Butwal">Butwal</option>
            <option value="Chitwan">Chitwan</option>
          </select>
        </div>
        <div className="mb-3 col-12">
        <label htmlFor="Message" className="form-label text-secondary">
            Message:
          </label>
          <textarea
            className="form-control custom-input"
            placeholder="Message"
            rows="4"
            name="message"
            value={data.message}
            onChange={handleChange}
          />
        </div>
   
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="agree"
            name="agree"
            checked={data.agree}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="agree">
            I agree to the terms and conditions
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Send
        </button>
      </form>

      </div>
    </div>

  </div>

  </>
  );
}

export default App;


