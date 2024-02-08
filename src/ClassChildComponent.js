import React from "react";

class ClassChildComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            name: 'Bob'
        }

        this.changeName = this.changeName.bind(this);
        this.changeNameWithCallback = this.changeNameWithCallback.bind(this);

    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log(nextProps, this.props, nextState, this.state)
        return false;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.name !== this.state.name) {
            console.log("States are not equals")
        }
    }


    //correct way to change state in component
    changeName = () => {
        this.setState({name: 'Lora'})

        //output Bob because setState is assyncronous
        console.log(this.state)
    }

    changeNameWithCallback() {
        this.setState({name: 'Lora'}, () => {
            //output Lora because it is callback
            console.log(this.state)
        })

        //output Bob because setState is assyncronous
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <button onClick={this.changeName}>Change</button>

            </div>
        )
    }
}