import './superhero.css'


function Superhero(props) {
    return (

        <div className="superhero-card">
            <img src={props.url} alt={props.name}></img>
            <h2 className="superhero-name">{props.name}</h2>
            <div className="superhero-card__text">
                <p className="superhero-alter">Альтер эго: {props.alter}</p>
                <p className="superhero-power">Суперсилы: {props.power}</p>
            </div>
        </div>
    );
}

export default Superhero;