import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  info: {
    display: "flex",
    position: "absolute",
    bottom: 5,
    right: 5,
    color: "white",
    cursor: "pointer",
    opacity: "70%",
  },
  container: {
    width: "700px",
    height: "250px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  imageWrapper: {
    width: "250px",
    height: "200px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "auto",
  },
  infoWrapper: {
    width: "400px",
    height: "200px",
    marginLeft: "20px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  name: {
    fontSize: "25px",
    margin: "0 0 15px 0",
    fontWeight: "bold",
  },
  priceTitle: {
    fontSize: "15px",
    margin: "0",
  },
  price: {
    fontSize: "15px",
    fontWeight: "bold",
    margin: "5px 0",
  },
  ingridientsTitle: {
    fontSize: "15px",
    margin: "0",
    marginTop: "20px",
  },
  ingridients: {
    fontSize: "15px",
    fontWeight: "bold",
    margin: "5px 0",
  },
});

export default function ProductInfoModal({ product }) {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  return (
    <>
      <InfoOutlinedIcon
        className={classes.info}
        onClick={() => setOpen(true)}
      />
      <Modal open={open} onClose={() => setOpen(false)} center>
        <div className={classes.container}>
          <div className={classes.imageWrapper}>
            <img className={classes.image} alt={product.name} src={product.image} />
          </div>
          <div className={classes.infoWrapper}>
            <p className={classes.name}>{product.name}</p>
            <p className={classes.priceTitle}>Price</p>
            <p className={classes.price}>{product.price} AMD</p>
            <p className={classes.ingridientsTitle}>Ingridients</p>
            <p className={classes.ingridients}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
}
