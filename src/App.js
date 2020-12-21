import { Component } from 'react'
import { connect } from 'react-redux'
import { setBooks } from './actions/books'
import books from './books.json'

class App extends Component {
  render() {
    // const { books } = this.props
    return (
      <ul>
        {books.map(book => (
          <li>
            <b>{book.title}</b> - {book.author}
          </li>
        ))}
      </ul>
    )
  }
}

const mapStateToProps = ({ books }) => ({
  books: books.items
})

const mapDispatchToProps = dispatch => ({
  setBooks: books => dispatch(setBooks(books))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

// Пишем интернет-магазин на ReactJS + Redux #2 | 52:14
