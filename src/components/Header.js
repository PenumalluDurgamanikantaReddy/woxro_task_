import bg from "../imgs/header.jpg";
import "./header.css"
import bgg from "../imgs/bgg.png"
import { styled } from '@mui/material/styles';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  const Typography=styled(("div"))(({theme})=>({
    fontSize:"5rem",
    fontWeight:"bold",

    [theme.breakpoints.down('sm')] : {
      fontSize:"1rem",
      fontWeight:"bold",
    },
    [theme.breakpoints.down("md")] : {
      fontSize:"1rem",
      fontWeight:"bold",
        margin:"0",
    },

  }))
  const Typographyy=styled(("div"))(({theme})=>({
    fontSize:"5rem",
    fontWeight:"bold",
    marginTop:"10%",

    [theme.breakpoints.down("md")] : {
      fontSize:"2rem",
      fontWeight:"bold",
      marginTop:"5%",
      margiBottom:"0%"
    },
    [theme.breakpoints.down("xl")] : {
      fontSize:"1rem",
      fontWeight:"bold",
      paddingTop:"30%"
    },
  }))
  const Size=styled(("div"))(({theme})=>({
    paddingTop:"4rem",
    //chnages here 
    [theme.breakpoints.down('sm')] : {
      marginTop:"4rem",
      paddingTop:"1rem"
    },
    [theme.breakpoints.down("xl")] : {
      fontSize:"10px",

    }
  }))




  return (
    <div className="container-fluid p-0" style={{position: "relative"}} id="aboutus">
 <img src={bgg} className="img-fluid" alt="..." style={{paddingTop:"5%",maxWidth:"100%"}} />
      <div className="container" style={{position: "absolute", top: "40%", left: "50%", transform: "translate(-50%, -50%)", color:"white",
    display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center"}}>
     
        <div className="container" style={{textAlign:"center",}}>
        <Size>
        <Typographyy style={{fontFamily:"Montserrat",}}>Kerala's Leading  Web </Typographyy>
        <Typography style={{fontFamily:"Montserrat"}}>Design Company</Typography>
        <div className="row justify-content-center" >
          <div className="col-sm-12 col-md-6">
            <p className="p-3" style={{textAlign:"center"}}>
            Global Web Designing Company That Provides Full-cycle Software Development Services, E- 
            commerce & Mobile App Development Services.
            </p>
          </div>
        </div>
        </Size>
      </div>
      
      </div>
    </div>
  );
}

export default Header;
