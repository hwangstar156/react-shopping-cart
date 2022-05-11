import styled from "styled-components";
import Button from "../@shared/Button/Button";

const ProductDeleteButton = styled(Button)`
  padding: 8px 14px;
  background-color: white;
  font-size: 12px;
  color: black;
  border: 1px solid ${({ theme }) => theme.colors["gray_02"]};
`;

export default ProductDeleteButton;