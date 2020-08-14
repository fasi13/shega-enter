import React from "react";
import './Thanks.css';
import { Button, } from "reactstrap";

function ThanksPage() {
  return (
        <div className="thanksContainer">      
          <div className="thanksBody">
              <h1>Thank You for Subscription</h1>
              <h4>You are about to subscribe proceed with your phone to finish subscription</h4>
              <h3>Stay connected with us</h3>
              <h2> Drive | Speake | Lough</h2>
          </div> 
          <Button
            className="btn-primary subPhoneBtn"
            href="/home"
          >
            Start 
          </Button>                 
        </div>
  );
}
  
export default ThanksPage;



