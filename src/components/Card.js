import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Breadcrumb ,Card,Form} from "react-bootstrap";
import ui from "../svgs/ui.png"
import { styled } from '@mui/material/styles';

function ServiceCard({img,service,text,color}) {

  
  const styles = {
    width: "100%",
    textAlign:"left", 
  
 
    }
    const Marketdata = styled('div')(({ theme }) => ({
      width: "100%",
      textAlign:"left", 
      backgroundColor:`${color}`,
    
      '&:hover': {
        backgroundColor: 'gray',
        cursor: 'pointer',

      }}))




  return (

    <div class="card" style={styles}>
    <Marketdata>
    <img src={img} class="imgStyle" alt="Web Designing" style={{width:"25%",marginTop:"10%",paddingLeft:"5%"}}/>
    <div class="card-body">
      <h5 class="card-title">{service}</h5>
    
    
      <p class="card-text" >{text}.</p>
    
    
    </div>
    </Marketdata>
  </div>

  )
}

export default ServiceCard