import React from 'react'
// import noMailIllustration from "../assets/noMailIllustration.png";
import { Box } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import DisplayMail from './DisplayMail';
import LeadDetails from './LeadDetails';
import FirstPage from './FirstPage';
import MailInbox from './MailInbox';
const MailPage = () => {
    const [mails, setMails] = useState(true);
    const theme = useSelector((state) => state.darkMode);
    return (
      <>
        {mails ? (
          <Box
          sx={{
            display: "flex",
            
            height: "1100px",
            bgcolor: theme ? "#000000" : "#FAFAFA",
            color: theme ? "#FAFAFA" : "#000000",
          }}
        >
            <MailInbox />
            <Box
              sx={{
                height: "100%",
                width: "1px",
                borderRight: `1px solid ${!theme ? "#DFE3E8" : "#262A2F"}`,
              }}
            ></Box>
            <DisplayMail />
  
            <LeadDetails />
          </Box>
        ) : (
          <FirstPage />
        )}
      </>
    );
  }

export default MailPage