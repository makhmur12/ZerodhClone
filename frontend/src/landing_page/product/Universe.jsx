function Universe() {
    return ( 
      <div>
          <p className="fs-5 mb-5" style={{marginTop:"100px"}}>Want to know more about our technology stack?
             Check out the <a href="">Zerodha.tech</a> blog.</p>
             <h2 className="mb-3" style={{marginTop:"100px"}}>The Zerodha Universe</h2>
             <p>Extend your trading and investment experience even further with our partner platforms</p>
             
             <div className="row " style={{marginTop:"85px", marginBottom:"50px"}}>
             <div className="col-1"></div>
                <div className="col-3">
                    <img src="media/images/zerodhaFundhouse.png"style={{width:"80%"}} />
                    <p  className="text-muted mt-3"style={{fontSize:"13px"}}>Our asset management venture
that is creating simple and transparent index
funds to help you save for your goals.</p>
                </div>
                <div className="col-1"></div>
                <div className="col-3">
                <img src="media/images/sensibullLogo.svg" style={{width:"100%"}} />
                <p className="text-muted mt-4"style={{fontSize:"13px"}}>Options trading platform that lets you
     create strategies, analyze positions, and examine
     data points like open interest, FII/DII, and more.</p>
                </div>
                <div className="col-1"></div>
                <div className="col-3">
                <img src="media/images/tijori.svg" style={{width:"65%"}}/>
                <p className="text-muted mt-2"style={{fontSize:"13px"}}>Investment research platform
     that offers detailed insights on stocks,
     sectors, supply chains, and more.
     </p>
                </div>
                <div className="col-1"></div>
             </div>
             <button className="btn btn-primary fs-5 mb-4" style={{width:"20%", margin:"0 auto"}}>Sign Up for free</button>
      
            </div>
     
     );
     
}

export default Universe;