import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { COLOR } from '../../constants/color';

export const BUTTON_TYPE = Object.freeze({
  LARGE: 'LARGE',
  MEDIUM: 'MEDIUM',
  SMALL: 'SMALL',
  X_SMALL: 'X_SMALL',
});

const buttonStyle = {
  [BUTTON_TYPE.LARGE]: {
    width: '638px',
    height: '98px',
    fontSize: '32px',
    fontWeight: '500',
    backgroundColor: COLOR.BROWN_500,
    color: COLOR.WHITE,
  },
  [BUTTON_TYPE.MEDIUM]: {
    width: '388px',
    height: '73px',
    fontSize: '24px',
    backgroundColor: COLOR.MINT_500,
    color: COLOR.WHITE,
  },
  [BUTTON_TYPE.SMALL]: {
    width: '138px',
    height: '47px',
    fontSize: '20px',
    backgroundColor: COLOR.MINT_500,
    color: COLOR.WHITE,
  },
  [BUTTON_TYPE.X_SMALL]: {
    width: '117px',
    height: '50px',
    backgroundColor: COLOR.WHITE,
    border: `1px solid ${COLOR.GRAY_300}`,
  },
};

const Container = styled.button`
  text-align: center;
  border: none;
  cursor: ${({ disabled }) => (disabled ? 'unset' : 'pointer')};
  color: ${({ disabled }) => (disabled ? COLOR.GRAY_300 : 'inherit')};

  ${({ type }) => buttonStyle[type] || buttonStyle[BUTTON_TYPE.MEDIUM]};
  ${({ styles }) => styles};
`;

const Button = ({ children, type, styles, disabled, onClick }) => (
  <Container type={type} styles={styles} disabled={disabled} onClick={onClick}>
    {children}
  </Container>
);

Button.defaultProps = {
  type: BUTTON_TYPE.MEDIUM,
  disabled: false,
};

Button.propTypes = {
  type: PropTypes.string,
  styles: PropTypes.object,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;