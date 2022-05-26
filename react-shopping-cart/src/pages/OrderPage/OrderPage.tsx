import { useSelector } from "react-redux";

import PaymentContainer from "component/@shared/PaymentContainer/PaymentContainer";
import PaymentPageHeader from "component/@shared/PaymentPageHeader/PaymentPageHeader";
import OrderLeftSection from "component/Order/OrderLeftSection/OrderLeftSection";

import { selectCurrentOrders } from "redux/orders/orders.selector";
import { ColumnFlexWrapper } from "styles/Wrapper";
import { OrderPageContent } from "pages/OrderPage/OrderPage.style";
import { calculatePaymentCost } from "util/calculate";
import { useSmingPayment } from "sming-payments";

function OrderPage() {
  const { toggleModal } = useSmingPayment();
  const orders = useSelector(selectCurrentOrders);
  const totalPaymentCost = calculatePaymentCost(orders);

  const handleOrderButtonClick = () => {
    toggleModal();
  };

  return (
    <ColumnFlexWrapper gap="30px">
      <PaymentPageHeader>주문/결제</PaymentPageHeader>
      <OrderPageContent gap="60px">
        <OrderLeftSection />
        <PaymentContainer
          totalPaymentCost={totalPaymentCost}
          label="총 결제금액"
          buttonText={`${totalPaymentCost} 원 결제하기`}
          handleOrderButtonClick={handleOrderButtonClick}
        />
      </OrderPageContent>
    </ColumnFlexWrapper>
  );
}

export default OrderPage;
