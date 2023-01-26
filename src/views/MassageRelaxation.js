import Header from "../components/header/Header";
import { MassageRatesIndivudual } from "../components/products/massage-rates/MassageRates";
import Footer from "../components/footer/Footer";
import React, { useRef } from "react";
import SercviceArea from "../components/service-area/ServiceArea";
import PageLoader from "../components/page-loader/PageLoader";
import PVRelaxation from "../components/product-viewer/PVRelaxation";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { green } from "@mui/material/colors";
const theme = createTheme({
  palette: {
    primary: {
      main: green[900],
    },
  },
});

export default function MassageRelaxation() {
  const myRef = useRef(null);
  // function startScroll() {
  //   myRef.current.scrollIntoView();
  // }

  return (
    <ThemeProvider theme={theme}>
      <div className="text-light-sky relative bg-gray-50">
        <PageLoader></PageLoader>
        <Header></Header>
        <PVRelaxation></PVRelaxation>

        <MassageRatesIndivudual
          myRef={myRef}
          index={["sports", "shiatsu", "chair"]}
        ></MassageRatesIndivudual>
        <SercviceArea></SercviceArea>
        <Footer></Footer>
      </div>
    </ThemeProvider>
  );
}
