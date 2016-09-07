import React, { Component } from 'react'
import CategoriedInput from '../src/CategoriedInput'

export default class App extends Component {

  constructor(props) {
    super(props)
    this.onCategoryChange = this.onCategoryChange.bind(this)
    this.state = { categories: [] }
  }

  onCategoryChange(e) {
    this.setState({ categories: e })
  }

  render() {
    return (
      <div>
        <p>hello</p>
        <CategoriedInput
          placeholder="Enter a category"
          onCategoryChange={this.onCategoryChange}
          categories={this.state.categories} />
      </div>
    )
  }
}
