import React from 'react';

class Test extends React.Component {
    constructor(){
        super();
        this.state = {
            name : "Masoud" , 
            chk : true , 
            text : "This is test textarea" ,
            carModel : "Ford" ,
            maritalStatus : "single"
        };
    }
    
    handleChange = (event) => {
        let name = event.target.name;
        let value = (event.target.type === "checkbox") ? event.target.checked : event.target.value;

        this.setState({
            [name] : value
        });
    }

    componentDidUpdate(){
        console.log(this.state);
    }

    submitForm = (event) => {
        event.preventDefault();
        console.log(`name : ${this.state.name} and checked is : ${this.state.chk} \n 
                    and text : ${this.state.text} and car : ${this.state.carModel} and marital status : ${this.state.maritalStatus}`);
    }

    render(){
        return (
            <form method='POST' onSubmit={this.submitForm}>
                <input type='text' name='name' placeholder='Name' value={this.state.name} onChange={this.handleChange} />
                <input type='checkbox' name='chk' checked={this.state.chk} onChange={this.handleChange}/>
                <br/>
                <textarea name='text' value={this.state.text} onChange={this.handleChange}/>
                <br/>
                <select name='carModel' value={this.state.carModel} onChange={this.handleChange}>
                    <option value='BMW'>BMW</option>
                    <option value='Ford'>Ford</option>
                    <option value='Audi'>Audi</option>
                </select>
                <br/>
                <label>
                    Single
                    <input type='radio' name='maritalStatus' value='single' checked={this.state.maritalStatus === "single"} onChange={this.handleChange}/>
                </label>
                <label>
                    Married
                   <input type='radio' name='maritalStatus' value='married' checked={this.state.maritalStatus === "married"} onChange={this.handleChange}/>
                </label>
                <br/>
                <button type='submit'>Send</button>
            </form>
        );
    }
}


export default Test;