import { container } from "assets/jss/material-kit-react.jsx";

import image from "assets/img/sign.jpg";

const contactStyle = {
  container,
  cardHeader: {
    width: "auto",
    textAlign: "center",
    marginLeft: "20px",
    marginRight: "20px",
    marginTop: "-40px",
    padding: "20px 0",
    marginBottom: "15px"
  },
  cardBody: {
    textAlign: "center",
    margin: "auto",
  },
  cardBodyRow: {
    display: "flex",
    alignItems: "center",
  },
  icons: {
    width: "17px",
    height: "17px",
    color: "#FFFFFF"
  },
  cardBodyRowData: {
    marginLeft: "5px",
  },
  section: {
    marginTop: "50px",
    minHeight: "110vh",
    maxHeight: "1600px",
    overflow: "hidden",
    padding: "70px 0",
    backgroundPosition: "top center",
    backgroundSize: "cover",
    margin: "0",
    border: "0",
    display: "flex",
    alignItems: "center",
    backgroundImage: "url(" + image + ")"
  },
};

export default contactStyle;
