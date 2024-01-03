import styled from 'styled-components';

import Icon from '../Icon';
import VisuallyHidden from "../VisuallyHidden";
import {COLORS} from "../../constants";

const SIZES = {
    small: {
        iconSize: 14,
        fontSize: 14,
        iconPadding: 20,
        borderWidth: 1,
    },
    large: {
        iconSize: 18,
        fontSize: 18,
        iconPadding: 30,
        borderWidth: 2,
    }
}

const IconInput = (
    {
        label,
        icon,
        width = 250,
        size,
        placeholder,
    }) => {

    const sizeProps = SIZES[size];

    if (!sizeProps) {
        throw new Error("Unknown size for IconInput");
    }


    return <Wrapper style={{
        "--width": width + "px",
        "--font-size": sizeProps.fontSize + "px",
        "--icon-padding": sizeProps.iconPadding + "px",
        "--border-width": sizeProps.borderWidth + "px",
    }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        <LeftIcon id={icon} size={sizeProps.iconSize} strokeWidth={2}></LeftIcon>
        <Input type={"text"} placeholder={placeholder}></Input>
    </Wrapper>;
};


const Wrapper = styled.div`
  position: relative;
  width: var(--width);

  font-family: Roboto, sans-serif;
  font-size: var(--font-size);
  font-weight: 700;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const LeftIcon = styled(Icon)`
  position: absolute;
  top: 0;
  bottom: 2px;
  margin: auto 0;
  pointer-events: none;
`;

const Input = styled.input`
  padding-left: var(--icon-padding);
  border: none;
  border-bottom: var(--border-width) solid ${COLORS.black};
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
