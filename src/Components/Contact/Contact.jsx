import React, { useEffect } from 'react'
import './Contact.css'
const Contact = () => {
 
  
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "bd974734-0d74-484c-9c7e-ff862119619a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div>
      <section className="contact" id="contact">
        <h2 className="heading">Contact <span>Me</span></h2>
 
        <form onSubmit={onSubmit} >
            <div className="input-group">
                <div className="input-box">
                    <input type="text" placeholder='Enter Your Full Name' name='Name' required/>
                    <input type="email" placeholder='Enter Your Email' name='Email' required/>
                </div>
                <div className="input-box">
                    <input type="number" placeholder='Phone Number' class="no-spinner" name='Phone Number' required/>
                    <input type="text" placeholder='Subject' name='Query' required/>
                </div>
            </div>
            <div className="input-group-2">
                <textarea name="Message" id="" placeholder='Your Message' cols="30" rows="10"  required></textarea>
                <input type="submit" value="Send Message" className='btn a'/>
            </div>
        </form>
        <span className='result'>{result}</span>
      </section>
    </div>
  )
}

export default Contact
