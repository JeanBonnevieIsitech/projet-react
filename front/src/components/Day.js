function Day(props){

    if (props.day){
        return <h4>Jour</h4>
    }

    else{
        return <h4>Nuit</h4>
    }
}

export default Day