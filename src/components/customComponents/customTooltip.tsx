/* eslint-disable react/jsx-props-no-spreading */
import { styled } from '@mui/material/styles';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';

export const CustomTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#19669c',
    color: '#fcfcfa',
    boxShadow: theme.shadows[1],
    fontSize: 11,
    fontFamily: 'Diphylleia',
    letterSpacing: '0.2em',
  },
}));
