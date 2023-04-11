import React, { useState } from "react";
import "./signup.css";

export default function SignUp() {
   
  const [user,setUser] = useState({
     name:"",roll_no:"",  email:"",phone:"",smester:"",cgpa:"", skill_1:"",skill_2:"",skill_3:"",website:"",education_10th:"",education_12th:"", about:""
  });

  let name ,value;
  const handleInput=(e)=>{
    console.log(e);
    name=e.target.name;
    value=e.target.value;
    
    setUser({...user,[name]:value});

  }

const postDate=async(e)=>{
  e.preventDefault();
  
  const {name,roll_no,email,phone,smester,cgpa,skill_1,skill_2,skill_3,website,education_10th,education_12th,about}=user;

  const res=await fetch("https://softwareproject-1-j7593157.deta.app/register",{
  method: 'POST',
  headers: {
      'Content-Type': 'application/json',
      
  },
  body: JSON.stringify({name,roll_no,email,phone,smester,cgpa,skill_1,skill_2,skill_3,website,education_10th,education_12th,about })
});

const data=await res.json();

if(data.status===422 || !data){
window.alert("invalid registraion");
console.log("invalid registraion");
}
else{
  window.alert("registration succssful");
  console.log("registraion siccessfull");
}



}
  return (
    <div className="background">
      <div className="container">
        <div className="screen">
          <div className="screen-header">
            <div className="screen-header-left">
              <div className="screen-header-button close"></div>
              <div className="screen-header-button maximize"></div>
              <div className="screen-header-button minimize"></div>
            </div>
           
          </div>
          <div className="screen-body">
            <div className="screen-body-item left">
              <div className="app-title">
                <span>Registration</span>
                <span>FORM</span>
              </div>
              
            </div>
            <div className="screen-body-item">
              <div className="app-form">
                <div className="app-form-group">
                  <input
                    className="app-form-control"
                    placeholder="NAME"
                    name="name" id="name"

                    type="text"
                    value={user.name}
                    onChange={handleInput}
                    
                  />
                </div>
                <div className="app-form-group">
                  <input className="app-form-control" placeholder="Roll_no"
                    type="text"
                    name="roll_no" id="roll_no"
                    value={user.roll_no}
                    onChange={handleInput} 
                  />
                </div>
                <div className="app-form-group">
                  <input
                  name="email" id="email"
                  type="email"
                    className="app-form-control"
                    placeholder="Email"
                      
                    value={user.email}
                    onChange={handleInput}
                  />
                </div>
                <div className="app-form-group">
                  <input
                  name="phone" id="phone"
                  type="number"
                    className="app-form-control"
                    placeholder="phone no"
                      
                    value={user.phone}
                    onChange={handleInput}
                  />
                </div>
                <div className="app-form-group">
                  <input
                    className="app-form-control"
                    placeholder="smester"
                    name="smester" id="smester"
                      type="number"
                    value={user.smester}
                    onChange={handleInput}

                  />
                </div>
             
                <div className="app-form-group">
                  <input
                  name="cgpa" id="cgpa"
                  type="number"
                    className="app-form-control"
                    placeholder="cgpa"
                      
                    value={user.cgpa}
                    onChange={handleInput}
                  />
                </div>
                <div className="app-form-group message">
                  <input className="app-form-control" placeholder="skill_1" 
                     type="text"
                     name="skill_1" id="skill_1"
                     value={user.skill_1}
                     onChange={handleInput}
                  />
                </div>
                <div className="app-form-group message">
                  <input className="app-form-control" placeholder="skill_2" 
                    type="text"
                    name="skill_2" id="skill_2"
                    value={user.skill_2}
                    onChange={handleInput}
                  />
                </div>
                <div className="app-form-group message">
                  <input className="app-form-control" placeholder="skill_3" 
                    type="text"
                    name="skill_3" id="skill_3"
                    value={user.skill_3}
                    onChange={handleInput}
                  />
                </div>
                <div className="app-form-group message">
                  <input className="app-form-control" placeholder="website" 
                    type="text"
                    name="website" id="website"
                    value={user.website}
                    onChange={handleInput}
                  />
                </div>
                <div className="app-form-group message">
                  <input className="app-form-control" placeholder="education_10th" 
                    type="text"
                    name="education_10th" id="education_10th"
                    value={user.education_10th}
                    onChange={handleInput}
                  />
                </div>
                <div className="app-form-group message">
                  <input className="app-form-control" placeholder="education_12th" 
                    type="text"
                    name="education_12th" id="education_12th"
                    value={user.education_12th}
                    onChange={handleInput}
                  />
                </div>
                <div className="app-form-group message">
                  <input className="app-form-control" placeholder="about" 
                    type="text"
                    name="about" id="about"
                    value={user.about}
                    onChange={handleInput}
                  />
                </div>
                <div className="app-form-group buttons">
                  
                  <button className="app-form-button" type="submit" onSubmit={postDate}  >SEND</button>
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  );
}
