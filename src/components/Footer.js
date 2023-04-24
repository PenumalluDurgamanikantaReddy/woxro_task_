import React from 'react'

import world from  "../svgs/world.png"
import bg from "../imgs/header.jpg";
import "./header.css"
import bgg from "../imgs/bgg.png"
import { styled } from '@mui/material/styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Breadcrumb ,Card,Form} from "react-bootstrap";
import { Input } from '@mui/joy';
import Button from '@mui/joy/Button';
import CallIcon from '@mui/icons-material/Call';
import MessageIcon from '@mui/icons-material/Message';
function Footer() {
  const Typography=styled(("div"))(({theme})=>({
    fontSize:"3rem",
    fontWeight:"bold",
 
    [theme.breakpoints.down("xl")] : {
      paddingBottom:"2rem",
    },
    [theme.breakpoints.down("md")] : {
      fontSize:"2rem",
    fontWeight:"bold",
    marginTop:"5%"
    },
    [theme.breakpoints.down('sm')] : {
      fontSize:"1rem",
      fontWeight:"bold",
      marginTop:"5%"
    },
    [theme.breakpoints.down("xl")] : {
        fontSize:"1rem",
      fontWeight:"bold",
      marginTop:"5%"
 },
 

  }))
  const Footeralign=styled(("div"))(({theme})=>({
    display:"flex",
    flexDirection:"row",
    columnGap:"10px",
    paddingBottom:"10px",
    alignItems:"center",
    [theme.breakpoints.down('sm')] : {
      flexDirection:"column",
    },
    [theme.breakpoints.down("xl")] : {
      flexDirection:"row",
    }
  }))
  const Size=styled(("div"))(({theme})=>({
[theme.breakpoints.down("xl")] : {
      fontSize:"1rempx",
   
    }
  }))
  const Buttons=styled(("div"))(({theme})=>({
    display:"flex",
    flexDirection:"column",
   gap:"20px",
 [theme.breakpoints.down("lg")] : {
  display:"flex",
  flexDirection:"column",
 gap:"20px",
},
[theme.breakpoints.down('sm')] : {
  display:"flex",
  flexDirection:"column",
 gap:"10px",
 marginTop:"8%"
},
[theme.breakpoints.down("xl")] : {
  width:"50%",
  height:"50%",
  display:"flex",
  flexDirection:"column",
 gap:"10px",
}
  }))




  return (
    <div className="container-fluid p-0" style={{position: "relative",backgroundColor:"black"}} id='ContactUs'>
    <img src={world} className="img-fluid" alt="..." style={{paddingTop:"4px",maxWidth:"100%", width: "100%",height:"100%",}} />
      <div className="container" style={{position: "absolute", top: "40%", left: "50%", transform: "translate(-50%, -50%)", color:"white",
    display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center"}}>
     
        <div className="container" style={{textAlign:"center",}}>
        <Size >
        <Footeralign >
        <Typography style={{fontFamily:"Montserrat",}}>  We offer all kinds of IT services that ensure your success</Typography>
        <Buttons>

        <Button variant="outlined"  className='contactbutton'>    <CallIcon/><strong>ContactUs</strong></Button>
        
        <Button variant="outlined"  className='contactbutton'>    <MessageIcon/>  Lets'Talk</Button>
     
  
      </Buttons>
       </Footeralign>
       
        </Size>
      </div>
      
      </div>
  
    </div>
  );
}

export default Footer;
