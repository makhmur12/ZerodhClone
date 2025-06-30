function Stats() {
    return ( 
      <div className="container mb-5 p-3">
         <div className="row ">
            <div className="col-6 text-start p-5">
                <h1 className="fs-2 mb-5">Trust with confidence</h1>
                <h2 className="fs-5">Customer-first always</h2>
                <p className="mb-4">That is why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily.</p>
                <h2 className="fs-5">No spam or gimmicks</h2>
                <p className="mb-4">No gimmicks, spam, gamification, or annoying push notifications. </p>
                <h2 className="fs-5">The Zerodha universe</h2>
                <p className="mb-4">Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups.</p>
                <h2 className="fs-5"> Do better with money</h2>
                <p className="mb-4">With initiatives like <a href="">Nudge</a> and <a href="">Kill Switch</a>, we do not just facilitate transactions, but actively help money.</p>
            </div>
            <div className="col-6 mt-5">
                <img  src="media/images/ecosystem.png" style={{width:"90%"}}/>
                <div>
                    <a href="" className="mx-5">Explore our product <i className="fa-solid fa-arrow-right"></i></a>
                    <a href="">Try kit demo <i className="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
       </div>
      </div>
     );
}

export default Stats;