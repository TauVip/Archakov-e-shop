import { Menu } from 'semantic-ui-react'

const MenuComponent = ({ totalPrice, count }) => (
  <Menu>
    <Menu.Item name='browse'>Магазин книг</Menu.Item>

    <Menu.Menu position='right'>
      <Menu.Item name='signup'>
        Итого: &nbsp; <b>{totalPrice}</b> &nbsp; руб.
      </Menu.Item>

      <Menu.Item name='help'>
        Корзина (<b>{count}</b>)
      </Menu.Item>
    </Menu.Menu>
  </Menu>
)

export default MenuComponent
