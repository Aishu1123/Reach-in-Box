import React from 'react'
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
          <Box
          // margin={"50px auto"}
          // display={"flex"}
          // justifyContent={"space-around"}
          >
             <Link to="/home">HOME</Link>
            <Link to="/login">LOGIN</Link>
          </Box>
        </>
      );
    }
    

export default Navbar