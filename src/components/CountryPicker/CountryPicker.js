import React,{useState,useEffect} from "react";
import{NativeSelect,FormControl} from '@material-ui/core';
import styles from "./CountryPicker.module.css";
import {fetchCountries} from '../../fetchAPI';
const CountryPicker=(props)=>{
    const [fetchedCountries,setFetchedCountries]=useState([]);
    useEffect(()=>{
        const fetchAPI=async()=>{
            const countryData=await fetchCountries();
            setFetchedCountries(countryData);
            
        }
        fetchAPI();
    },[setFetchedCountries])
   
    return(<div>
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e)=>props.handleCountryChange(e.target.value)}>
                <option value="">Global</option>
                {fetchedCountries.map((country,i)=><option key={i} value={country}>{country}</option>)}

            </NativeSelect>
        </FormControl>
    </div>);
}

export default CountryPicker