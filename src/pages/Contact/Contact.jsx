import React, { useState } from "react";
import './Contact.css'
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
function Contact() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    name:'',
    email:'',
    number:''
  });

  const changeValue = ((e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value
    })
  })

  const handleInput = ((e) => {
    e.preventDefault();

    if(inputValue.name.trim() === '' ||  inputValue.number.trim() === ''){
      Swal.fire({
        title:'Enter Valid Input',
        icon:"warning"
      }); 
    } else {
      Swal.fire({
        title:'Succesfull',
        icon:"success"
      });
      navigate('/');

    }
  })
  return (
    <>
      <div className="contactConatiner">
        <div className="formBox">
          <form className="contactInputFild" onSubmit={handleInput}>
            <div className="contactInputBorder">
              <h1 className="contactHeading">CONTACT US</h1>
              <input
                name="name"
                value={inputValue.name}
                onChange={changeValue}
                type="text"
                placeholder="Enter your name"
              />{" "}
              <br />
              <input
                name="email"
                value={inputValue.email}
                onChange={changeValue}
                type="email"
                placeholder="Enter your email"
              />{" "}
              <br />
              <input
                name="number"
                value={inputValue.number}
                onChange={changeValue}
                type="number"
                placeholder="Enter your number"
              />{" "}
              <br />
              <button className="submitBtn">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
