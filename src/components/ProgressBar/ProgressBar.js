/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import {COLORS} from '../../constants';


const ProgressContainer = styled.div`
  height: var(--height);
  padding: var(--padding);

  background: ${COLORS.transparentGray15};
  border-radius: var(--border-radius);
  box-shadow: inset 0 2px 4px ${COLORS.transparentGray35};
`

const ProgressOverflowBox = styled.div`
  overflow: clip;
  border-radius: 4px;
  height: 100%;
  width: 100%;
`

const ProgressValue = styled.div`
  background: ${COLORS.primary};
  height: 100%;
  width: var(--value);
`

const ProgressBar = ({value, size}) => {
    const defaults = {
        "--height": "12px",
        "--border-radius": "4px",
        "--padding": 0,
        "--value": value + "%"
    }
    const sizes = {
        small: {
            ...defaults,
            "--height": "8px",
        },
        medium: {
            ...defaults,
            "--height": "12px",
        },
        large: {
            ...defaults,
            "--height": "24px",
            "--border-radius": "8px",
            "--padding": "4px"
        }
    }
    const properties = sizes[size] ?? defaults;

    return <ProgressContainer style={properties} aria-valuenow={value} role={"progressbar"}>
        <ProgressOverflowBox>
            <ProgressValue/>
        </ProgressOverflowBox>
    </ProgressContainer>;
};

export default ProgressBar;
