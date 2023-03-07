import React,{useState}  from 'react'
import "./signup.css"
import abc from "../header/amazon.png";
import { NavLink } from 'react-router-dom';


const SignIn = () => {

const [logdata, setData] = useState({
    email:"",
    password:""
});
console.log(logdata);

const adddata = (e) =>{
const {name,value}=e.target;
// console.log(e.target.value);
 setData(()=>{
    return{
        ...logdata,
        [name]:value
    }
 })
}

    return (
        <>
          <section>
            <div className="sign_container">
                <div className="sign_header">
                    <br/>
                    <br/>
                    <br/>
                        <img src={abc} alt=''/>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <div className="sign_form">
                    <form method="POST">
                        <h1>Sign-In</h1>

                        <div className="form_data">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email"
                              onChange={adddata}
                              value={logdata.email}
                                id="email" />
                        </div>
                        <div className="form_data">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password"
                                onChange={adddata}
                                value={logdata.password}
                                id="password" placeholder="At least 6 characters" />
                        </div>
                        <button type="submit" className="signin_btn" >Continue</button>
                    </form>
                </div>
                <div className="create_accountinfo">
                    <p>New to Udemy?</p>
                    <NavLink to="/register"><button className='signin_btn'>  Create your Udemy Account</button></NavLink>
                </div>
                </div>
            </section>
        </>
    )
}

export default SignIn
