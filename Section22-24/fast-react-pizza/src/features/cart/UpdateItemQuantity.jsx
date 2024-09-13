import Button from '../../ui/Button.jsx';
import { useDispatch } from 'react-redux';
import { decreaseItemQuantity, increaseItemQuantity } from './cartSlice.js';

function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();
  const handleDecrement = () => {
    dispatch(decreaseItemQuantity(pizzaId));
  };
  const handleIncrement = () => {
    dispatch(increaseItemQuantity(pizzaId));
  };
  return (
    <div className={'md: flex items-center gap-1 md:gap-3'}>
      <Button type={'round'} onClick={handleDecrement}>
        -
      </Button>
      <span className={'text-sm font-medium'}>{currentQuantity}</span>
      <Button type={'round'} onClick={handleIncrement}>
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
