import logo from '../logo.svg';
import {useState} from "react";

const Home1 = (props) => {
    const [state, setState] = useState({name: 'Stepan', age: 25, show: false})

    console.log(state)

    function onClickHandler() {
        setState((prevState) => ({
            ...prevState, name:'Mykola', age: 34, show: !prevState.show
        }));
    }

    return (
        <div>
            {state.show ? null : <p>Name: {state.name}, age: {state.age}</p>}
            <button onClick={onClickHandler}>{state.show ? 'show' : 'hide'}</button>
        </div>
    );
}


export default Home1;
