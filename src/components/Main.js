import { addToCart } from '../redux/action';
import { useDispatch } from 'react-redux'


function Main() {
  const dispatch = useDispatch();
  const product = {
    name: 'i Phone',
    category: 'mobile',
    price: 10000,
    color: 'red'
  }
  return (
    <div>
      <button onClick={() => dispatch(addToCart(product))}>Add To Cart</button>
    </div>
  );
}

export default Main;
