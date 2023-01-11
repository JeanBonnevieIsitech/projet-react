function Jeux(props){

    if (!props.jeux){
        return false
    }

    return (
        <div>
            {props.jeux.map((jeu)=>(
                <h2>{jeu.nom}</h2>
            ))}
        </div>
    )
    
}

export default Jeux