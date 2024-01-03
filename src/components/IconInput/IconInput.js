import styled from 'styled-components';

import Icon from '../Icon';
import VisuallyHidden from "../VisuallyHidden";
import {COLORS} from "../../constants";

const SIZES = {
    small: {
        height: 24,
        iconPadding: 24,
        iconSize: 16,
        fontSize: 14,
        borderWidth: 1,
    },
    large: {
        height: 36,
        iconPadding: 36,
        iconSize: 24,
        fontSize: 18,
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
        "--height": sizeProps.height / 16 + "rem",
        "--font-size": sizeProps.fontSize + "px",
        "--icon-padding": sizeProps.iconPadding + "px",
        "--border-width": sizeProps.borderWidth + "px",
    }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        <LeftIcon id={icon} size={sizeProps.iconSize} strokeWidth={2}></LeftIcon>
        <Input type={"text"} placeholder={placeholder}></Input>
    </Wrapper>;
};


const Wrapper = styled.label`
  position: relative;

  display: block;
  width: var(--width);
  height: var(--height);

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
  bottom: 0;
  margin: auto 0;
`;

const Input = styled.input`
  padding-left: var(--icon-padding);
  border: none;
  border-bottom: var(--border-width) solid ${COLORS.black};
  width: 100%;
  height: 100%;

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
