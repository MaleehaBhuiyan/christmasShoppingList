import React from 'react' 

class FormOne extends React.Component{
    state = {
        name: '',
        budget: ''
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.props.submitHandler(this.state)
    }

    render(){
        return(
            <form onSubmit={this.submitHandler} id="formOne">
                <label>Name: </label>
                <input type="text" name="name" value={this.state.name} onChange={this.changeHandler} />
                <br/>
                <label>Budget: </label>
                <input type="text" name="budget" value={this.state.budget} onChange={this.changeHandler} />
                <br/>
                <button className="button" >New List</button>
            </form>
        )
    }
}

export default FormOne