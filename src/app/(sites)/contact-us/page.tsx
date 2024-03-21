"use client";
import React, { useState, useEffect } from 'react';
import './contactUs.css'
import {
  GetCountries,
  GetStates,
  GetCities,
} from "react-country-state-city";

const Page = () => {

  const [countryid, setCountryid] = useState(0);
  const [stateid, setStateid] = useState(0);
  const [cityid, setCityid] = useState(0);

  const [countriesList, setCountriesList] = useState([]);
  const [stateList, setStateList] = useState([]);
  const [cityList, setCityList] = useState([]);

  useEffect(() => {
    GetCountries().then((result) => {
      setCountriesList(result);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formDataObj = Object.fromEntries(formData.entries());
    console.log(formDataObj);
  };

  const handleReset = () => {
    document.getElementById('contactForm').reset();
  };

  const customStyles = {
    control: (provided) => ({
      ...provided,
      border: '1px solid black',
      width: '240px',
      height: '50px',
      color: 'black'
    }),
    menu: (provided) => ({
      ...provided,
      color: 'black',
    }),
  };

  return (
    <div className='pt-20 body' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <div  className="wrapper" style={{ width: '50%' }}>
        <h1 className="text-2xl font-bold mb-4" style={{ color: "black", textAlign: "center" }}>እንዚህ ሁሉ መጸሃፍት ከሌሎች ጥቂት የእንግሊዝኛ መጽሃፍት ጋር በሲዲ ተዘጋጅተው ለግዢ ዝግጁ ናቸው፡፡ የበለጠ ለመረዳት በtexlap@juno.com ጻፉልን፡፡</h1>
        <form id="contactForm" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '20px' }}>
            <label htmlFor="firstName" className="block mb-1 text-black w-48">First Name/ yerso sim</label>
            <input type="text" name="firstName" id="firstName" className="input" style={{ border: '1px solid black' }} required />

            <label htmlFor="lastName" className="block mb-1 text-black w-48">Last Name/ ye abat sim</label>
            <input type="text" name="lastName" id="lastName" className="input" style={{ border: '1px solid black' }} required />
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <label htmlFor="phone" className="block mb-1 text-black w-48">Phone/ silk kutr</label>
            <input type="tel" name="phone" id="phone" className="input" style={{ border: '1px solid black' }} />

            <label htmlFor="email" className="block mb-1 text-black w-48">Email/ email</label>
            <input type="email" name="email" id="email" className="input" style={{ border: '1px solid black' }} required />
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <label htmlFor="address" className="block mb-1 text-black w-48">Address:</label>
            <input type="text" name="address" id="address" className="input" style={{ border: '1px solid black' }} />

            <label htmlFor="city" className="block mb-1 text-black w-48">City/ ketema</label>
            <select
              onChange={(e) => {
                const city = cityList[e.target.value]; //here you will get full city object.
                setCityid(city.id);
              }}
              value={cityid}
              style={{width:'240px', height:'50px',border: '1px solid black',borderRadius:'5px' }}
            >
              {cityList.map((item, index) => (
                <option key={index} value={index}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <label htmlFor="state" className="block mb-1 text-black w-48">State/ kilil</label>
            <select
              onChange={(e) => {
                const state = stateList[e.target.value]; //here you will get full state object.
                setStateid(state.id);
                GetCities(countryid, state.id).then((result) => { // Corrected function name
                  setCityList(result);
                });
              }}
              value={stateid}
              style={{width:'240px', height:'50px',border: '1px solid black',borderRadius:'5px' }}
            >
              {stateList.map((item, index) => (
                <option key={index} value={index}>
                  {item.name}
                </option>
              ))}
            </select>
            <label htmlFor="zip" className="block mb-1 text-black w-48">Zip/ posta kutr</label>
            <input type="text" name="zip" id="zip" className="input" style={{ border: '1px solid black' }} />
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <label htmlFor="country" className="block mb-1 text-black w-48">Country/ hager</label>
            <select
              onChange={(e) => {
                const country = countriesList[e.target.value]; // Corrected array name
                setCountryid(country.id);
                GetStates(country.id).then((result) => { // Corrected function name
                  setStateList(result);
                });
              }}
              value={countryid}
              style={{width:'240px', height:'50px',border: '1px solid black',borderRadius:'5px',color:'black' }}
              >
                {countriesList.map((item, index) => (
                  <option key={index} value={index}>
                    {item.name}
                  </option>
                ))}
              </select>
  
              <label htmlFor="questions" className="block mb-1 text-black w-48">Questions, comments, or feedback:</label>
              <textarea name="questions" id="questions" className="textarea" style={{ border: '1px solid black', minHeight: '50px', minWidth: '240px' }} />
  
            </div>
            <div style={{ display: 'flex', gap: '20px' }}>
              <label htmlFor="problems" className="block mb-1 text-black w-48">Any Problems / chigeroch</label>
              <textarea name="problems" id="problems" className="textarea" style={{ border: '1px solid black', minHeight: '50px', minWidth: '240px' }} />
  
              <label htmlFor="favoriteCategory" className="block mb-1 text-black w-48">Your Favorite catagory / yerswo yetewedede kifil?</label>
              <textarea name="favoriteCategory" id="favoriteCategory" className="textarea" style={{ border: '1px solid black', minHeight: '50px', minWidth: '240px' }} />
  
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
              <button type="submit" style={{ color: 'white', background: '#1575ad', padding: '10px', borderRadius: '5px', width: '150px' }}>Submit</button>
              <button type="button" onClick={handleReset} style={{ color: 'white', background: '#1575ad', padding: '10px', borderRadius: '5px', width: '150px' }}>Reset</button>
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default Page;
