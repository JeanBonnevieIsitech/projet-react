function Weather(props){
    if (!props.weather){
        return false
    }
    
    if (props.weather.error){
        return <h2>{props.weather.error}</h2>

    }

    if (props.weather.loading){
        return <h2>Chargement...</h2>
    }
    else{

        return (
            <h2>Aujourd'hui la météo : {props.weather.weather["0"].description} et il fait {props.weather.main.temp}°c</h2>
            );
        }
}

export default Weather