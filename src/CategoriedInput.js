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
    const commaOrTabPress = (e.which === 9 || e.which === 188) ||
        (e.keyCode === 9 || e.keyCode === 188)
    const enteredCategory = e.target.value.trim()

    if (commaOrTabPress) {
      e.preventDefault()
      if (enteredCategory.length) {
        let allCategories = this.props.categories.slice()
        let { onCategoryAdd } = this.props

        if (allCategories.indexOf(enteredCategory) === -1) {
          allCategories.push(enteredCategory)
        }

        this.setState({ currentCategory: '', allCategories })
        if (onCategoryAdd) {
          onCategoryAdd(enteredCategory)
        }
        this.props.onCategoriesUpdate(allCategories)
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
    const allCategories = this.props.categories.slice()
    const { onCategoriesUpdate, onCategoryRemove } = this.props

    allCategories.splice(allCategories.indexOf(category), 1)

    if (onCategoryRemove) {
      onCategoryRemove(category)
    }
    this.props.onCategoriesUpdate(allCategories)
  }

  render() {
    const { categories } = this.props
    return (
      <div className="catreact">
        <Input
          className="catreact__input"
          onKeyDown={this.addToCategories}
          placeholder={this.props.placeholder}
          onChange={this.handleCategories}
          value={this.state.currentCategory} />
        <RenderedCategories
          className="catreact-render"
          categories={categories}
          handleRemove={this.removeFromCategories} />
      </div>
    )
  }
}

CategoriedInput.propTypes = {
  onCategoriesUpdate: PropTypes.func.isRequired,
  onCategoryAdd: PropTypes.func,
  onCategoryRemove: PropTypes.func,
  categories: PropTypes.array.isRequired,
  placeholder: PropTypes.string
}

export default CategoriedInput;
