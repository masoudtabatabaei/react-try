import React, { Component } from 'react';
import Counter from './counter';

class Counters extends React.Component {
    state = {
        counters : [
            {id : 1 , value : 1} ,
            {id : 2 , value : 6} ,
            {id : 3 , value : 3} ,
            {id : 4 , value : 0} 
        ]
    }

    render() { 
        return (
            <div>
                { this.state.counters.map(counter => <Counter key={counter.id} id={counter.id} value={counter.value}><h4>Title #{counter.id}</h4></Counter>) }
            </div>
        );
    }
}
 
export default Counters;