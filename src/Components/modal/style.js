import { makeStyles } from "@mui/styles";
import { borderRadius } from "@mui/system";

export const useStyles = makeStyles({
  modalBar: {
    justifyContent: "flex-end !important",
  },
  modalContainer: {
    // rowGap: "10px",
    marginTop: "0 !important",
  },
  modalWeb: {
    position: "absolute",
    top: "20%",
    left: "20%",
    right: "20%",
    width: "60%",
    // margin:'auto',
    background: "#2A333A",
    padding: "0% 1% 0%",
    border: "1px solid #55657f",
    borderRadius: "5px",
  },
  modalPhone: {
    position: "absolute",
    top: "20%",
    left: "5%",
    right: "5%",
    width: "90%",
    // margin:'auto',
    background: "#2A333A",
    padding: "0% 1% 0%",
    border: "1px solid #55657f",
    borderRadius: "5px",
  },

  input: {
    width: "100%",
    textAlign: "left",
    // marginBottom: 17,
    background: "transparent",
    border: "1px solid white",
    borderRadius: 5,
    color: "#ffffff",
    height: "100%",
    padding: "0 0 0 10px",

    '&:active':{
      outline:'none'
    }
  },
  iconBtn: {
    borderRadius: "5px !important",
    height: "100%",
    // width: "100%",
  },
  white: {
    background: "#6a7ae9 !important",
    color: "white !important",
  },
  black: {
    color: "white !important",
    background: "transparent",
  },
  borderWhite: {
    border: "1px solid white",
  },
  modalFooter: {},

  stepNavigation: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-start'
  },
  steps: {
    background:'transparent',
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    padding: "15px 10px",
    color:'white',
    border:'none',
    '&:disabled':{
      color:'#55657f'
    }
    // borderBottom:'1px solid #55657f',
    //borderTop:0,
    //borderLeft:0,
    //borderRight:0,
  },

  stepSelected:{
    background:'white',
    color:'black'
  },

  textarea:{
    width:'99%',
    '&:focus-visible':{
      outline:'none'
    }
  },
  scrollBtnTop:{
    background: 'rgb(37,55,167)',
    background: 'linear-gradient(0deg, rgba(37,55,167,1) 35%, rgba(73,90,202,1) 57%, rgba(106,122,233,1) 97%)',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    color:'white'
  },
  scrollBtnBottom:{
    background: 'rgb(37,55,167)',
    background: 'linear-gradient(180deg, rgba(37,55,167,1) 35%, rgba(73,90,202,1) 57%, rgba(106,122,233,1) 97%)',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    color:'white'
  },
  step:{
    width:'100%',
    height:'100%',
    borderRadius:5,
    color:'white',
    background:'transparent'
  },
  answerBtnCont:{
    textAlign:'right'
  },
  answerBtn:{
    background:'#6a7ae9',
    color:'white',
    padding:'3% 5%',
    fontWeight:'bold',
    borderRadius:5,
    border:'none'
  },
  maximizeBtn:{
    position:'absolute',
    left:10,
    bottom:0,
    width:'20%',
    background:'#6a7ae9',
    color:'white',
    border:'none',
    height:'40px',
    borderTopLeftRadius:5,
    borderTopRightRadius:5

  }
});
