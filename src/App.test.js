import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});



const data = {
  products : [
    {
     id: 1,
     price: 25,
     img: "img1"
    },
    {
      id: 2,
      price: 35,
      img: "img2"
    },
    {
      id: 3,
      price: 45,
      img: "img3"
    }
  ]
}

products.map((item,id)=>{ return(<Itemcard id={item.id} price={item.price})})