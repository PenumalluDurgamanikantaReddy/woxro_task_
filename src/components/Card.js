import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Breadcrumb ,Card,Form} from "react-bootstrap";
import ui from "../svgs/ui.png"
import { styled } from '@mui/material/styles';

function ServiceCard({img,service,text,color}) {
    const Card = styled(("div"))(({ theme }) => ({
     
        width:"30%",

        [theme.breakpoints.down("md")]: {
       
        },
      
      }));
   

  return (
    <div class="card" style={{width: "100%",textAlign:"left", backgroundColor:`${color}`}}>
    <img src={img} class="imgStyle" alt="Web Designing" style={{width:"25%",marginTop:"10%",paddingLeft:"5%"}}/>
    <div class="card-body">
      <h5 class="card-title">{service}</h5>
    
    
      <p class="card-text" >{text}.</p>
    
    
    </div>
  </div>
  )
}

export default ServiceCard