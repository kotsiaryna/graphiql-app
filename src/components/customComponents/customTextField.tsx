import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

export const CustomTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#1a405f',
    fontFamily: 'Diphylleia',
    fontWeight: 'bold',
  },
  '& .MuiFormLabel-root': {
    color: '#1a405f',
    fontFamily: 'Diphylleia',
  },

  '& label.Mui-error': {
    color: '#b32947',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#B2BAC2',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#19669c',
      color: '#1a405f',
      borderRadius: 10,
    },
    '&:hover fieldset': {
      borderColor: '#19669c',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#1a405f',
    },
    '&.Mui-error fieldset': {
      borderColor: '#b32947',
    },
  },
});
