import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Error from './components/Error';
import Weather from './components/Weather';

function App() {

    //state principal
    //city = state, setCity = this.setState()
    const [ city, setCity ] = useState('');
    const [ country, setCountry ] = useState('');
    const [ error, setError ] = useState(false);
    const [ result, setResult ] = useState({});

    useEffect(() => {

      const consultAPI = async () => {

        const appId = 'dae3ad6b4d6de4e5a1e1fd9e7da1b046';
  
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`;
  
        // consultar la URL
        const answer = await fetch(url);
        const result = await answer.json();
  
        

       setResult(result);
        
      }

      //prevenir ejecucion
      if (city ==='') return;

      consultAPI();
      }, [ city, country ]);



    const dataConsult = data => {
      
      //validar que ambos campos esten
      if(data.city === '' || data.country === '') {
        //un error
        setError(true);
        return;
      }

      // City y pais existe, add al state
      setCity(data.city);
      setCountry(data.country);
      setError(false);
    }


    


    //Cargar un componente condicionalmente
    let component;
    if(error) {
      // hay un error, mostrarlo
      component = <Error message ='Both fields are necessary' />
    } else if (result.cod === "404") {
      component = <Error  message = "The city doesn't exist in our registry" />

    } else {
      // Mostrar el clima
      component = <Weather 
                      result = {result}
                    />;
    }


  return (
    <div className = "App">
      <Header 
        title = 'Weather React App'
      />

      <div className = "contenedor-form">
        <div className = "container">
          <div className = "row">
            <div className = "col s12 m6">
              <Form 
                dataConsult = {dataConsult}
              />
            </div>
            <div className = "col s12 m6">
              {component}
            </div>
          </div>
      </div>
    </div>
    </div>
  );
}

export default App;
