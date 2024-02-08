

const Props = (props) => {


    const clickHandler = () => {
        console.log(props)
        const cloned = {...props}
        console.log(cloned)

        cloned.name = 'Bob'
        console.log(props)
    }

    return (
        <div className="Props">
            <h2>Hello {props.name}</h2>
            <button onClick={clickHandler}>Send</button>
        </div>
    );
}

export default Props;