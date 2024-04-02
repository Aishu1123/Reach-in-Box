import React from 'react'
import { Box, Typography } from "@mui/material";
import smail from "../assets/menubarsendemail.png";
import { useSelector } from "react-redux";
const MailCard = ({ mail }) => {
    const theme = useSelector((state) => state.darkMode);
    // bgcolor: theme ? "#202022" : "#FAFAFA",
    // color: theme ? "#FAFAFA" : "#000000",
    const timestamp = "2022-02-02T05:14:00.000Z";
    const date = new Date(mail.sentAt);
    const today = new Date();
    function getRandom1Or2() {
      return Math.floor(Math.random() * 2) + 1;
    }
  
    const randomNumber = getRandom1Or2();
    console.log(randomNumber);
  
    const stat = [
      {
        status: "Meeting Booked",
        col: "#9c62e6",
        secCol: "#352f3c",
      },
      { status: "Interested", col: "#57E0A6", secCol: "#2D3833" },
    ];
    mail.status = stat[randomNumber - 1].status;
    console.log(today);
    console.log(date);
    console.log(today == date);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
  
    console.log("Day:", day);
    console.log("Month:", months[month]);
  
    return (
      <>
        <Box
          sx={{
            borderBottom: `1px solid ${theme ? "#203137" : "transparent"}`,
            paddingY: "15px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "5px",
              justifyContent: "space-between",
            }}
          >
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 500,
                lineHeight: "20px",
                textAlign: "left",
  
                color: theme ? "#FAFAFA" : "#000000",
              }}
            >
              {mail.fromEmail}
            </Typography>
  
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 400,
                textAlign: "left",
                // color: "#585858",
                color: theme ? "#FAFAFA" : "#000000",
              }}
            >
              {/* {mail.sentAt} */}
              {`${day} ${months[month]}`}
            </Typography>
          </Box>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: 400,
              paddingY: "5px",
              textAlign: "left",
              color: theme ? "#E1E0E0" : "#000000",
  
              // color: "#",
            }}
          >
            {mail.subject}
          </Typography>
          <Box sx={{ display: "flex", paddingY: "5px", gap: "10px" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                paddingX: "10px",
                height: "20px",
                padding: "3px 8px",
                gap: "3px",
                borderRadius: "17px",
                bgcolor: theme ? "#222426" : "#F0F0F0",
                color: theme ? "#FFFFFF" : "#637381",
              }}
            >
              <Box
                sx={{
                  width: "10px",
                  height: "10px",
                  margin: "3px",
                  borderRadius: "50%",
                  bgcolor: mail.col,
                }}
              ></Box>
              <Box
                sx={{
                  width: "16px",
                  height: "16px",
                  opacity: 0.5,
                  position: "absolute",
                  borderRadius: "50%",
                  bgcolor: mail.secCol,
                }}
              ></Box>
              <Typography
                sx={{
                  textWrap: "nowrap",
                  color: mail.col,
                  fontSize: "9px",
                  paddingY: "8px",
                  fontWeight: 400,
                }}
              >
                {mail.status}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                height: "20px",
                padding: "3px 8px",
                gap: "3px",
                borderRadius: "17px",
  
                bgcolor: theme ? "#222426" : "#F0F0F0",
                color: theme ? "#FFFFFF" : "#637381",
              }}
            >
              <img
                style={{ width: "15px", height: "15px" }}
                src={smail}
                alt="menubarsendemail"
              />
              <Typography
                sx={{
                  fontSize: "10px",
                  textWrap: "nowrap",
                }}
              >
                Campaign Name
              </Typography>
            </Box>
          </Box>
        </Box>
      </>
    );
  }

export default MailCard