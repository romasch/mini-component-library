/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import {COLORS} from '../../constants';


const Progress = styled.div`

  height: var(--height);
  padding: var(--padding);
  border-radius: var(--border-radius);

  background: ${COLORS.transparentGray15};
  box-shadow: inset 0 2px 4px ${COLORS.transparentGray35};

  & .inner-element {
    border-radius: inherit;
    overflow: clip;
    height: 100%;
    width: 100%;
  }

  & .progress-value {
    background: ${COLORS.primary};
    height: 100%;
    width: var(--value);
  }
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

    return <Progress value={value} max={100} style={properties} aria-valuenow={value} role={"progressbar"}>
        <div className={"inner-element"}>
            <div className={"progress-value"} style={{width: size + "%"}}></div>
        </div>

    </Progress>;
};

export default ProgressBar;
