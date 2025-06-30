function Hero() {
    return ( 
       <div style={{marginTop:"120px"}}>
        <h1 className="mb-3">Charges</h1>
        <p className="text-muted fs-6">List of all charges and taxes</p>
        <div className="row"style={{marginTop:"200px"}}>
            <div className="col-4">
                <img style={{width:"70%"}} src="media/images/pricing-eq.svg"/>
                <h2>Free equity delivery</h2>
                <p className="text-muted fs-6">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
            </div>
            <div className="col-4">
            <img style={{width:"70%"}}src="media/images/intradayTrades.svg"/>
                <h2>Intraday and F&O trades</h2>
                <p className="text-muted fs-6">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
            
            </div>
            <div className="col-4">
            <img style={{width:"70%"}}src="media/images/pricing-eq.svg"/>
                <h2>Free direct MF</h2>
                <p className="text-muted fs-6">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
            
            </div>
        </div>
       </div>
     );
}

export default Hero;