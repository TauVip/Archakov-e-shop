import { Card, Image, Icon, Button } from 'semantic-ui-react'

const BookCard = book => (
  <Card>
    <Image src={book.image} />
    <Card.Content>
      <Card.Header>{book.title}</Card.Header>
      <Card.Meta>
        <span className='date'>{book.author}</span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='rub' />
        {book.price}
      </a>
    </Card.Content>
    <Button onClick={book.addToCart.bind(this, book)}>
      Добавить в корзину
    </Button>
  </Card>
)

export default BookCard
