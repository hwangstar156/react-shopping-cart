import ShoppingCartItem from "component/ShoppingCart/ShoppingCartItem/ShoppingCartItem";

import { ColumnFlexWrapper } from "styles/Wrapper";
import { Carts } from "type";

function ShoppingCartItemsContainer({ carts }: { carts: Carts }) {
  return (
    <ColumnFlexWrapper>
      {carts.map(({ id, name, thumbnail, price, checked }) => (
        <ShoppingCartItem
          key={id}
          id={id}
          name={name}
          thumbnail={thumbnail}
          price={price}
          checked={checked}
        />
      ))}
    </ColumnFlexWrapper>
  );
}

export default ShoppingCartItemsContainer;