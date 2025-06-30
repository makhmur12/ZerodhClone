function Footer() {
    return (
      <footer style={{ backgroundColor: "rgb(250,250,250)", width: "100vw", margin: "0", padding:"0"}}>
  
       <div className="container text-start boder-top mt-5" >
        <div className="row ">
        <div className="col-3" style={{color:"#6e6e6e",marginTop:"30px"}}>
        <img src="media/images/logo.svg" style={{width:"50%"}} />
        <p style={{fontSize:"14px", marginTop:"20px"}}>&copy; 2010 - 2025, Zerodha Broking Ltd.
        All rights reserved.</p>
        <div className="mb-3">
        <i className="fa-brands fa-whatsapp" style={{marginRight:"20px",fontSize: "24px"}}
         onMouseOver={(e) => e.target.style.color = '#2b93e1'}
         onMouseOut={(e) => e.target.style.color = '#5b5b5b'}></i>
        <i className="fa-brands fa-linkedin"style={{marginRight:"20px",fontSize: "24px"}} onMouseOver={(e) => e.target.style.color = '#2b93e1'}
              onMouseOut={(e) => e.target.style.color = '#5b5b5b'}></i>
        <i className="fa-brands fa-instagram"style={{marginRight:"20px",fontSize: "24px"}} onMouseOver={(e) => e.target.style.color = '#2b93e1'}
              onMouseOut={(e) => e.target.style.color = '#5b5b5b'}></i>
        <i className="fa-brands fa-youtube"style={{marginRight:"20px",fontSize: "24px"}} onMouseOver={(e) => e.target.style.color = '#2b93e1'}
              onMouseOut={(e) => e.target.style.color = '#5b5b5b'}></i>
        </div>
       <hr/>
        <i className="fa-brands fa-telegram"style={{marginRight:"20px",fontSize: "24px"}} onMouseOver={(e) => e.target.style.color = '#2b93e1'}
              onMouseOut={(e) => e.target.style.color = '#5b5b5b'}></i>
        <i className="fa-brands fa-github"style={{marginRight:"20px",fontSize: "24px"}} onMouseOver={(e) => e.target.style.color = '#2b93e1'}
              onMouseOut={(e) => e.target.style.color = '#5b5b5b'}></i>
        </div>
        <div className="col-3" style={{marginTop:"30px"}} >
       <h4 className="mb-3"> Company</h4>
      
          <a  style={{ margin: "0 0 10px 0",color: "#868686",display: "inline-block"}}
              onMouseOver={(e) => e.target.style.color = '#2b93e1'}
              onMouseOut={(e) => e.target.style.color = '#868686'}href="">About</a><br/>
          <a  style={{margin: "0 0 10px 0",color: "#868686",display: "inline-block"}}
              onMouseOver={(e) => e.target.style.color = '#2b93e1'}
              onMouseOut={(e) => e.target.style.color = '#868686'}href="">Products</a><br/>
          <a  style={{margin: "0 0 10px 0",color: "#868686",display: "inline-block"}}
              onMouseOver={(e) => e.target.style.color = '#2b93e1'}
              onMouseOut={(e) => e.target.style.color = '#868686'}href="">Pricing</a><br/>
          <a  style={{margin: "0 0 10px 0",color: "#868686",display: "inline-block"}}
              onMouseOver={(e) => e.target.style.color = '#2b93e1'}
              onMouseOut={(e) => e.target.style.color = '#868686'}href="">Referral programme</a><br/>
          <a  style={{margin: "0 0 10px 0",color: "#868686",display: "inline-block"}}
              onMouseOver={(e) => e.target.style.color = '#2b93e1'}
              onMouseOut={(e) => e.target.style.color = '#868686'}href="">Careers</a><br/>
          <a  style={{margin: "0 0 10px 0",color: "#868686",display: "inline-block"}}
              onMouseOver={(e) => e.target.style.color = '#2b93e1'}
              onMouseOut={(e) => e.target.style.color = '#868686'}href="">Zerodha.tech</a><br/>
          <a  style={{margin: "0 0 10px 0",color: "#868686",display: "inline-block"}}
              onMouseOver={(e) => e.target.style.color = '#2b93e1'}
              onMouseOut={(e) => e.target.style.color = '#868686'}href="">Open source</a><br/>
          <a  style={{margin: "0 0 10px 0",color: "#868686",display: "inline-block"}}
              onMouseOver={(e) => e.target.style.color = '#2b93e1'}
              onMouseOut={(e) => e.target.style.color = '#868686'}href="">Press & media</a><br/>
          <a  style={{margin: "0 0 10px 0",color: "#868686",display: "inline-block"}}
              onMouseOver={(e) => e.target.style.color = '#2b93e1'}
              onMouseOut={(e) => e.target.style.color = '#868686'}href="">Zerodha Cares (CSR)</a><br/>
       
        </div>
        <div className="col-3" style={{marginTop:"30px"}}>
        <h4  className="mb-3"> Support</h4>
          
    <a  style={{margin: "0 0 10px 0",color: "#868686",display: "inline-block" }}
              onMouseOver={(e) => e.target.style.color = '#2b93e1'}
              onMouseOut={(e) => e.target.style.color = '#868686'}href="">Contact us</a><br/>
          <a  style={{margin: "0 0 10px 0",color: "#868686",display: "inline-block" }}
              onMouseOver={(e) => e.target.style.color = '#2b93e1'}
              onMouseOut={(e) => e.target.style.color = '#868686'}href="">Support portal</a><br/>
          <a  style={{margin: "0 0 10px 0",color: "#868686",display: "inline-block" }}
              onMouseOver={(e) => e.target.style.color = '#2b93e1'}
              onMouseOut={(e) => e.target.style.color = '#868686'}href="">Z-Connect blog</a><br/>
          <a  style={{margin: "0 0 10px 0",color: "#868686",display: "inline-block" }}
              onMouseOver={(e) => e.target.style.color = '#2b93e1'}
              onMouseOut={(e) => e.target.style.color = '#868686'}href="">List of charges</a><br/>
          <a  style={{margin: "0 0 10px 0",color: "#868686",display: "inline-block" }}
              onMouseOver={(e) => e.target.style.color = '#2b93e1'}
              onMouseOut={(e) => e.target.style.color = '#868686'}href="">Downloads & resources</a><br/>
          <a  style={{margin: "0 0 10px 0",color: "#868686",display: "inline-block" }}
              onMouseOver={(e) => e.target.style.color = '#2b93e1'}
              onMouseOut={(e) => e.target.style.color = '#868686'}href="">Videos</a><br/>
          <a  style={{margin: "0 0 10px 0",color: "#868686",display: "inline-block" }}
              onMouseOver={(e) => e.target.style.color = '#2b93e1'}
              onMouseOut={(e) => e.target.style.color = '#868686'}href="">Market overview</a><br/>
          <a  style={{margin: "0 0 10px 0",color: "#868686",display: "inline-block" }}
              onMouseOver={(e) => e.target.style.color = '#2b93e1'}
              onMouseOut={(e) => e.target.style.color = '#868686'}href="">How to file a complaint?</a><br/>
          <a  style={{margin: "0 0 10px 0",color: "#868686",display: "inline-block" }}
              onMouseOver={(e) => e.target.style.color = '#2b93e1'}
              onMouseOut={(e) => e.target.style.color = '#868686'}href="">Status of your complaints</a><br/>
         
        </div>
        <div className="col-3"style={{marginTop:"30px"}}>
        <h4  className="mb-3">  Account</h4>
        
          <a
              style={{margin: "0 0 10px 0",color: "#868686",display: "inline-block" }}
              onMouseOver={(e) => e.target.style.color = '#2b93e1'}
              onMouseOut={(e) => e.target.style.color = '#868686'}
          href="">Open an account</a><br/>
          <a 
          style={{margin: "0 0 10px 0",color: "#868686",display: "inline-block" }}
          onMouseOver={(e) => e.target.style.color = '#2b93e1'}
          onMouseOut={(e) => e.target.style.color = '#868686'}href="">Fund transfer</a><br/>
      
        


        </div>
        </div>
        <div className="mt-5 text-muted text-small "style={{fontSize:"13px"}}>
        <p>Zerodha Broking Ltd.: Member of NSE, BSMCX  SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd.  SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>
        <p>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>

        <p>Smart Online Dispute Resolution | Grievances Redressal Mechanism</p> 

        <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>

        <p>Attention investors: 1 Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2 Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3 Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>

        <p>Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary. Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we do not give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.</p>
       </div>
       </div>
       
       <a 
  className="mx-3" 
  style={{ fontSize: "14px", color: "#868686" }}
  onMouseOver={(e) => e.target.style.color = '#2b93e1'}
  onMouseOut={(e) => e.target.style.color = '#868686'}
  href="#"
>
  NSE
</a>

<a 
  className="mx-3" 
  style={{ fontSize: "14px", color: "#868686" }}
  onMouseOver={(e) => e.target.style.color = '#2b93e1'}
  onMouseOut={(e) => e.target.style.color = '#868686'}
  href="#"
>
  BSE
</a>
<a 
  className="mx-3" 
  style={{ fontSize: "14px", color: "#868686" }}
  onMouseOver={(e) => e.target.style.color = '#2b93e1'}
  onMouseOut={(e) => e.target.style.color = '#868686'}
  href="#"
>
  MCX
</a>
<a 
  className="mx-3" 
  style={{ fontSize: "14px", color: "#868686" }}
  onMouseOver={(e) => e.target.style.color = '#2b93e1'}
  onMouseOut={(e) => e.target.style.color = '#868686'}
  href="#"
>
Terms & conditions
</a>
<a 
  className="mx-3" 
  style={{ fontSize: "14px", color: "#868686" }}
  onMouseOver={(e) => e.target.style.color = '#2b93e1'}
  onMouseOut={(e) => e.target.style.color = '#868686'}
  href="#"
>
Terms & conditions
</a>
<a 
  className="mx-3" 
  style={{ fontSize: "14px", color: "#868686" }}
  onMouseOver={(e) => e.target.style.color = '#2b93e1'}
  onMouseOut={(e) => e.target.style.color = '#868686'}
  href="#"
>
Policies & procedures
</a>
<a 
  className="mx-3" 
  style={{ fontSize: "14px", color: "#868686" }}
  onMouseOver={(e) => e.target.style.color = '#2b93e1'}
  onMouseOut={(e) => e.target.style.color = '#868686'}
  href="#"
>
Disclosure For investors attention
</a>
<a 
  className="mx-3" 
  style={{ fontSize: "14px", color: "#868686" }}
  onMouseOver={(e) => e.target.style.color = '#2b93e1'}
  onMouseOut={(e) => e.target.style.color = '#868686'}
  href="#"
>
Investor charter
</a>  
      
      
       </footer>
      );
}

export default Footer;