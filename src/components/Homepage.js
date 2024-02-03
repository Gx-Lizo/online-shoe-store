import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogin, loggedinUser } from "./features/userSlice";
import { useFormik } from "formik";
import * as Yup from "yup";

/* 
    the Homepage component is the landing page and has the form that allows the user to login only if that user is in the store
    if user is logged in then the Homepage changes from the login form and displays the username and a log out button
    if username is not on the store or the password is incorrect then an error is displayed when user clicks the login button
    user can click the register button to and will be routed to the Register component to register their account
*/
export default function Homepage() {

    const dispatch = useDispatch();
    const state = useSelector((state) => state.userReducer);
    const [showError, setShowError] = useState(false);
    
    const schema = Yup.object().shape({

        username_Id: Yup.string().required("Username required"),
        password_Id: Yup.string().required("Password required"),
    })

    const formik = useFormik({

        initialValues: {

            username_Id: '',
            password_Id: ''
        },
        validationSchema: schema,
        onSubmit: () => { }
    });

    const handleLogin = () => {
        const userInput = state.userList.filter((item) => formik.values.username_Id === item.username && formik.values.password_Id === item.password);

        if (userInput.length === 0 && formik.values.username_Id !== "" && formik.values.password_Id !== "" || userInput.length === 0) {
            // Show error message if user details not found
            setShowError(true);
        }
        else {
            // User details found in the store, proceed with login
            dispatch(userLogin(true));
            dispatch(loggedinUser(userInput[0].username));
            formik.resetForm();
            
        }
    };

    return (

        <div>
            <h1 className="app-child2">Welcome to Local Sneaker Brand.</h1>
            {!state.isLoggedIn ?
                <form onSubmit={(e) => e.preventDefault()} className="App-header">
                    <label>Enter details here to Login.</label >
                    <input className="app-child" id="username_Id" type="text" placeholder="Enter your username" value={formik.values.username_Id} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    {formik.errors.username_Id && formik.touched.username_Id && <div className="error">{formik.errors.username_Id}</div>}
                    <input className="app-child" id="password_Id" type="password" placeholder="Enter your password" value={formik.values.password_Id} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    {formik.errors.password_Id && formik.touched.password_Id && <div className="error">{formik.errors.password_Id}</div>}
                    <Button onClick={handleLogin}>Login</Button>
                    {showError && <div className="error">Invalid username or password. Please try again.</div>}
                    <p className="app-child" style={{ color: "yellow" }}>Don"t have an account? Click button below to register.</p>
                    <Link className="app-child" to="/register" ><Button>Click here to register</Button></Link>
                </form> :
                <div>
                    <h2>You are logged in: {state.userLoggedIn}</h2>
                    <Button onClick={() => dispatch(userLogin(false))}>Log out</Button>
                </div>
            }
        </div>
    );
}