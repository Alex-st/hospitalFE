import Child from "../ChildComponent";
import {createElement, memo, useCallback, useEffect, useState} from "react";
import App from "../App";

const Form = memo (() => {
    //State
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: ''
    });

    const changer = (event) => {
        console.log(user)
        //event - change, input
        setUser((prevState) => ({
            ...prevState, [event.target.name]: event.target.value
        }))
    };

    const submitter = (event) => {
        event.preventDefault()
        console.log(user)
    }

    return (
        <div className="Form">
            <form onSubmit={submitter}>
            <input type="text" name="firstName" value={user.firstName} onChange={changer}/>
                <br/>
            <input type="text" name="lastName" value={user.lastName}/>
                <br/>
            <input type="email" name="email" value={user.email}/>
                <button type="submit">Send</button>
            </form>

            <br/>


            <textarea name="" id="" cols="30" rows="10"></textarea>
            <br/>
            <select name="" id=""></select>
        </div>
    );
})

export default Form;