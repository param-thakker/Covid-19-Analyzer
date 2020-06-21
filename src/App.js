import React from 'react';
import styles from './App.module.css';
import Cards from "./components/Cards/Cards";
import Chart from "./components/Chart/Chart";
import CountryPicker from "./components/CountryPicker/CountryPicker";
import fetchData from "./fetchAPI";
import Covid from "./Covid19.jpg"


class App extends React.Component{
  constructor(){
    super();
    this.state={
      data:{},
      country:''
     
    }
    this.handleCountryChange=this.handleCountryChange.bind(this);
  }

  async componentDidMount(){
    const data= await fetchData();
   
    this.setState({data:data})
    

  }
  handleCountryChange=async(country)=>{
    const data=await fetchData(country);
    this.setState({data:data,country:country})
  }

  render(){
    const style={
      color:'red'
    }
    return(
      <div className={styles.container}>
        <h1 className={styles.heading}>Welcome to the Covid-19 Tracker</h1>
       
        <p><h3 className={styles.para1} >About Covid-19</h3></p>
        <span><h3 className={styles.para2}>Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus. Coronaviruses (CoV) are a large family of viruses that cause illness ranging from the common cold to more severe diseases. Common signs of infection include respiratory symptoms, fever, cough, shortness of breath and breathing difficulties. In more severe cases, infection can cause pneumonia, severe acute respiratory syndrome, kidney failure and even death.
        Standard recommendations to prevent infection spread include regular hand washing, covering mouth and nose when coughing and sneezing.
        Covid-19 was first identified amid an outbreak of respiratory illness cases in Wuhan City, Hubei Province, China in December 2019. The outbreak has been spreading around the world since January 2020 making it a global pandemic.</h3> </span>
        
        <div><h3>Take a look at the structure of SARS-CoV-2 which causes Covid-19 :</h3></div>
        <img className={styles.image} src={Covid} alt="Covid-19"/>
        <p><h3 style={style}>The charts below show how Covid-19 has been spreading throughout the world</h3></p>
        <Cards info={this.state.data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart info={this.state.data} country={this.state.country}/>
        
        
      </div>
    )
  }
}

export default App;
