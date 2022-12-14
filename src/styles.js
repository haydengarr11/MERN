import { makeStyles } from "tss-react/mui";

export default makeStyles()((theme) => ({
appBar: {
  borderRadius: 15,
  margin: '20px 0',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
},
  heading: {
    color: 'rgba(0,183,255, 1)',
},
[theme.breakpoints.down('sm')]: {
  mainContainer: {
    flexDirection: "column-reverse"
  }
},
}));

//   image: {
//     marginLeft: '15px',
// },