import './input-city.css'
function InputCity({func}) {
    return (
        <div>
            <form onSubmit={func}>
                <input className="form-control" type="text" name="city" placeholder="Город" aria-label="city"></input>
            </form>
        </div>
    );
}

export default InputCity;