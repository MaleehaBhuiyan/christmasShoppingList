import React from 'react'
import Budget from '../HomePageComponent/Budget'
import FormTwo from '../HomePageComponent/FormTwo'
import ShoppingList from '../HomePageComponent/ShoppingList'

class HomePage extends React.Component{
    state = {
        list: []
    }

    addToList = (obj) => {
        obj.id = Math.random()
        let newList = [...this.state.list, obj]
        this.setState({ list:newList })
    }

    deleteItem = (id) => {
        let list = this.state.list.filter(item => {
            return item.id !== id
        })
        this.setState({ list:list })
    }

    render(){
        return(
            <div className="flex-container">
                <div className="flex-child magenta">
                    <Budget budget={this.props.budget} />
                    <FormTwo name={this.state.editName} addToList={this.addToList} />
                </div>
                <div class="flex-child green">
                    <ShoppingList deleteItem={this.deleteItem} list={this.state.list} userName={this.props.userName} />
                </div>
            </div>
        )
    }
}

export default HomePage