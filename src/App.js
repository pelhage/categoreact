import React, { Component } from 'react'
import CategoriedInput from '../../src/CategoriedInput'
// import './App.css'

export default class App extends Component {

  constructor(props) {
    super(props)
    this.onCategoriesUpdate = this.onCategoriesUpdate.bind(this)
    this.onCategoryAdd = this.onCategoryAdd.bind(this)
    this.onCategoryRemove = this.onCategoryRemove.bind(this)
    this.state = { categories: [] }
  }

  onCategoriesUpdate(e) {
    // console.log('Setting categories to: ', e);
    this.setState({ categories: e })
  }
  onCategoryAdd(e) {
    console.log('onCategoryAdd', e);
  }
  onCategoryRemove(e) {
    console.log('onCategoryRemove', e);
  }
  render() {
    return (
      <div>
        <p style={{fontFamily:'Helvetica', paddingLeft: '10px'}}>Categories</p>
        <CategoriedInput
          placeholder="Enter a category"
          onCategoriesUpdate={this.onCategoriesUpdate}
          onCategoryAdd={this.onCategoryAdd}
          onCategoryRemove={this.onCategoryRemove}
          categories={this.state.categories} />
      </div>
    )
  }
}
