import React, { useState } from 'react';

export default function Registration(){
    const [fields, setFields] = useState({
        firstName: "",
        lastName: "",
        email: "",
        num: ""
      });
    
      const [validation, setValidation] = useState(false);
      const [submit, setSubmit] = useState(false);
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted with values:", fields);
        if (fields.firstName && fields.lastName && fields.num && fields.email && submit) {
          setValidation(true);
        }
      };

      
    return (<div>
        <h1>Registration Form</h1>
        <div className="container">
        {submit && validation ? <div>Registration Successful</div> : null}
        <form onSubmit={handleSubmit}>
        {submit && !fields.firstName ? "Please enter your first name." : null}
        <input type="text" name="firstName" placeholder="First Name" onChange={(e) => { setFields({ ...fields, firstName: e.target.value }) }} value={fields.firstName} />
        {submit && !fields.lastName ? "Please enter your last name." : null}
        <input type="text" name="lastName" placeholder="Last Name" onChange={(e) => { setFields({ ...fields, lastName: e.target.value }) }} value={fields.lastName} />
        {submit && !fields.num ? "Please enter your mobile number." : null}
        <input type="number" name="num" placeholder="Mobile Number" onChange={(e) => { setFields({ ...fields, num: e.target.value }) }} value={fields.num} />
        {submit && !fields.email ? "Please enter your email." : null}
        <input type="email" name="email" placeholder="Email" onChange={(e) => { setFields({ ...fields, email: e.target.value }) }} value={fields.email} />
        <button type="submit" onClick={() => {setSubmit(true)}}>SUBMIT</button>
        </form>
        </div>
        </div>
    )
}