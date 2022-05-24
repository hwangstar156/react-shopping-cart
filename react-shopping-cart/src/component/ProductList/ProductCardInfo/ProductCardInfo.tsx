import {
  ProductCardInfoBox,
  ProductCardInfoContainer,
  StyledCart,
} from "./ProductCardInfo.style";
import ProductName from "component/@shared/ProductName/ProductName";
import ProductPrice from "component/@shared/ProductPrice/ProductPrice";

import useClickCartButton from "hooks/useClickCartButton";
import { CURRENT_USER } from "constants/index";
import { useSelector } from "react-redux";
import { selectCurrentCarts } from "redux/carts/carts.selector";
import { isInCart } from "util/check";
import { Product } from "type";

function ProductCardInfo({ name, price, id, thumbnail }: Product) {
  const { handleAddProduct, handleDeleteProduct } = useClickCartButton();
  const carts = useSelector(selectCurrentCarts);
  const isCartItem = isInCart(id, carts);

  const handleCartClick = (e: React.MouseEvent) => {
    isCartItem
      ? handleDeleteProduct(e, `${CURRENT_USER}${id}`)
      : handleAddProduct(e, { name, price, id, thumbnail });
  };

  return (
    <ProductCardInfoContainer>
      <ProductCardInfoBox>
        <ProductName type="card">{name}</ProductName>
        <ProductPrice type="card">{price}원</ProductPrice>
      </ProductCardInfoBox>

      <div onClick={handleCartClick}>
        <StyledCart $isincart={isCartItem} />
      </div>
    </ProductCardInfoContainer>
  );
}

export default ProductCardInfo;