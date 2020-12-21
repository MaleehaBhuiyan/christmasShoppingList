import React from 'react' 

class FormTwo extends React.Component{
    state = {
        name: '',
        gift: '',
        price: '',
        id: null
    }

    changeHandler = (e) => {
       this.setState({ [e.target.name]:e.target.value }) 
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.props.addToList(this.state)
        this.setState({
            name: '',
            gift: '',
            price: '',
            id: null
        })
    }

    render(){
        console.log("From form: ", this.props.name)
        return(
            <form onSubmit={this.submitHandler} id="formTwo">
                <label>Name</label>
                <input type="text" name="name" value={this.state.name} onChange={this.changeHandler} />
                <br/>
                <label>Gift</label>
                <input type="text" name="gift" value={this.state.gift} onChange={this.changeHandler} />
                <br/>
                <label>Price</label>
                <input type="text" name="price" value={this.state.price} onChange={this.changeHandler} />
                <br/>
                <input className="button" type="submit" value="Add to List" />
            </form>
        )
    }
}

export default FormTwo