import React, { useState } from 'react';

const AddItems = () => {
   
    const handleAddProduct=(event)=>{
        event.preventDefault()
        const name=event.target.name.value
        
        const Price=event.target.price.value
        const supplier=event.target.supplier.value
        const image=event.target.image.value
        const quantity=event.target.quantity.value
        const newProduct={name,Price,supplier,image,quantity}
       
        fetch(`http://localhost:5000/product`,{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(newProduct),
        })
       .then(res=>res.json())
       .then(data=>{
        alert('added succesfully')
      console.log('Success:', data);
      event.target.reset()
    })

    }
    return (
        <div>
           
            <div className="login-1">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="form-section">
                    <div className="form-inner">
                        
                        <h3>Add new Items</h3>
                        <form onSubmit={handleAddProduct} >
                            <div className="form-group  clearfix">
                                <input name="name"  type="text" className="form-control" placeholder="Product Name" />
                               
                            </div>
                            <div className="form-group  clearfix">
                                <input name="price"  type="text" className="form-control" placeholder="Product Price" />
                               
                            </div>
                            <div className="form-group  clearfix">
                                <input name="supplier"  type="text" className="form-control" placeholder="Product Supplier" />
                               
                            </div>
                            <div className="form-group  clearfix">
                                <input name="quantity"  type="text" className="form-control" placeholder="Product Quantity" />
                               
                            </div>
                            <div className="form-group  clearfix">
                                <input name="image" type="text" className="form-control"  placeholder="Leave URL of Product Image" aria-label="Password"/>
                               
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