import { makeStyles } from 'tss-react/mui';

export default makeStyles()((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(3),
    width: '14em',
    height: '26em'
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: '0 10px',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    margin: '10px 0 10px 0',
  },
  buttonClear: {
    margin: '0 0 10px 0',
  }
}));