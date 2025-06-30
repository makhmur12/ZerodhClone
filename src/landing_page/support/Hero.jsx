function Hero() {
    return ( 
      <section className="container-fluid" id="supportHero" >
        
        <div className="p-5 mt-5 " id="supportWrapper"style={{color:"white"}}>
            <h3>Support Portal</h3>
            <a style={{color:"white"}}href="" >Track Tickets</a>    
        </div>
        <div className=" row p-5 mx-4 text-start">
        <div className=" col-7 p-5 ">
            <h1 style={{color:"white"}}className="fs-4 ">Search for an answer or browse help topics to create a ticket</h1>
            <input placeholder="Eg. how do I activate F&Q"></input>
            <br/> 
            <a href="">Track account opening</a>
            <a href="">Track segment activation</a>
             <a href="">Intraday margins</a><br/>
             <a href="">Kite user manual</a><br/>
        </div>
        <div style={{color:"white"}}className=" col-5 p-5">
            <h1 className="fs-4 ">Featured</h1>
           <ol >
          <li> <a href="">Change in expiry day of NSE derivative contracts from April 04, 2025 [Withheld]</a> </li>
           <li> <a href="">Modifications in Contract Specification of MCX iCOMDEX Base Metal Index (MCX METLDEX) Futures Contract</a></li>
      
            </ol>  </div>   
        </div> 
      </section>
        
     );
}

export default Hero;