import styled from 'styled-components';

import Icon from '../Icon';
import VisuallyHidden from "../VisuallyHidden";
import {COLORS} from "../../constants";

const IconInput = (
    {
        label,
        icon,
        width = 250,
        size,
        placeholder,
    }) => {

    return <Wrapper style={{"--width": width + "px"}}>
        <VisuallyHidden>{label}</VisuallyHidden>
        <LeftIcon id={icon} size={14}></LeftIcon>
        <Input type={"text"}  placeholder={placeholder}></Input>
    </Wrapper>;
};


const Wrapper = styled.div`
  position: relative;
  
  width: var(--width);

  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: ${COLORS.gray700};
  
  &:hover {
    color: ${COLORS.black};
  }
`;

const LeftIcon = styled(Icon)`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  pointer-events: none;
`;

const Input = styled.input`
  padding-left: 20px;
  border: none;
  border-bottom: 1px solid ${COLORS.black};
  width: 100%;

  font-size: inherit;
  font-weight: inherit;
  color: inherit;

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
  
  &:focus {
    outline: 1px solid ${COLORS.primary};
    outline-offset: 2px;
  }
`;


export default IconInput;
