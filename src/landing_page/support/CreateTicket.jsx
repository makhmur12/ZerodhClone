function CreateTicket() {
    return ( 
        <div className="container text-start mt-5 p-5">
            <p className="text-muted mb-5" style={{fontSize:"25px"}}>To create a ticket, select a relevant topic</p>
            <div className="row">
            <div className="col-4">
                <h4 className="fs-5"><i className="fa-solid fa-plus"></i> Account Openning</h4>
                <div style={{lineHeight:"2.5", fontSize:"14px"}}>
               <a href="">Resident individual</a><br/>
                <a href="">Minor</a><br/>
                <a href="">Non Resident Indian (NRI)</a><br/>
                <a href="">Company, Partnership, HUF and LLP</a><br/>
                <a href="">Glossary</a><br/>
                </div>
            </div>
            <div className="col-4">
            <h4 className="fs-5"><i className="fa-solid fa-user"></i> Your Zerodha Account</h4>
            <div style={{lineHeight:"2.5", fontSize:"14px"}}>
            <a href="">Your Profile</a><br/>
            <a href="">Account modification</a><br/>
            <a href="">Client Master Report (CMR) and Depository Participant (DP)</a><br/>
            <a href="">Nomination</a><br/>
            <a href="">Transfer and conversion of securities</a><br/>
            </div>
            </div>
            <div className="col-4">
            <h4 className="fs-5 mb-4" ><i className="fa-solid fa-chart-simple"></i> Kite</h4>
            <div style={{lineHeight:"2.5", fontSize:"14px"}}>
            <a href="">IPO</a><br/>
            <a href="">Trading FAQs</a><br/>
            <a href="">Margin Trading Facility (MTF) and Margins</a><br/>
            <a href="">Charts and orders</a><br/>
            <a href="">Alerts and Nudges</a><br/>
            <a href="">General</a><br/>
            </div>
            </div>
            </div>
        </div>
     );
}

export default CreateTicket;