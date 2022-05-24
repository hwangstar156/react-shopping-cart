import ShoppingCartItemsContainer from "component/ShoppingCart/ShoppingCartItemsContainer/ShoppingCartItemsContainer";
import { Meta, Story } from "@storybook/react";
import { Carts } from "type";

export default {
  title: "ShoppingCartItemsContainer",
  component: ShoppingCartItemsContainer,
} as Meta;

interface CartProps {
  carts: Carts;
}

export const DefaultShoppingCartItemsContainer: Story<CartProps> = (args) => (
  <ShoppingCartItemsContainer {...args} />
);
DefaultShoppingCartItemsContainer.args = {
  carts: [
    {
      name: "[든든] 기분 시로가마보코 160g",
      price: 2800,
      id: "sming7",
      thumbnail:
        "https://cdn-mart.baemin.com/goods/custom/20200525/11315-main-01.png",
      user: "sming",
      quantity: 1,
    },
    {
      name: "[든든] 흑곤약 250g",
      price: 1300,
      id: "sming4",
      thumbnail:
        "https://cdn-mart.baemin.com/goods/custom/20200525/11263-main-01.png",
      user: "sming",
      quantity: 1,
    },
    {
      name: "[든든] 냉동조미유부삼각 (60장) 1kg",
      price: 8400,
      id: "sming8",
      thumbnail:
        "https://cdn-mart.baemin.com/goods/custom/20200525/11323-main-01.png",
      user: "sming",
      quantity: 1,
    },
  ],
};