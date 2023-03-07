import React ,{useState}from 'react'
import abc from "../header/amazon.png";
import { NavLink } from 'react-router-dom';


const SignUp = () => {

const [udata, SetUdata] = useState({
fname:"",
email:"",
mobile:"",
password:"",
cpassword:""
})
console.log(udata);
const adddata =(e)=>{
    const {name,value}=e.target;
    SetUdata(()=>{
        return{
        ...udata,
        [name]:value
 } })
    }
    

 return (
        <section>
            <div className="sign_container">
                <br />
                <br />
                <br />
                <div className="sign_header">
                    <img src={abc} alt="signupimg" />
                </div>
                <br />
                <br />
                <br />
                <div className="sign_form">
                    <form method="POST">
                        <h1>Create account</h1>
                        <div className="form_data">
                            <label htmlFor="name">Your name</label>
                            <input type="text" name="fname"
                                value={udata.fname}
                                onChange={adddata}
                               // onChange={(e)=>{SetUdata({...udata,fname:e.target.value})}}
                                id="name" />
                        </div>
                        <div className="form_data">
                            <label htmlFor="email">email</label>
                            <input type="email" name="email"
                                value={udata.email}
                                onChange={adddata}
                                //onChange={(e)=>{SetUdata({...udata,email:e.target.value})}}
                                id="email" />
                        </div>
                        <div className="form_data">
                            <label htmlFor="mobile">Mobile number</label>
                            <input type="number" name="mobile"
                                value={udata.mobile}
                                onChange={adddata}
                               // onChange={(e)=>{SetUdata({...udata,mobile:e.target.value})}}
                                id="mobile" />
                        </div>
                        <div className="form_data">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password"
                                value={udata.password}
                                onChange={adddata}
                                //onChange={(e)=>{SetUdata({...udata,password:e.target.value})}}
                                id="password" placeholder="At least 6 characters" />
                        </div>
                        <div className="form_data">
                            <label htmlFor="cpassword">Password again</label>
                            <input type="password" name="cpassword"
                            value={udata.cpassword}
                            onChange={adddata}
                            //onChange={(e)=>{SetUdata({...udata,cpassword:e.target.value})}}
                                id="cpassword" />
                        </div>
                        <button type="submit" className="signin_btn">Continue</button>



                        <div className="signin_info">
                            <p>Already have an account?</p>
                            <NavLink to="/login">Sign in</NavLink>
                        </div>
                    </form>
                </div>

            </div>
        </section>
    )
}

export default SignUp
