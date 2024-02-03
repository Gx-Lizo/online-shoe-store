import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "./features/userSlice";
import { useFormik } from "formik";
import * as Yup from "yup";

/* 
    the Register component is used to create a user, for validation I have used the yup & formik libraries
    if the user has left any field or the have not inserted the the correct info an error message will be displayed
    if user is created they will be added to the store then a message is displayed 
*/
export default function Register() {

const [userExist, setUserExist] = useState("");
    const passwordRules = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W\_])[A-Za-z\d\W\_]{8,}$/;
    const nameRules = /^[A-Za-z]+$/;
    const usernameRules = /^[\w\s\S]{3,}$/;
    const state = useSelector((state) => state.userReducer.userList)
    const dispatch = useDispatch();

    const schema = Yup.object().shape({

        firstname: Yup.string().matches(nameRules, { message: "firstname must contain alphabets only" }).required("Firstname required"),
        surname: Yup.string().matches(nameRules, { message: "surname must contain alphabets only" }).required("Surname required"),
        username: Yup.string().min(3).matches(usernameRules, { message: "username must have atleast 3 characters" }).required("Username required"),
        email: Yup.string().email('Enter valid email').required("email required"),
        password: Yup.string().min(8).matches(passwordRules,
            { message: "password must have: atleast 1 uppercase, 1 lowercase, 1 digit, 1 special character"}).required("Password required"),
        cpassword: Yup.string().oneOf([Yup.ref('password'), null], "Password dont match").required("Password required")

    });

    const onSubmit = async (values, actions) => {

        const user = state.filter((item) => item.username === values.username || item.email === values.email)

        if(user.length > 0) {

            setUserExist("Username or Email already exist");
            document.getElementById("user_Id").style.color = "red"
        } 
        else{

            dispatch(createUser(values));
            setUserExist("Registration successful");
            document.getElementById("user_Id").style.color = "lightgreen"
            actions.resetForm();
        }
        actions.setSubmitting(true);
        await new Promise((resolve) => setTimeout(resolve, 3000));
        actions.setSubmitting(false);
        
    };

    const formik = useFormik({

        initialValues: {

            firstname: '',
            surname: '',
            username: '',
            email: '',
            password: '',
            cpassword: ''
        },
        validationSchema: schema,
        onSubmit,
    })

    return (

        <form onSubmit={formik.handleSubmit}  className="App-header">
             {formik.isSubmitting && <div id="user_Id">{userExist}</div>}
            <input className="app-child" id="firstname" type="text" placeholder="Enter your Firstname" value={formik.values.firstname} onChange={formik.handleChange} onBlur={formik.handleBlur} />
            {formik.errors.firstname && formik.touched.firstname && <div className="error">{formik.errors.firstname}</div>}
            <input className="app-child" id="surname" type="text" placeholder="Enter your Surname" value={formik.values.surname} onChange={formik.handleChange} onBlur={formik.handleBlur} />
            {formik.errors.surname && formik.touched.surname && <div className="error">{formik.errors.surname}</div>}
            <input className="app-child" id="username" type="text" placeholder="Create a username" value={formik.values.username} onChange={formik.handleChange} onBlur={formik.handleBlur} />
            {formik.errors.username && formik.touched.username && <div className="error">{formik.errors.username}</div>}
            <input className="app-child" id="email" type="email" placeholder="Enter your email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
            {formik.errors.email && formik.touched.email && <div className="error">{formik.errors.email}</div>}
            <input className="app-child" id="password" type="password" placeholder="Create a password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
            {formik.errors.password && formik.touched.password && <div className="error">{formik.errors.password}</div>}
            <input className="app-child" id="cpassword" type="password" placeholder="Confirm password" value={formik.values.cpassword} onChange={formik.handleChange} onBlur={formik.handleBlur} />
            {formik.errors.cpassword && formik.touched.cpassword && <div className="error">{formik.errors.cpassword}</div>}
            <Button type="submit" disable={formik.isSubmitting} >Register</Button>
        </form>
    );
}