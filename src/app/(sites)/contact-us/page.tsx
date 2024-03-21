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

  return (
    <div className='pt-20 body'>
      <div  className="wrapper">
        <h1 className=" mb-4">እንዚህ ሁሉ መጸሃፍት ከሌሎች ጥቂት የእንግሊዝኛ መጽሃፍት ጋር በሲዲ ተዘጋጅተው ለግዢ ዝግጁ ናቸው፡፡ የበለጠ ለመረዳት በtexlap@juno.com ጻፉልን፡፡</h1>
        <form id="contactForm" onSubmit={handleSubmit}>
          <div className="form-group" style={{display:"flex"}} style={{display:"flex"}}>
            <label htmlFor="firstName">First Name/ yerso sim</label>
            <input type="text" name="firstName" id="firstName" className="input" required />
          </div>
          <div className="form-group" style={{display:"flex"}}>
            <label htmlFor="lastName">Last Name/ ye abat sim</label>
            <input type="text" name="lastName" id="lastName" className="input" required />
          </div>
          <div className="form-group" style={{display:"flex"}}>
            <label htmlFor="phone">Phone/ silk kutr</label>
            <input type="tel" name="phone" id="phone" className="input" />
          </div>
          <div className="form-group" style={{display:"flex"}}>
            <label htmlFor="email">Email/ email</label>
            <input type="email" name="email" id="email" className="input" required />
          </div>
          <div className="form-group" style={{display:"flex"}}>
            <label htmlFor="address">Address:</label>
            <input type="text" name="address" id="address" className="input" />
          </div>
          <div className="form-group" style={{display:"flex"}}>
            <label htmlFor="city">City/ ketema</label>
            <select
              onChange={(e) => {
                const city = cityList[e.target.value];
                setCityid(city.id);
              }}
              value={cityid}
              className="select"
            >
              {cityList.map((item, index) => (
                <option key={index} value={index}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group" style={{display:"flex"}}>
            <label htmlFor="state">State/ kilil</label>
            <select
              onChange={(e) => {
                const state = stateList[e.target.value];
                setStateid(state.id);
                GetCities(countryid, state.id).then((result) => {
                  setCityList(result);
                });
              }}
              value={stateid}
              className="select"
            >
              {stateList.map((item, index) => (
                <option key={index} value={index}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group" style={{display:"flex"}}>
            <label htmlFor="zip">Zip/ posta kutr</label>
            <input type="text" name="zip" id="zip" className="input" />
          </div>
          <div className="form-group" style={{display:"flex"}}>
            <label htmlFor="country">Country/ hager</label>
            <select
              onChange={(e) => {
                const country = countriesList[e.target.value];
                setCountryid(country.id);
                GetStates(country.id).then((result) => {
                  setStateList(result);
                });
              }}
              value={countryid}
              className="select"
            >
              {countriesList.map((item, index) => (
                <option key={index} value={index}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group" style={{display:"flex"}}>
            <label htmlFor="questions">Questions, comments, or feedback:</label>
            <textarea name="questions" id="questions" className="textarea"></textarea>
          </div>
          <div className="form-group" style={{display:"flex"}}>
            <label htmlFor="problems">Any Problems / chigeroch</label>
            <textarea name="problems" id="problems" className="textarea"></textarea>
          </div>
          <div className="form-group" style={{display:"flex"}}>
            <label htmlFor="favoriteCategory">Your Favorite catagory / yerswo yetewedede kifil?</label>
            <textarea name="favoriteCategory" id="favoriteCategory" className="textarea"></textarea>
          </div>
          <div className="button-group">
            <button type="submit">Submit</button>
            <button type="button" onClick={handleReset}>Reset</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
