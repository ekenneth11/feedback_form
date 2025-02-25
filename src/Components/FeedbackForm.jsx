import React, { useState } from 'react';
import './FeedbackForm.css'; // Import CSS for styling

const FeedbackForm = () => {
  //hooks
  const [formData, setFormData] = useState({
    name:'',
    email:'',
    feedback:''});
    const handleChange = (event) => {
      const {name, value} = event.target;
      setFormData({...formData, [name]:value})
    };
    const handleSubmit = (event) => {
      event.preventDefault(); //this prevents the page from refreshing
      const confirmationMessage = ` Name: ${formData.name} 
      Email: ${formData.email} 
      Feedback: ${formData.feedback}
      `;
      const isConfirmed = window.confirm(`Please confirm your details: \n\n${confirmationMessage}`);
      if (isConfirmed){
        console.log(`Submitting feedback: `, formData);
        setFormData({
          name:'',
          email:'',
          feedback: ''
        });
        alert(`Thank you for your feedback!`);
      }
    };
  return ( 
    <>
    <nav>
    Tell Us What You Think
    </nav>
      <form className="feedback-form" onSubmit={handleSubmit}>
        <h2>We'd Love to Hear From You!asdas</h2>
        <p>Please share your feedback with us.</p>
        <input type="text" name="name" placeholder='Your Name' value={formData.name} onChange={handleChange}/>
        <input type="email" name='email' placeholder='Your Email' value={formData.email} onChange={handleChange}/>
        <textarea name="feedback" placeholder='Your Feedback' value={formData.feedback} onChange={handleChange}>  </textarea>
        <button type="submit" >Submit Feedback</button>
      </form>
    </>
  );
};

export default FeedbackForm;
