

const Child = ({name, handler}) => {
    console.log(name)

    const clickHandler = () => {
        console.log(name)
        // const cloned = {...props}
        // console.log(cloned)
        //
        // cloned.name = 'bob'
        // console.log(props)
    }

    return (
        <div className="App">
            <h2>Hello {name}</h2>
            <button onClick={clickHandler}>Send</button>
        </div>
    );
}

export default Child;