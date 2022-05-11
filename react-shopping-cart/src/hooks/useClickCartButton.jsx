import { useDispatch } from "react-redux";
import { CURRENT_USER } from "../constants/index";
import {
  addProductToCartStart,
  deleteProductToCartStart,
} from "../redux/carts/carts.action";

function useClickCartButton() {
  const dispatch = useDispatch();

  const handleDeleteProduct = (e, id) => {
    e.stopPropagation();
    dispatch(deleteProductToCartStart(`${CURRENT_USER}${id}`));
  };

  const handleAddProduct = (e, { name, price, id, thumbnail }) => {
    e.stopPropagation();
    dispatch(
      addProductToCartStart({
        name,
        price,
        id: `${CURRENT_USER}${id}`,
        image: thumbnail,
        user: CURRENT_USER,
      })
    );
  };

  return { handleAddProduct, handleDeleteProduct };
}

export default useClickCartButton;