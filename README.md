## Categoreact
[![npm version](https://img.shields.io/npm/v/categoreact.svg)](https://www.npmjs.com/package/categoreact)
[![Build Status](https://travis-ci.org/pelhage/categoreact.svg?branch=master)](https://travis-ci.org/pelhage/categoreact)

Categoreact is a minimalist categoried input field with categoried tags that appear whenever users type commas or hit tabs. The categories are stored in an array held by a parent container component you provide, and are passed down as props to the (dumb) categoreact component for rendering and manipulation.

![categoreact in action](https://media.giphy.com/media/VA2Nu23NyEFVe/giphy.gif) ![another example](https://media.giphy.com/media/US4VQOFyYascU/giphy.gif)

## Installation
```
npm install categoreact --save
```

## Example
```javascript
import React, { Component } from 'react'
import CategoriedInput from 'categoreact'

export default class MyContainer extends Component {
  constructor() {
    super()
    this.state = { categories: [] }
    this.onCategoryChange = this.onCategoryChange.bind(this)
  }
  onCategoryChange(updatedCategories) {
    this.setState({categories: updatedCategories})
  }
  render() {
    return (
      <CategoriedInput
        categories={this.state.categories}
        onCategoryChange={this.onCategoryChange}
      />
    )
  }
}
```
## CSS + Styling
For now, temporarily, for the sake of time and simplicity, categoreact's styling will be modified by using external stylesheets. V2 should support css modules and inline styling, but for now, this is what we're going with!
- `.catreact` (the main component)
- `.catreact__input` (the input form)
- `.catreact-render` (the rendered tags wrapper)
- `.catreact-render__inner` (the rendered tags inner div)
- `.catreact-render__tag` (the individual category tag)
- `.catreact-render__tag-close` (the category tag close button)
- `.catreact__placeholder` (the placeholder text)

## Core
### onCategoriesUpdate(*updatedCategories*)

This is a required, and only required function for `Categoreact` that you need to pass in as props. It is called any time the list of categories, `categories`, is updated by the user. `onCategoriesUpdate` takes one parameter, `updatedCategories`, (the updated list of categories as a result of the user's action).

Since `Categoreact` was designed to be a dumb/stateless component that only receive props, `onCategoriesUpdate` should be in categoreact's parent container and should be updating the `categories` array that gets passed in as props to categoreact.

This gives you the flexibility of managing the state of the input's categories list however you choose, whether it be in the components state directly, or whether it is dispatched with Redux/Flux.

```
/**
 * When the list of categories have been updated,
 * what would you like to do with the updatedCategories?
 *
 * I recommend you update the container state to reflect
 * these changes. This will trigger a re-render of the
 * category tags
 */
onCategoriesUpdate(updatedCategories) {
  console.log(updatedCategories)
}
```

## Advanced/Additional Features

Most use cases will be pretty straightforward. A user will add and remove the categories they want, and then once all is said and done, the categories are stored in an array ready to be consumed by other parts of your app.

If, however, you would like to trigger events during the user's process of adding and removing categories, then you have that flexibility by passing respective functions as props.

### onCategoryAdd(*category*)
```javascript
/**
 * When a user adds a category, would you like to do
 * anything specific with the added category?
 */
onCategoryAdd(addedCategory) {
  console.log(addedCategory)
}
```
### onCategoryRemove(*category*)
```javascript
/**
 * When a user removes a category, would you like to do
 * anything specific with the removed category?
 */
onCategoryRemove(removedCategory) {
  console.log(removedCategory)
}
```
### Example
```javascript
import React, { Component } from 'react'
import CategoriedInput from 'categoreact'

export default class MyContainer extends Component {
  constructor() {
    super()
    this.state = { categories: [] }
  }
  onCategoryChange(updatedCategories) {
    this.setState({categories: updatedCategories})
  }
  onCategoryAdd(addedCategory) {
    alert(`You added ${addedCategory}`)
  }
  onCategoryRemove(removedCategory) {
    console.log(`Do something with ${removedCategory}`)
  }
  render() {
    return (
      <CategoriedInput
        categories={this.state.categories}
        onCategoryChange={this.onCategoryChange.bind(this)}
        onCategoryAdd={this.onCategoryAdd.bind(this)}
        onCategoryRemove={this.onCategoryRemove.bind(this)}
      />
    )
  }
}
```

## TO DO:

- Decide on and add css styling options
- Add linting to project
- Fix inconsistencies in documentation
