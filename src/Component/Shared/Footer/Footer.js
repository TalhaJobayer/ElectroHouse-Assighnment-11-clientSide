import React from 'react';

const Footer = () => {
    return (
        <div>
            
<footer className="text-center text-lg-start bg-light text-muted mt-0">

  <section className="">
    <div className="container text-center text-md-start ">
      
      <div className="row mt-0">
        
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3"></i>Company name
          </h6>
          <p>
            Here you can use rows and columns to organize your footer content. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        

        
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 ">
          
          <h6 className="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>Angular</p>
          <p>  React</p>
          <p>  Vue</p>
          <p>Laravel</p>
        </div>
        

        
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          
          <h6 className="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p> Pricing </p>
          <p>Settings </p>
          <p> Orders </p>
          <p> Help</p>
        </div>
        

        
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          
          <h6 className="text-uppercase fw-bold mb-4">
            Contact
          </h6>
          <p><i className="fas fa-home me-3"></i> New York, NY 10012, US</p>
          <p>
            <i className="fas fa-envelope me-3"></i>
            info@example.com
          </p>
          <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
          <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
        </div>
        
      </div>
      
    </div>
  </section>

  <div className="text-center p-4"  style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
    © 2022 Copyright: TALHA JOBAYER
  </div>
  
</footer>

        </div>
    );
};

export default Footer;