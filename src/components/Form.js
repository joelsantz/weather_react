import React, { useState } from 'react';

function Form({dataConsult}) {

    // state del Componente
    // search = state, setSearch = this.setState
    const [search, setSearch] = useState ({
        city : '',
        country : ''
    })
    
    const handleChange = e => {
        //cambiar el state
        setSearch ({
            ...search,
            [e.target.name] : e.target.value
        });

        
    }

    const consultWeather = e => {
        e.preventDefault();

        //Pasar hacia el componente principal la busqueda del usuario
        dataConsult(search);
    }
    
    
    return (
        <form
            onSubmit = {consultWeather}
        >
            <div className = "input-field col s12">
                <input 
                    type = "text"
                    name = "city"
                    id = "city"
                    onChange = {handleChange}
                />
                <label htmlFor = "city">City: </label>
            </div>

            <div className = "input-field col s12">
                <select onChange = {handleChange} name = "country">
                    <option value = "">Select a Country</option>
                    <option value = "US">United States</option>
                    <option value = "MX">Mexico</option>
                    <option value = "CO">Colombia</option>
                    <option value = "BR">Brazil</option>
                    <option value = "ES">Spain</option>
                    <option value = "AR">Argentina</option>
                </select>
            </div>

            <div className =  "input-field col s12">
                <input type = "submit" className = "waves-effect waves-light btn-large btn-block yellow accent-4" value = "Search Weather!"/>
            </div>
        </form>

    )
}

export default Form;