const weatherForm=document.querySelector('form')
const search=document.querySelector('input')
const p1=document.querySelector('.p1')
const p2=document.querySelector('.p2')

//Getting the weather data from the API endpoint
weatherForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    p1.textContent=""
    p2.textContent=""
    p1.classList.add("lds-dual-ring")
    const location=search.value
    axios.get(`/weather?address=${location}`)
    .then((response)=>{
        if(response.data.error){
            throw "No weather data found"
        }
        p1.classList.remove("lds-dual-ring")
        p1.textContent=response.data.location
        p2.textContent=`${response.data.description}. It is currently ${response.data.temperature} degress out. It feels like ${response.data.feelslike} degress out`
    })
    .catch((err)=>{
        p1.classList.remove("lds-dual-ring")
        p1.textContent="Error"
        p2.textContent=err
    })
    
})

//Getting the users coordinate information using geolocation API
function geoFindMe() {
    function success(position) {
      const latitude  =position.coords.latitude;
      const longitude =position.coords.longitude;
      axios.get(`/weather?latitude=${latitude}&longitude=${longitude}`)
      .then((response)=>{
          if(response.data.error){
              throw "No weather data found"
          }
          p1.textContent=response.data.location
          p2.textContent=`${response.data.description}. It is currently ${response.data.temperature} degress out. It feels like ${response.data.feelslike} degress out`
      })
      .catch((err)=>{
        console.log(err)
      })
    }
  
    function error() {
     console.log("Unable to fetch location...")
    }
  
    if(!navigator.geolocation) {
      console.log('Geolocation is not supported by your browser');
    } else {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  
  }
  
  geoFindMe()
