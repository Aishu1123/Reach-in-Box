import { Box } from "@mui/material";

import { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import { useSelector,useDispatch } from "react-redux";
import MenuItem from "../Components/MenuItem";
import HeadPart from "../Components/HeadPart";
import MailPage from "../Components/MailPage";
import FirstPage from "../Components/FirstPage";


function HOME() {
  // const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const mails = useSelector((state) => state.mails);
  const state = useSelector((state) => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  useEffect(() => {
    const getMails = async () => {
      const isLoggedIn = localStorage.getItem("isLoggedIn");
      console.log("REDIRECT:", isLoggedIn);
      if (!isLoggedIn) {
        navigate("/google-login");
        return;
      }
      const tok = localStorage.getItem("token");
      const res = await fetch(
        "https://hiring.reachinbox.xyz/api/v1/onebox/list",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${tok}`,
          },
        }
      );
      const mails = await res.json();
      console.log(mails);
      dispatch({ type: "MAILS", payload: mails.data });
    };
    getMails();
  }, []);
  const location = useLocation();
  const token = location.search.substring(7);
  localStorage.setItem("token", token);
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <MenuItem/>

        <Box
          sx={{
            display: "flex",
            left: "56px",
            flexDirection: "column",
            position: "relative",
            width: "95.5%",
          }}
        >
          <HeadPart />
          {mails.length > 0 ?<MailPage /> : <FirstPage />}
        </Box>
      </Box>
    </>
  );
}

export default HOME;