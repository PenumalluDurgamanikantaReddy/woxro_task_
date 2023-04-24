import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import logo from "../imgs/woxrologo.png"
import { styled } from '@mui/material/styles';
import { Link, Element, Events,closeMenu, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import Typography from '@mui/material/Typography';
import { Collapse,dropdwon,offcanvas,Container } from 'bootstrap';


function Navbar() {

    const Logo=styled("div")(({ theme })=>({
        width:"auto",
        display:"flex",
        alignItems:"flex-start",


 
     }))
    //  const LogoImg = styled('img')({
    //     width: '13rem',
    //     height: '5%',
    //     padding: '15px',

    //   });
    const LogoImg = styled("div")(({ theme }) => ({
        padding: "15px",
        width: "13rem",
      
        [theme.breakpoints.down("xl")]: {
          width: "8rem",
          height: "auto",
        },
 
      }));


      const StyledTypography = styled(Typography)({
        flexGrow: 1,
        "&:hover":{
      
             color:"white",
             cursor:"pointer"
          },
      });
    

  return (
    <div style={{position:"fixed",top:"0",left:"0",right:"0",zIndex:99999}}>
    <Logo style={{backgroundColor:"white"}} >
    <LogoImg>
    <img src={logo} style={{width:"100%"}}/>
    </LogoImg>
    </Logo>
    <nav class="navbar navbar-expand-lg  navbar-dark bg-dark" >

    <div class="container-fluid">
      
     {/* <button class="navbar-toggler" ml-auto type="button" data-bs-toggle="offcanvas" ata-bs-toggle="offcanvas" 
        data-bs-target="#offcanvasExample" aria-controls="navbarSupportedContent" aria-expanded="false"
        data-bs-placement="end" aria-label="Toggle navigation">        <span class="navbar-toggler-icon"></span>
  </button>*/}
      <button class="navbar-toggler" style={{left:"70%",position:"relative"}}  type="button" data-bs-toggle="offcanvas" ata-bs-toggle="offcanvas" data-bs-target="#offcanvasExample"
       aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>


      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0" style={{fontFamily:"montserrat",fontWeight:"400",
        display:"flex",margin:"0px auto",justifyContent:"space-between",  width: "90%"}}>
          <li class="nav-item">
         
      <Link to="/aboutus"  class="nav-link active" style={{textDecoration: 'none',}}>
       <StyledTypography variant="h6" component="div" style={{color:"white"}} >
     
        </StyledTypography></Link> 
        
        </li>
        <li class="nav-item">
         
        <Link activeClass="active" style={{textDecoration: 'none',}}  to="aboutus" spy={true} smooth={true} offset={-250} duration={500}>
         <StyledTypography variant="h6" component="div" style={{color:"white"}} >
        HOME
          </StyledTypography></Link> 
          
          </li>
          
          <li class="nav-item">
                   
      <Link activeClass="active" style={{textDecoration: 'none',}}  to="aboutus" spy={true} smooth={true} offset={-250} duration={500}>
      <StyledTypography variant="h6" component="div" style={{color:"white"}} >
      About us
       </StyledTypography></Link> 
          
        </li>
        <li class="nav-item">
        <Link activeClass="active" to="Services" spy={true} style={{textDecoration: 'none',}}  smooth={true} offset={-80} duration={500}>
        <StyledTypography variant="h6" component="div" style={{color:"white"}} >
        Services
         </StyledTypography></Link> 
      </li>
      <li class="nav-item">
      <Link   activeClass="active"   style={{textDecoration: 'none',}}spy={true} smooth={true} offset={-250} duration={500}>
      <StyledTypography variant="h6" component="div" style={{color:"white"}} >
      Technology
       </StyledTypography></Link> 

    </li>
    <li class="nav-item">
    <Link   activeClass="active"  style={{textDecoration: 'none',}} spy={true} smooth={true} offset={-250} duration={500}>
    <StyledTypography variant="h6" component="div" style={{color:"white"}} >
    Careers
     </StyledTypography></Link> 

  </li>
  <li class="nav-item">
  <Link activeClass="active"  style={{textDecoration: 'none',}} spy={true} smooth={true} offset={-250} duration={500}>
  <StyledTypography variant="h6" component="div" style={{color:"white"}} >
  Blogs
   </StyledTypography></Link> 
</li>
<li class="nav-item">
<Link   activeClass="active" style={{textDecoration: 'none',}} spy={true} smooth={true} offset={-250} duration={500}>
<StyledTypography variant="h6" component="div" style={{color:"white"}} >
Our Works
 </StyledTypography></Link> 


</li>  
<li class="nav-item">
<Link activeClass="active" to="ContactUs"  style={{textDecoration: 'none',}} spy={true} smooth={true} offset={-250} duration={500}>
<StyledTypography variant="h6" component="div" style={{color:"white"}} >
Contact Us
 </StyledTypography></Link> 

</li>     
        
        </ul>
        
      </div>
    </div>
  </nav>


<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel" style={{backgroundColor:"black"}}>
  <div class="offcanvas-header">


    <div type="button" data-bs-dismiss="offcanvas" aria-label="Close"
     style={{color:"gray",backgroundColor:"black",fontSize:"bold",fontWeight:"bold",width:"10px"}}>X</div>
  </div>
  <div class="offcanvas-body">
  
    <div class="dropdown mt-3" style={{color:"black",backgroundColor:"gray"}} >
<ul style={{listStyle:"none",backgroundColor:"black",textAlign:"left",
color:"gray",alignItems:"left",justifyItems:"left",fontWeight:"500",display:"flex",flexDirection:"column",gap:"1rem"}}>

<Link activeClass="active" style={{textDecoration: 'none',}}  to="aboutus" spy={true} smooth={true} offset={-250} duration={500}><li>
Home</li></Link>


   <Link activeClass="active" style={{textDecoration: 'none',}}  to="aboutus" spy={true} smooth={true} offset={-250} duration={500}><li >
   About us</li></Link>

   <Link activeClass="active" to="Services" style={{textDecoration: 'none',}}  spy={true} smooth={true} offset={-250} duration={500}><li style={{color:"gray"}}> 
    Services</li></Link>

   <li> <a class="navbar-brand" href="#" >Technology</a></li>
   <li> <a class="navbar-brand" href="#" >Careers</a></li>
   <li> <a class="navbar-brand" href="#" >Blogs</a></li>
   <li> <a class="navbar-brand" href="#" >Our Works</a></li>
   <Link activeClass="active" to="ContactUs" spy={true} smooth={true} offset={-250} duration={500}><li>
    Contact Us</li></Link>
      </ul>
    </div>
  </div>
</div>
    </div>
  )
}

export default Navbar