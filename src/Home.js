import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import Item from './Item';
import './Home.css'

const Home = () => {
  const items = useSelector(store => store.items, shallowEqual);

  return (
    <div>
      <h1 className="Home-header">Products</h1>
      <ul className="Home-ul">
        {Object.keys(items).map(key => (
          <Item key={key} id={key} name={items[key].name} price={items[key].price} img={items[key].image_url} />
        ))}
      </ul>
    </div>
  )
}

export default Home;