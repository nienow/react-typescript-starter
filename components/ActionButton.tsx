import * as React from 'react';
import {ReactNode} from 'react';
import styled from 'styled-components';

type Props = {
  children: ReactNode;
  onClick: () => void;
  disabled?: boolean
}

const Button = styled.button`
  padding: 10px 20px;
  cursor: pointer;
  width: 100%;
`

const ActionButton = ({children, onClick, disabled}: Props) => (
  <Button onClick={onClick} disabled={disabled}>{children}</Button>
)

export default ActionButton
