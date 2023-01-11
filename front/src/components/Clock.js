function Clock(props){
    return (
    <div>
    <h2>Nous sommes le : {props.time.toLocaleDateString()}</h2>
    <h2>Il est actuellement : {props.time.toLocaleTimeString()}</h2>
    
    {props.time.getSeconds() == 42 && 
    <h2>Le sens de la vie</h2>
    }
    </div>
    );
}

export default Clock