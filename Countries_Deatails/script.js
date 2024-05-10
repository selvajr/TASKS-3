

const API_URL ="https://restcountries.com/v3.1/all";

function reqListener() {
    console.log(this.responseText);
  }
  
  function reqListener() {
    const CountriesData=JSON.parse(this.responseText);
    for(let ind =0; ind< CountriesData.length; ind++){
        console.log(CountriesData[ind].name.common, CountriesData[ind].region, CountriesData[ind].subregion);
    }
  } 
  
  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", API_URL);
  req.send();