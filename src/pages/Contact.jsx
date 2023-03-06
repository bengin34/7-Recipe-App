import React from "react";
import { useNavigate } from "react-router-dom";
import ContactContainer from "../components/styled/ContactContainer.styled";


const Contact = () => {
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    navigate("/")
  }
  
  return (
    <>
      <ContactContainer>
      <form onSubmit={handleSubmit}>
        <div className="background">
          <span>CONTACT wıth chef</span>
          <div className="app-contact">CONTACT INFO : +62 81 314 928 595</div>
          <div>
            <input placeholder="NAME" required />
            <input placeholder="EMAIL" required/>
            <input placeholder="TITLE" required/>
            <input placeholder="MESSAGE" required/>
          </div>
          <div >
            <button className="app-form-button">CANCEL</button>
            <button className="app-form-button" onClick={handleSubmit}>SEND</button>
          </div>
        </div>
        </form>
      </ContactContainer>
    </>
  );
};

export default Contact;
