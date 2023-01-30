import React, { Component } from 'react'
 import loading from './loading.gif'

export class spin extends Component {
  render() {
    return (
      <div className='text-center'>
       <img src={loading} alter="loading"></img> 
      </div>
    )
  }
}

export default spin
