import React from 'react';

const Blog = () => {
    return (
        <div className="container " style={{textAlign: "start"}}>
            <div className="row">
                <div className="col-lg-12">
                
           <h1> Difference between javascript and nodejs</h1>
           <h4>Javascript</h4>
          <span><b>Answer:</b></span> <p>Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance. </p> 
           <h4>NodeJS</h4>
          <span><b>Answer:</b></span> <p>NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development.  </p> 
       
                </div>
                <div className="col-lg-12">
                
           <h1> Difference between SQL and noSQL databases.</h1>
           <h4>SQL</h4>
          <span><b>Answer:</b></span> <p>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS).	
             These databases have fixed or static or predefined schema.	
             Not suited for hierarchical data storage.	
              Best suited for complex queries.	
             Vertically Scalable.	
             Follows ACID property.	 </p> 
           <h4>NoSQL</h4>
          <span><b>Answer:</b></span> <p>Non-relational or distributed database system. They have dynamic schema. Best suited for hierarchical data storage. Not so good for complex queries.Horizontally scalable.Follows CAP(consistency, availability, partition tolerance) </p> 
       
                </div>
                <div className="col-lg-12">
                
           <h1> When should you use nodejs and when should you use mongodb</h1>
           
          <span><b>Answer:</b></span> <p>
              Nodejs is a Javascript engine that you can write any application you want with (by programming in the Javascript language). It runs your Javascript code. Most commonly, it is used to build servers that can respond to web requests, though it can be used for lots of other types of code too.</p>

              <p>MongoDB is a database engine. Code within some application or server uses MongoDB to save, query or update data in a database. There are many web servers built with nodejs that will then use MongoDB for storing data.</p>

              <p>MongoDB offers an API library that runs within a Nodejs application to give you programmatic access to MongoDB so you can create databases and then add, query, update or delete data from the MongoDB database. MongoDB also has API libraries for other programming environments such as Python, Java, etc... </p> 
          
       
                </div>




            </div>
        </div>
    );
};

export default Blog;