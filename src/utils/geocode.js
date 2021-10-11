const axios = require('axios').default;
require('dotenv').config()

//Function to reverse geocode an address
const geocode=async (address)=>{
    const geocodeUrl=`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${process.env.GEOCODE}&limit=1`
    try {
        const response = await axios.get(geocodeUrl);
        // console.log(response.data.current);
        if(response.data.features.length==0){
            throw "Unable to find location."
        }
        const data={
            latitude:response.data.features[0].center[1],
            longitude:response.data.features[0].center[0]
        }
        
        return data
        // 
      } catch (error) {
        throw error;
      }
}
module.exports=geocode