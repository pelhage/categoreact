import React, { Component, PropTypes } from 'react'
import Input from './Input'
import RenderedCategories from './RenderedCategories'

class CategoriedInput extends Component {
  constructor(props) {
    super(props)
    this.state = { currentCategory: '' }
    // Bind helper methods
    this.addToCategories = this.addToCategories.bind(this)
    this.handleCategories = this.handleCategories.bind(this)
    this.removeFromCategories = this.removeFromCategories.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ categories: nextProps.categories })
  }
  // Push a category to the component's state when user hits
  // comma or tab
  addToCategories(e) {
    const commaOrTabPress = (e.which === 9 || e.which === 9) ||
        (e.keyCode === 188 || e.keyCode === 188)
    const inputValue = e.target.value.trim()

    if (commaOrTabPress) {
      e.preventDefault()
      if (inputValue.length) {
        let categories = this.props.categories.slice()
        if (categories.indexOf(inputValue) === -1) {
          categories.push(inputValue)
        }
        this.setState({ currentCategory: '', categories })
        this.props.onCategoryChange(categories)
      }
    }
  }
  // Update the current category being worked on
  handleCategories(e) {
    this.setState({ currentCategory: e.target.value })
  }
  // Remove the category from component state, and call
  removeFromCategories(e) {
    const category = e.target.getAttribute('data-category')
    const categories = this.state.categories.slice()

    categories.splice(categories.indexOf(category), 1)
    this.setState({ categories })
    this.props.onCategoryChange(categories)
  }

  render() {
    const { categories } = this.props
    return (
      <div>
        <Input
          onKeyDown={this.addToCategories}
          placeholder={this.props.placeholder}
          onChange={this.handleCategories}
          value={this.state.currentCategory} />
        <RenderedCategories
          categories={categories}
          handleClick={this.removeFromCategories} />
      </div>
    )
  }
}

CategoriedInput.propTypes = {
  onCategoryChange: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
  placeholder: PropTypes.string
}

export default CategoriedInput;
