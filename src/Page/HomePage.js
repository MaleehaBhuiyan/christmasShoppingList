import React from 'react'
import Budget from '../HomePageComponent/Budget'
import FormTwo from '../HomePageComponent/FormTwo'
import ShoppingList from '../HomePageComponent/ShoppingList'

class HomePage extends React.Component{
    state = {
        list: []
    }

    addToList = (obj) => {
        let newList = [...this.state.list, obj]
        this.setState({ list:newList })
    }

    render(){
        return(
            <>
            <Budget budget={this.props.budget} />
            <FormTwo addToList={this.addToList} />
            <ShoppingList list={this.state.list} userName={this.props.userName} />
            </>
        )
    }
}

export default HomePage