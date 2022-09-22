import { makeStyles } from "tss-react/mui";

export default makeStyles()(() => ({
app: {
    position: 'absolute',
    top: "160px",
    right: "-75px"
},
appBar: {
    borderRadius: "15px",
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
},
  heading: {
    color: 'rgba(0,183,255, 1)',
},
  image: {
    marginLeft: '15px',
},
}));