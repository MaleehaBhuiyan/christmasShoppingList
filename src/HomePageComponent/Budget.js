import React from 'react'  

class Budget extends React.Component{
    render(){
        return(
            <h1>Budget: {this.props.budget} </h1>
        )
    }
}

export default Budget