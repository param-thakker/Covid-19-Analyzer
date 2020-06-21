import React from "react";


const fetchData= async (country)=>{
    let newUrl='https://covid19.mathdro.id/api';
    if (country){
        newUrl=`https://covid19.mathdro.id/api/countries/${country}`
    }
   const response=await fetch(newUrl)
   const data=await response.json();
   const requiredInfo={
            confirmed:data.confirmed,
            deaths:data.deaths,
            recovered:data.recovered,
            lastUpdate:data.lastUpdate
    }
        return requiredInfo; 
    
}
export const fetchDailyData=async()=>{
    const response=await fetch('https://covid19.mathdro.id/api/daily')
    const data=await response.json();
    const modifiedData=data.map((dailyData)=>({
        confirmed:dailyData.confirmed.total,
        deaths:dailyData.deaths.total,
        date:dailyData.reportDate,
    }))
    return modifiedData;
}

export const fetchCountries=async()=>{
    const response=await fetch('https://covid19.mathdro.id/api/countries')
    const data=await response.json();
    const {countries}=data
    return countries.map((country)=>country.name);
}

export default fetchData;
