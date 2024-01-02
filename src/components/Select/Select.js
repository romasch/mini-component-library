import React from 'react';
import styled from 'styled-components';

import {COLORS} from '../../constants';
import Icon from '../Icon';
import {getDisplayedValue} from './Select.helpers';

const Wrapper = styled.div`
  position: relative;
  display: inline-block;

  padding: 12px 16px;
  border-radius: 8px;
  background: ${COLORS.transparentGray15};

  font-family: Roboto, sans-serif;
  font-size: 16px;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }

  &:focus-within {
    outline: 2px solid ${COLORS.primary};
  }
`;

const StyledSelect = styled.select`
  position: absolute;
  inset: 0;
  opacity: 0;
`;

const SelectedValue = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`;


const Select = ({label, value, onChange, children}) => {
    const displayedValue = getDisplayedValue(value, children);

    return <Wrapper>
        <SelectedValue>
            <span>{displayedValue}</span>
            <Icon id={"chevron-down"} size={24} strokeWidth={2}></Icon>
        </SelectedValue>
        <StyledSelect value={value} onChange={onChange} aria-label={"sort"}>
            {children}
        </StyledSelect>
    </Wrapper>;
};

export default Select;
