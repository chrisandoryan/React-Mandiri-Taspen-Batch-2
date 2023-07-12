import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currDateTime: new Date(),
            setIntervalId: null
        }
    }

    componentDidMount() {
        console.log("componentDidMount() is called...");
        let setIntervalId = setInterval(() => {
            // console.log("Ticking...");
            this.setState({
                currDateTime: new Date()
            });
        }, 1000);
        
        this.setState({
            setIntervalId: setIntervalId
        });
    }

    componentDidUpdate(prevState, prevProps) {
        // console.log("componentDidUpdate() is called...");
        // console.log(prevState);
        // console.log(prevProps);
    }

    componentWillUnmount() {
        clearInterval(this.state.setIntervalId);
    }

    render() {
        return (
            <div>
                <h1>TodoTango</h1>
                <p>{this.state.currDateTime.toLocaleString()}</p>
            </div>
        )
    }
}

export default Header;