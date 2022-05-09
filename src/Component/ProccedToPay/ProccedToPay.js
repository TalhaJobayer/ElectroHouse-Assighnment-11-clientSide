import React from 'react';

const ProccedToPay = () => {
    return (
        <div>
            <h1>Write Down your information </h1>
              <textarea name="text" id="" cols="50" rows="5"></textarea>
              <br/>
              <button className='btn btn-primary' type="submit">Send</button>
        </div>
    );
};

export default ProccedToPay;