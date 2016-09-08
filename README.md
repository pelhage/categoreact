## Work In Progress

Categoreact is a minimalist categoried input form where tags appear when user separates them by commas or tabs.

![categoreact in action](https://media.giphy.com/media/VA2Nu23NyEFVe/giphy.gif)
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

## Core
### props.onCategoriesUpdate(**updatedCategories**)

This is a required, and only required function for `Categoreact` that you need to pass in as props. It is called any time the list of categories, `allCategories`, is updated by the user. `onCategoriesUpdate` takes one parameter, `updatedCategories`, (the updated list of categories as a result of the user's action).

Since `Categoreact` was designed to be a dumb/stateless component that only receive props, `onCategoriesUpdate` should be in categoreact's parent container and should be updating the `allCategories` array that gets passed in as props to categoreact.

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
props.onCategoriesUpdate(updatedCategories) {
  console.log(updatedCategories)
}
```

## Advanced/Additional Features

Most use cases will be pretty straightforward. A user will add and remove the categories they want, and then once all is said and done, the categories are stored in an array ready to be consumed by other parts of your app.

If, however, you would like to trigger events during the user's process of adding and removing categories, then you have that flexibility by passing respective functions as props.

### props.onCategoryAdd(**category**)
```javascript
/**
 * When a user adds a category, would you like to do
 * anything specific with the added category?
 */
props.onCategoryAdd(category) {
  console.log(category)
}
```
### props.onCategoryRemove(**category**)

```javascript
/**
 * When a user removes a category, would you like to do
 * anything specific with the removed category?
 */
props.onCategoryRemove(removedCategory) {
  console.log(category)
}
```

## TO DO:

- Add tests
- Add css styling options
- Simplify and decouple the onCategoryChange API
- Add documentation
  - Add GIF showing use
  - Install section
  - API Section
    - onCategoryChange
  - Developers section
- Add linting to project
- Ensure props arent being manipulated directly
