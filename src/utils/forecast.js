const axios = require('axios').default;
require('dotenv').config()
//Function to get the weather forecast information
const forecast=async ({latitude,longitude}={})=>{
    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.FORECAST}&units=metric`
    try {
        const response = await axios.get(url);
        // console.log(response.data.current);
        if(response.data.message){
            throw response.data.message
        }
        const data={
            location:response.data.name,
            description:response.data.weather[0].main,
            temperature:response.data.main.temp,
            feelslike:response.data.main.feels_like
        }
        return data
        // console.log(`${response.data.location.name}`)
        // console.log(`${response.data.current.weather_descriptions[0]}. It is currently ${response.data.current.temperature} degress out. It feels like ${response.data.current.feelslike} degress out`);
      } catch (error) {
        throw error;
      }
}

module.exports=forecast