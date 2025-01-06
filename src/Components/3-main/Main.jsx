import { Stack, Box, Typography, IconButton } from "@mui/material";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import CloseIcon from "@mui/icons-material/Close";
import ProductDetails from "./ProductDetails";
import productsApi from "./productApi";
import { motion } from "framer-motion";

export default function Main() {
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleClickOpen = (product) => {
    setSelectedProduct(product); // Set the clicked product
    setOpen(true); // Open the modal
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProduct(null); // Clear the selected product when modal closes
  };

  return (
    <Box className="sectionPadding" id="products">
      <h2 className="main-title">منتجاتنا</h2>
      <Box className="container">
        <Stack
          direction={"row"}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 2,
          }}>
          {productsApi.map((item, index) => (
            <motion.article
              layout
              initial={{ transform: "scale(0)" }}
              animate={{ transform: "scale(1)" }}
              transition={{ type: "spring", damping: 8, stiffness: 50 }}
              key={index}
              className="card">
              <Card
                sx={{
                  position: "relative",
                  maxWidth: 300,
                  mt: 4,
                  "&:hover ": {
                    border: "1px solid var(--main-color)",
                    ".MuiCardMedia-root": {
                      rotate: "1deg",
                      scale: "1.1",
                      transition: "0.3s",
                    },
                  },
                }}>
                <CardMedia
                  component="img"
                  alt={item.productTitle}
                  height="200"
                  image={item.img0}
                />
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography gutterBottom variant="h6" component="div">
                    {item.productTitle}
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                  <Button
                    onClick={() => handleClickOpen(item)}
                    sx={{
                      width: "100%",
                      textTransform: "capitalize",
                      border: "1px solid var(--main-color)",
                      borderRadius: "6px",
                      color: "var(--main-color)",
                      fontSize: "18px",
                      padding: "5px 15px ",
                      "&:hover": {
                        color: "#fff",
                        bgcolor: "var(--main-color)",
                        borderColor: "#fff",
                      },
                    }}
                    size="large">
                    تفاصيل
                  </Button>
                </CardActions>
              </Card>
            </motion.article>
          ))}
        </Stack>
        <Dialog
          sx={{
            direction: "rtl",
            ".MuiPaper-root": {
              minWidth: { xs: "100%", md: 800 },
            },
          }}
          open={open}>
          <DialogContent>
            <IconButton
              sx={{
                position: "absolute",
                top: 0,
                left: 10,
                "&:hover": {
                  color: "#D23F57",
                  rotate: "180deg",
                  transition: "0.3s",
                },
              }}
              onClick={handleClose}>
              <CloseIcon />
            </IconButton>
            {selectedProduct && (
              <ProductDetails selectedProduct={selectedProduct} />
            )}
          </DialogContent>
        </Dialog>
      </Box>
    </Box>
  );
}
