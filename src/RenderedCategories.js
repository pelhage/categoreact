import React, { Component, PropTypes } from 'react'

class RenderedCategories extends Component {
  constructor(props) {
    super(props)
    this.renderCategories = this.renderCategories.bind(this)
  }

  renderCategories() {
    const { handleClick } = this.props

    return this.props.categories.map((category, index) => {
      return (
        <span className="catreact-render__tag" key={index}>{category}
          <span
            className="catreact-render__tag-close"
            data-category={category}
            onClick={handleClick}>x</span>
        </span>
      )
    })
  }

  render() {
    const { categories } = this.props

    if (categories.length) {
      return (<div className="catreact-render__inner">{this.renderCategories(categories)}</div>)
    } else {
      return <span className="catreact__placeholder">Add categories separated by tabs or commas</span>
    }
  }
}

RenderedCategories.propTypes = {
  categories: PropTypes.array,
  handleClick: PropTypes.func.isRequired
}

export default RenderedCategories;
