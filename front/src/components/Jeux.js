import Card from './Card';

function Jeux(props) {

    if (!props.jeux) {
        return false
    }
        return (
            <div>
                <h3>Liste des jeux</h3>
                {props.jeux.map((jeu) => (
                    <Card>
                        <p>Titre : {jeu.name}</p>
                        <p>Desc : {jeu.description}</p>
                    </Card>
                ))}
            </div>
        )


}

export default Jeux