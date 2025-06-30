function Pricing() {
    return ( 
        <div className="container mb-5">
            <div className="row">
                <div className="col-4 text-start p-5">
                    <h1 className="fs-2 mb-3">Unbeatable pricing</h1>
                    <p>We pioneered the concept of discount broking and price transparency in India. </p>
                    <div>
                        <a href="">See prices<i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
              
                <div className="col-8">
                    <div className="row">
                        <div className="col border">
                           
                           <img src="media/images/pricing0.svg"></img>
                           <p className="col mt-5 fs-6 text-center">Free account opening</p>
                           </div>
                      

                        <div className="col border">
                            <img src="media/images/pricing0.svg"></img>
                            <p className="col mt-5 fs-6 text-center"> Free equity delivery
                            and direct mutual funds</p>
                           
                        </div>
                        <div className="col border">
                            <img src="media/images/other-trades.svg"></img>
                            <p className="col mt-5 fs-6 text-center"> Intraday and
                            F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;