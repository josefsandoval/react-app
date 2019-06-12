import React, {Component} from 'react';

class Counter extends Component {
    state = {
        count:0,
        tags: ['tag1', 'tag2', 'tag3', 'tag4']
    };

    // constructor() {
    //     super(); 
    //     // functions in JS are Objects
    //     this.handleIncrement = this.handleIncrement.bind(this); // this always references the current obj
    // }
    // // Cannot call this here, it is undefined (no access to the state property)
    // handleIncrement() {
    //     console.log("Incremented", this.state.count);
    //     // this.state.count++;
    //     this.setState({count: this.state.count + 1});
    //     // obj.method(); <- 'this' return reference to object
    //     // finction();   <- 'this' return reference to window obj | if strict mode enabled it returns 'undefined'

    //     // In order to call this we need the bind method | add in constructor
    // }
    // (Above)Solution bind event handlers to this

    // (Below) simpler way to solve this problem
    // NOTE: arrow functions dont rebind the this keyword, they inherit it
    handleIncrement = () => {
        this.setState({count: this.state.count + 1});
    }

    render() {
        return (
            <div>
                <span className = {this.getBadgeClasses()}>{ this.formatCount()}</span>
                <button onClick = {this.handleIncrement} className = "btn btn-secondary btn-sm m-2">Increment</button>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "m-2 badge badge-";
        classes += (this.state.count) === 0 ? "danger" : "primary";
        return classes;
    }

    formatCount() {
        const {count} = this.state;
        // return count === 0 ? <h1>Zero</h1> : count;
        return count === 0 ? 'Zero' : count
        // return this.state.count === 0 ? 'Zero' : this.state.count;
    }
}
export default Counter;