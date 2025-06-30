function Team() {
    return (
        <>
        <h2>People</h2>
        <div className="row">
        <div className="col-1"></div>
        <div className="col-4 p-5">
            <img className="rounded-circle img-fluid mb-4" src="media/images/nithinKamath.jpg"/>
            <h3>Nithin Kamath</h3>
            <p>Founder, CEO</p>
        </div>
        <div className="col-6 text-start p-5 " >
        <p className="mt-5">Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>

<p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>

<p>Playing basketball is his zen.</p>

<p>Connect on <a href="">Homepage</a> / <a href="">TradingQnA</a> / <a href="">Twitter</a></p>
        </div>
        <div className="col-1"></div>
        </div>
        
        </>
     );
}

export default Team;