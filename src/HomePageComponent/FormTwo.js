import React from 'react' 

class FormTwo extends React.Component{
    state = {
        name: '',
        gift: '',
        price: ''
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
            price: ''
        })
    }

    render(){
        return(
            <form onSubmit={this.submitHandler}>
                <label>Name</label>
                <input type="text" name="name" value={this.state.name} onChange={this.changeHandler} />
                <label>Gift</label>
                <input type="text" name="gift" value={this.state.gift} onChange={this.changeHandler} />
                <label>Price</label>
                <input type="text" name="price" value={this.state.price} onChange={this.changeHandler} />
                <input type="submit" value="Add to List" />
            </form>
        )
    }
}

export default FormTwo