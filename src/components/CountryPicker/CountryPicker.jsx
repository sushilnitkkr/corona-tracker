import React, {useState,useEffect} from 'react';
import  {NativeSelect, FormControl} from '@material-ui/core';
import styles from  './CountryPicker.module.css';
import {fetchCountry} from '../../api';
const CountryPicker = ({handleCountryChange})=>{
const [fetchedCountries, setFetchedCountries]  = useState([]);
 useEffect(() => {
     const fetchAPI = async ()=>{
             setFetchedCountries(await fetchCountry());
     }
     fetchAPI();
 }, [setFetchedCountries]);
 console.log(fetchedCountries);
    return (
        <FormControl className = {styles.formControl}>
            <NativeSelect defaultValue = ""  justify ="center" onChange = {(e)=> handleCountryChange(e.target.value)}>
                <option value = ""> Global</option>
                {fetchedCountries.map((country,i)=> <option key = {i} value = {country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;