import React from 'react';

const AddItems = () => {
    return (
        <div>
           
            <div className="login-1">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="form-section">
                    <div className="form-inner">
                        
                        <h3>Add new Items</h3>
                        <form >
                            <div className="form-group  clearfix">
                                <input name="text"  type="text" className="form-control" placeholder="Product Name" />
                               
                            </div>
                            <div className="form-group  clearfix">
                                <input name="text"  type="text" className="form-control" placeholder="Product Price" />
                               
                            </div>
                            <div className="form-group  clearfix">
                                <input name="text"  type="text" className="form-control" placeholder="Product Supplier" />
                               
                            </div>
                            <div className="form-group  clearfix">
                                <input name="text" type="text" className="form-control"  placeholder="Leave URL of Product Image" aria-label="Password"/>
                               
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary btn-lg btn-theme"><span>Add Now</span></button>
                            
                            </div>
                           
                           
                            
                        </form>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
        </div>
    );
};

export default AddItems;