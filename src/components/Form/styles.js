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
    height: '27em'
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    display: 'flex',
    width: '97%',
    marginLeft: '25px',
    marginTop: '5px',
  },
  buttonSubmit: {
    display: 'flex',
    width: '97%',
    marginLeft: '6px',
    marginTop: '5px',
    marginBottom: '10px'
  },
  buttonClear: {
    width: '97%',
    marginLeft: '5px',
    marginBottom: '6px',
  },
}));