import Card from './Card';

function Jeux(props) {

    if (!props.jeux) {
        return false
    }

    if (props.jeux.error) {
        return <h3>{props.jeux.error}</h3>
    }

    else {


        if (props.jeux.loading) {
            return <h3>Chargement...</h3>
        }
        else {

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
    }


}

export default Jeux