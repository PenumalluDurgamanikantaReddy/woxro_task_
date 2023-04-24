import React from 'react'
import { Container } from '@mui/material'

import "./header.css"
import Card from './Card';
import { styled } from '@mui/material/styles';
import 'bootstrap/dist/css/bootstrap.min.css';
function Services() {

    const Typography=styled(("div"))(({theme})=>({
        fontSize:"2rem",
        fontWeight:"bold",
        [theme.breakpoints.down('sm')] : {
          fontSize:"3rem",
          fontWeight:"bold",
        },
        [theme.breakpoints.down("xl")] : {
          fontSize:"1.5rem",
          fontWeight:"bold",
        }
      }))

      const Size=styled(("div"))(({theme})=>({

        [theme.breakpoints.down('sm')] : {
          marginTop:"1rem"
        },
        [theme.breakpoints.down("xl")] : {
          fontSize:"10px",
        }
      }))
      const Cards = styled(("div"))(({ theme }) => ({
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)', /* create 2 columns */
        gridTemplateRows: 'repeat(2, 1fr)', /* create 3 rows */
        gap: '1rem',
        justifyContent: "center",
        alignItems: "center",
 
        [theme.breakpoints.down("md")]: {
            display:"flex",
          flexDirection: "column",
          alignItems: 'center',
        },
      
      }));
      
      const Services =[{img:"https://woxro.com/public/assets/png/services/webdesigning.png",service:"Web Designing",
      color:"#e7f0f7",text:"We create impressive interfaces. Usability +user experience are created based on a.study of preferences and user behavior,using the latest web design trends, ourexperience, and achievements."},
      {img:"https://woxro.com/public/assets/png/services/webapplication.png",service:"Web Application",
      color:"#fef9ee",text:"We have completed projects in full-cycle web applications including CRM, HRM, and project management solutions. Look no further if you are in search of a professional partner who can develop stunning web applications."},
      {img:"https://woxro.com/public/assets/png/services/mobileappdevelopment.png",service:"Mobile App Development",
      color:"#eee8db",text:"We develop high-quality and effective applications for your business. Our expertise and knowledge help us create reliable mobile applications for iOS and Android and cross-platform solutions. "},
      {img:"https://woxro.com/public/assets/png/services/ecommercedevelopment.png",service:"Ecommerce Development",
      color:"#fcf0e4",text:"For some of you, our involvement as an eCommerce development and consulting partner will mean a powerful business launch with the right technology stack. For others – a possibility to give their business a fresh start "},
      {img:"https://woxro.com/public/assets/png/services/digitalmarketing.png",service:"Digital Marketing",
      color:"#e1e6ef",text:"We bring together expertise in brand marketing and sustainability to design and implement ideas in branding. We also bring brand purpose to life by communicating great stories. Now Maximize your online visibility"},
      {img:"https://woxro.com/public/assets/png/services/graphic.png",service:"Graphic Designing",
      color:"#daf5f5",text:"We build sustainable, brands by connecting your product and message with audiences that would want to get your and or services. We nurture ideas to transform ands through creativity focussed on growth."},]


  return (
    <Container id="Services" style={{paddingBottom:"10px"}}>
    <div className="container" style={{ 
    display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center"}}>
     
    
        <Size>
        
        <div className="row justify-content-center" style={{margin:"0",}} >
          <div className="col-sm-12 col-md-6">
            <p className="p-3" style={{textAlign:"center",color:"gray",fontWeight:"600"}}>
            SERVICES WE DELIVER
            </p>
           
          </div>
        
        </div>
        <Typography style={{fontFamily:"Montserrat",color:"black",}}>Preparing for your success, we provide truly </Typography>
        <Typography style={{fontFamily:"Montserrat",color:"black",}}>prominent IT solutions.</Typography>
      
        </Size>
        <Cards>
{
    Services.map((each)=>{
return (<Card img={each.img} key={each.service} service={each.service}  text={each.text} color={each.color}/>)
    })
}
        </Cards>
      
      </div>
    </Container>
  )
}

export default Services