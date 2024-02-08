import Child from "../ChildComponent";
import {createElement, memo, useCallback, useEffect, useRef, useState} from "react";
import App from "../App";

const UnconditionalForm = memo (() => {

    const ref = useRef()
    const divRef = useRef()

    const submitter = (event) => {
        event.preventDefault()
        console.log(ref.current.value, 'ref')
    }

    return (
        <div className="Form">

            {/*contentEditable*/}
            <div ref={divRef} contentEditable/>

            <form onSubmit={submitter}>
            <input type="text" ref={ref}/>
                <br/>
            {/*<input type="text" name="lastName" value={user.lastName}/>*/}
            {/*    <br/>*/}
            {/*<input type="email" name="email" value={user.email}/>*/}
                <button type="submit">Send</button>
            </form>

            <br/>


            <textarea name="" id="" cols="30" rows="10"></textarea>
            <br/>
            <select name="" id=""></select>
        </div>
    );
})

export default UnconditionalForm;