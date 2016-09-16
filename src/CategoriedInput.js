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
    this.parseCategories = this.parseCategories.bind(this)
    this.convertToTags = this.convertToTags.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ categories: nextProps.categories })
  }

  parseCategories(categoriesString, allCategories) {
    return categoriesString.trim().split(",").map((category) => {
      category = category.trim()
      return category.trim()
    })
    .filter((category) => {
      return category !== '' && category !== undefined && allCategories.indexOf(category) === -1
    })
  }

  // Push a category to the component's state when user hits
  // comma or tab
  addToCategories(e) {
    const tabPress = (e.which === 9 || e.keyCode === 9)
    const enteredCategory = this.state.currentCategory
    const cursorIndex = e.target.selectionStart
    if (tabPress && cursorIndex > 0) {
      e.preventDefault()
      var tabbedText = [enteredCategory.slice(0, cursorIndex), ',', enteredCategory.slice(cursorIndex)].join('');
      this.convertToTags(tabbedText)
    }
  }

  convertToTags(input) {
    let { categories, onCategoriesUpdate, onCategoryAdd } = this.props

    let allCategories = categories.slice() || []
    // Set up and parse Input
    let parsedCategories = this.parseCategories(input, allCategories)
    // If there is no comma at the end of the input, all input will be tagged
    let isComplete = input.trim().slice(-1) === ','
    // If the input is not complete, make sure to hold onto whats left
    let lastCategory = (isComplete) ? '' : parsedCategories.pop() || parsedCategories[0]
    if (!isComplete && !parsedCategories.length) {
      lastCategory = input
    }
    // Update everything
    let updatedCategories = allCategories.concat(parsedCategories)
    this.setState({ currentCategory: lastCategory })

    if (typeof onCategoryAdd === 'function') {
      if (parsedCategories.length > 1) {
        onCategoryAdd(parsedCategories)
      } else {
        onCategoryAdd(parsedCategories[0])
      }
    }
    onCategoriesUpdate(updatedCategories)
  }

  // Update the current category being worked on
  handleCategories(e) {
    const allInput = e.target.value
    if (allInput.indexOf(',') > -1) {
      this.convertToTags(allInput)
    } else {
      this.setState({ currentCategory: allInput })
    }
  }

  // Remove the category from component state, and call
  removeFromCategories(e) {
    const category = e.target.getAttribute('data-category')
    const allCategories = this.props.categories.slice()
    const { onCategoriesUpdate, onCategoryRemove } = this.props

    allCategories.splice(allCategories.indexOf(category), 1)

    if (typeof onCategoryRemove === 'function') {
      onCategoryRemove(category)
    }
    onCategoriesUpdate(allCategories)
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
