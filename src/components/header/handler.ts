import * as React from 'react';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { ReactElement } from 'react';
import { ElevationScrollProps } from './types';

export function ElevationScroll(props: ElevationScrollProps): ReactElement {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    style: {
      justifyContent: 'center',
      backgroundColor: trigger ? '#19669c' : '#2780c0',
      borderBottom: '1px solid black',
      transition: 'background-color 0.3s ease',
    },
  });
}
