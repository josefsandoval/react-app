import React, {Component} from 'react';
// Import Counter Component
import Counter from './counter';

class Counters extends Component {
    state = {
        counters: [
            {id: 1, value: 4},
            {id: 2, value: 0},
            {id: 3, value: 6},
            {id: 4, value: 0},
            {id: 5, value: 0}
        ]
    };

    render() {
        return (
            <div>
                {this.state.counters.map(cntr => <Counter key = {cntr.id}/>)}
            </div>
        );
    }
}
export default Counters;