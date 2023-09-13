

import React, { Component } from 'react'
import {rowData} from './appData'



const ProductContext = React.createContext();

export default class Context extends Component {

    state ={
        AllData : rowData
    }
  render() {

    console.log(this.state.AllData);
    return (
      <div>
        <h2>Hey</h2>
      </div>
      
    )
  }
}
