import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import { doc, setDoc, deleteDoc } from "firebase/firestore";
import { firestore } from "../configurations/firebase";

const useStyles = makeStyles({
  wrapper: {
    width: "1000px",
    height: "150px",
    margin: "20px 0",
    borderRadius: "20px",
    backgroundColor: "#fffaf2",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageWrapper: {
    width: "25%",
    height: "150px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "90%",
    height: "90%",
    borderRadius: "20px",
  },
  productCount: {
    width: "20%",
    height: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "60px",
    height: "30px",
    borderRadius: "20px",
    border: "none",
    backgroundColor: "#f5ebdc",
    cursor: "pointer",
    fontSize: "25px",
    "&:hover": {
      backgroundColor: "#e2d5c0",
    },
  },
  name: {
    fontSize: "25px",
    margin: "0",
    width: '200px'
  },
  price: {
    fontSize: "20px",
    margin: "10px 0",
    width: '150px'
  },
  count: {
    width: "80px",
    height: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "20px",
  },
  totalPrice:{
    fontSize: "20px",
    margin: "10px 0",
    width: '150px'
  },
  deleteButton: {
    width: "80px",
    height: "30px",
    borderRadius: "20px",
    border: "none",
    backgroundColor: "#f5ebdc",
    cursor: "pointer",
    fontSize: "15px",
    marginRight: '10px',
    "&:hover": {
      backgroundColor: "#e2d5c0",
    },
  },
});

export default function ProductCardForCart({product}) {
  const classes = useStyles();
  const [count, setCount] = useState(product.count);
  const [desabledButton, setDesabledButton] = useState(false);
  const [price, setPrice] = useState(product.price)

  useEffect(() => {
    setPrice(count * product.price)
    if (count === 1) {
      setDesabledButton(true);
    }
    
    setDoc(doc(firestore, 'cart', product.id), {
        ...product,
        count: count
      })
  }, [count, price, product, desabledButton]);

  const deleteProduct = (item) => {
    deleteDoc(doc(firestore, 'cart', product.id))
  }

  const countEncreaser = () => {
    setCount(count + 1);
    if (count >= 1) {
      setDesabledButton(false);
    }
  };
  const countDecreaser = () => {
    setCount(count - 1);
  };


  return (
    <div className={classes.wrapper}>
      <div className={classes.imageWrapper}>
        <img className={classes.image} alt='b' src={product.image} />
      </div>
      <div><p className={classes.name}>{product.name}</p></div>
      <div><p className={classes.price}>{product.price} AMD</p></div>
      <div className={classes.productCount}>
        <button
          onClick={countDecreaser}
          className={classes.button}
          disabled={desabledButton}
        >
          -
        </button>
        <div className={classes.count}>
          <p>{count}</p>
        </div>
        <button onClick={countEncreaser} className={classes.button}>
          +
        </button>
      </div>
      <div>
            <p className={classes.totalPrice}>{price} AMD</p>
        </div>
      <button
        className={classes.deleteButton}
        onClick={() => deleteProduct(product)}
      >
        Delete
      </button>
    </div>
  );
}
