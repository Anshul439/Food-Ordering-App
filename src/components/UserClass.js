import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
        };
    }
    
    render() {
        const {name, location} = this.props;
        const {count} = this.state;

        return (
            <div className="user-card">
                <h1>Count: {count}</h1>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1,
                    })
                }}>Increase count</button>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: anshulwadhwa439@gmail.com</h4>
            </div>
        )
    }
}

export default UserClass;