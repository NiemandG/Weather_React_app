function WrapWeather({left, right}){


    return(
        <div>
            <div className="row">
                <div className="col-sm">
                    {left}
                </div>
                <div className="col-sm">
                    {right}
                </div>
            </div>

        </div>
    )
}

export default WrapWeather