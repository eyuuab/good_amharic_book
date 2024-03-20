"use client";
import React from 'react';
import Select from 'react-select';

const Page = () => {
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
      width:'240px',
      height:'50px',
      color:'black'
    }),
    menu: (provided) => ({
      ...provided,
      color: 'black',
    }),
  };

  const countryOptions = [
    { value: 'Ethiopia', label: 'Ethiopia' },
    { value: 'USA', label: 'America' },
    { value: 'Japan', label: 'Japan' },
    // Add more countries as needed
  ];

  return (
    <div className='pt-20 bg-gray-100'style={{ display: 'flex',alignItems:'center', justifyContent: 'center', height:'100vh'}}>
      <div style={{ width: '50%' }}>
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
            <input type="text" name="city" id="city" className="input" style={{ border: '1px solid black' }} />
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <label htmlFor="state" className="block mb-1 text-black w-48">State/ kilil</label>
            <input type="text" name="state" id="state" className="input" style={{ border: '1px solid black' }} />

            <label htmlFor="zip" className="block mb-1 text-black w-48">Zip/ posta kutr</label>
            <input type="text" name="zip" id="zip" className="input" style={{ border: '1px solid black' }} />
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <label htmlFor="country" className="block mb-1 text-black w-48">Country/ hager</label>
             <Select
              options={countryOptions}
              isSearchable={true}
              name="country"
              styles={customStyles}
            />

<label htmlFor="questions" className="block mb-1 text-black w-48">Questions, comments, or feedback:</label>
<textarea name="questions" id="questions" className="textarea" style={{ border: '1px solid black', minHeight: '50px', minWidth:'240px' }} />

          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <label htmlFor="problems" className="block mb-1 text-black w-48">Any Problems / chigeroch</label>
            <textarea name="problems" id="problems" className="textarea" style={{ border: '1px solid black', minHeight: '50px', minWidth:'240px' }} />

            <label htmlFor="favoriteCategory" className="block mb-1 text-black w-48">Your Favorite catagory / yerswo yetewedede kifil?</label>
            <textarea name="favoriteCategory" id="favoriteCategory" className="textarea" style={{ border: '1px solid black', minHeight: '50px', minWidth:'240px' }} />
            
          </div>
          <div style={{ display: 'flex', justifyContent: 'center',gap:'20px' }}>
            <button type="submit" style={{ color: 'white', background: '#1575ad', padding: '10px', borderRadius: '5px', width: '150px' }}>Submit</button>
            <button type="button" onClick={handleReset} style={{ color: 'white', background: '#1575ad', padding: '10px', borderRadius: '5px', width: '150px' }}>Reset</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
