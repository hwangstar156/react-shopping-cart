import PaymentBox from "component/@shared/PaymentBox/PaymentBox";
import OrderButton from "component/@shared/OrderButton/OrderButton";
import {
  PaymentTopContainer,
  PaymentBottomContainer,
  PaymentWrapper,
} from "./PaymentContainer.style";
import { SmingPayment, useSmingPayment } from "sming-payments";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentOrders } from "redux/orders/orders.selector";
import { deleteOrderStart } from "redux/orders/orders.action";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATH } from "constants/index";

function PaymentContainer({
  totalPaymentCost,
  label,
  buttonText,
  handleOrderButtonClick,
}: {
  totalPaymentCost: number;
  label: string;
  buttonText: string;
  handleOrderButtonClick?: () => void;
}) {
  const { isShowModal, toggleModal } = useSmingPayment();
  const orders = useSelector(selectCurrentOrders);
  const ordersIdList = orders.map((order) => order.id);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClickPayButton = () => {
    dispatch(deleteOrderStart(ordersIdList));
    navigate(ROUTE_PATH.ROOT);
  };

  return (
    <PaymentWrapper>
      <SmingPayment
        price={totalPaymentCost}
        isShowModal={isShowModal}
        toggleModal={toggleModal}
        payButtonHandler={onClickPayButton}
      />
      <PaymentTopContainer>{label}</PaymentTopContainer>
      <PaymentBottomContainer>
        <PaymentBox price={totalPaymentCost}>{label}</PaymentBox>
        <OrderButton
          onClick={handleOrderButtonClick}
          data-testid="order-button"
        >
          {buttonText}
        </OrderButton>
      </PaymentBottomContainer>
    </PaymentWrapper>
  );
}

export default PaymentContainer;
