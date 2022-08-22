import React from 'react'
import {BuyAction} from '.'
import {connect} from 'react-redux'
function CakeContainer(props) {
  return (
    <div>
        <h1>CAKE CONTAINER-{props.numberOfCakes}</h1>
        <button onClick={props.BuyAction}>Buy Cake</button>
    </div>
  )
}
const mapStateToProps=(state)=>{
    return {
        numberOfCakes: state.numberOfCakes
    }
}
const mapDispatchToProp=(dispatch)=>{
    return{
        BuyAction: ()=> dispatch(BuyAction())
    }
}
export default connect(mapStateToProps,mapDispatchToProp)(CakeContainer)