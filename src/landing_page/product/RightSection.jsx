import PropTypes from "prop-types";

function LeftSection({ imageURL, productName, productDescription, learnMore}) {
    return ( 
      <div className="container " style={{marginTop:"100px"}}>
        <div className="row">
           
            
            <div className="col-5 text-start " style={{padding:"60px"}}>
                <h2>{productName}</h2>
                <p>{productDescription}</p>
                <a href={learnMore}>Learn More <i className="fa-solid fa-arrow-right"></i></a>
               
                </div>
                <div className="col-1"></div>
                <div className="col-6">
                <img src={imageURL} alt={productName} className="img-fluid" />
            </div>
            </div>
        </div>
    
      
    );
}

// ✅ Add PropTypes validation
LeftSection.propTypes = {
    imageURL: PropTypes.string.isRequired,
    productName: PropTypes.string.isRequired,
    productDescription: PropTypes.string.isRequired,
    learnMore: PropTypes.string.isRequired
};

export default LeftSection;
