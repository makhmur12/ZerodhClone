function Brokerage() {
    return ( 
       <div className="container">
        <div className="row p-5 mt-5 text-center border-top">
             <div className="col-8 p-4 ">
                <a href="" ><h3 className="mb-3">Brokerage calculator</h3></a>
                <ul className="text-start muted-text" style={{fontSize:"14px", lineHeight:"2.5"}}>
                  <li>When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge.</li>
                  <li>Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.</li>
                  <li>BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore</li>
                  <li>Additional charges of ₹50 per order for orders placed</li>
                  <li>Stamp charges by the Government of India as per the Indian Stamp Act</li>
                  <li>₹100 per order for futures and options.</li>
                  <li>When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge.</li>
                  <li>Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.</li>
                  
                </ul>
             </div>
             <div className="col-4 p-4">
                <a href=""><h3  className="mb-3">List of charges</h3></a>
             </div>
        </div>
       </div>
     );
}

export default Brokerage;