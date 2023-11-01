import React from 'react'
import { useState } from 'react'

const Practice1 = () => {
    const countries = [
        {
            name: "India", value: "IN", cities: [
                "Delhi", "Mumbai"
            ]
        },
        {
            name: "United Kingdom", value: "UK", cities: [
                "London", "Manchester"
            ]
        },
        {
            name: "Ireland", value: "IRE", cities: [
                "Dublin", "Cork"
            ]
        }
    ]
    const [chooseCountry, setChooseCountry] = useState("");
    const [chooseCity, setChooseCity] = useState("");
    const handleSelectCountry = (e) => {
        setChooseCountry(e.target.value);
        setChooseCity("")
    }
    const handleSelectCity = (e) => {
        setChooseCity(e.target.value);
    }
  return (
    <>
    <div>
    <select name="select-country" id="select-country" value={chooseCountry} onChange={handleSelectCountry}>
        {
            countries.map((data, index) => (
                <option value={data.value} key={index}>{data.name}</option>
            ))
        }
    </select>
    </div>
    <div>
        {
            chooseCountry && (
                <select name="select-city" id="select-city" value={chooseCity} onChange={handleSelectCity}>
                    <option value="">Select City Name</option>
                    {
                        countries.find((country) => country.value === chooseCountry).cities.map((city, index) => (
                            <option value={index} key={index}>{city}</option>
                        ))
                    }
                </select>
            )
         }
    </div>
    <div>
    {chooseCountry && chooseCity && (
        <p>
          Selected country: {chooseCountry}, Selected city: {chooseCity}
        </p>
      )}
    </div>
    </>
  )
}

export default Practice1;