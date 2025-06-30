import PropTypes from "prop-types";

function LeftSection({ imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore }) {
    return ( 
      <div className="container " style={{marginTop:"100px"}}>
        <div className="row">
            <div className="col-6">
                <img src={imageURL} alt={productName} className="img-fluid" />
            </div>
            <div className="col-1"></div>
            <div className="col-5 text-start " style={{padding:"60px"}}>
                <h2>{productName}</h2>
                <p>{productDescription}</p>
                <a href={tryDemo}>Try Demo <i className="fa-solid fa-arrow-right"></i></a>
                <a  className="mx-5"href={learnMore}>Learn More <i className="fa-solid fa-arrow-right"></i></a>
                <div className="mt-3">
                <a href={googlePlay}><img src="/media/images/google-play-badge.svg" alt="Google Play" /></a>
                <a className="mx-5"href={appStore}><img src="/media/images/appstore-badge.svg" alt="App Store" /></a>
                </div>
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
    tryDemo: PropTypes.string.isRequired,
    learnMore: PropTypes.string.isRequired,
    googlePlay: PropTypes.string.isRequired,
    appStore: PropTypes.string.isRequired,
};

export default LeftSection;
