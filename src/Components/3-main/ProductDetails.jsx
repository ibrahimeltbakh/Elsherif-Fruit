import { Box, Stack, Typography } from "@mui/material";

import PropTypes from "prop-types";
import { useState } from "react";

export default function ProductDetails({ selectedProduct }) {
  const [selsetedImg, setSelectedImag] = useState(selectedProduct.img0);
  return (
    <Stack
      direction={"row"}
      sx={{
        gap: 3,
        alignItems: "center",
        flexDirection: { xs: "column", sm: "row" },
        minWidth: { sm: "100%", lg: "90%" },
      }}>
      <Box>
        <img width={300}
        height={250} src={selsetedImg} alt={selectedProduct.productTitle} />
      </Box>
      <Box
        sx={{
          textAlign: { xs: "center", sm: "right" },
          maxWidth: "55%",
          padding: "10px",
        }}>
        <Typography
          variant="h4"
          sx={{
            textTransform: "uppercase",
            fontSize: { sm: "24px", md: "34px" },
            color: "var(--main-color)",
          }}>
          {selectedProduct.productTitle}
        </Typography>

        <Typography
          sx={{
            color: "#000",
            my: 3,
            textAlign: { xs: "center", sm: "right" },
            overflowWrap: "break-word",
          }}>
          {selectedProduct.productDescription}
        </Typography>
        <Stack
          direction={"row"}
          flexWrap={"wrap"}
          justifyContent={{ xs: "center", sm: "right" }}>
          {[
            selectedProduct.img0,
            selectedProduct.img1,
            selectedProduct.img2,
            selectedProduct.img3,
          ].map((imgSrc, index) => {
            return (
              imgSrc && (
                <Box key={index}>
                  <img
                    onClick={() => {
                      setSelectedImag(imgSrc);
                    }}
                    width={100}
                    src={imgSrc}
                    alt={selectedProduct.productTitle}
                    style={{ marginLeft: "10px" }}
                  />
                </Box>
              )
            );
          })}
        </Stack>
      </Box>
    </Stack>
  );
}

ProductDetails.propTypes = {
  selectedProduct: PropTypes.shape({
    // Ensure selectedProduct is an object with required properties
    productTitle: PropTypes.string.isRequired,
    productDescription: PropTypes.string.isRequired,
    img0: PropTypes.string,
    img1: PropTypes.string,
    img2: PropTypes.string,
    img3: PropTypes.string,
  }).isRequired,
};
