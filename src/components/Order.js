import React, { Component } from 'react'
import {FaTrash} from 'react-icons/fa'

export class Order extends Component {
  render() {
    return (
      <div className='item'>
        <img alt = "alt" src={"./img-sn/" + this.props.item.img}/>
        <h2>{this.props.item.title}</h2>
        <b>{this.props.item.price}$</b>
        <FaTrash className='delete-icon' onClick={() => this.props.onDelete(this.props.item.id)}></FaTrash>
      </div>
    )
  }
}

export default Order