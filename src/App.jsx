import { Outlet } from "react-router-dom";
import Header from "./Components/1-Header/Header";
import { Box, Link } from "@mui/material";
import Footer from "./Components/4-Footer/Footer";
import { useState, useEffect } from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
function App() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const pageHeight = document.documentElement.scrollHeight;
      if (window.scrollY >= pageHeight / 3) {
        setShowScrollBTN(true);
      } else {
        setShowScrollBTN(false);
      }
    });
  }, []);
  const [showScrollBTN, setShowScrollBTN] = useState("false");
  return (
    <>
      <Header />
      <Box bgcolor={"var(--background-clr)"}>
        <Outlet />
      </Box>
      <Link
        className="scroll"
        href="https://wa.me/+201025607238"
        target="_blank"
        sx={{ opacity: showScrollBTN ? "1" : "0", transition: "0.5s" }}>
        <WhatsAppIcon className="whatsApp" />
      </Link>
      <Footer />
    </>
  );
}

export default App;
