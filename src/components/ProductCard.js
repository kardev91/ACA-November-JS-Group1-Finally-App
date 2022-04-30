import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import {doc, setDoc} from 'firebase/firestore'
import {firestore} from '../configurations/firebase'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../configurations/firebase";
import { UserLogin } from "../helper/UserAuth";
import LoginPopUpModalForAdd from "./Modals/LoginPopUpModalForAdd";



const useStyles = makeStyles({
  wrapper: {
    width: "250px",
    height: "350px",
    margin: "20px 30px",
    // borderRadius: "10px",
    backgroundColor: 'white',
    boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.2)',
    '&:hover': {
      transition: "all ease 0.5s",
      transform: "translateY(-5px)",
      boxShadow: '0px 10px 20px 2px rgba(0, 0, 0, 0.3)'
    }
  },
  imageWrapper: {
    width: "100%",
    height: "170px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    // borderRadius: "10px",
  },
  productCount: {
    width: "100%",
    height: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "80px",
    height: "30px",
    borderRadius: "20px",
    border: "none",
    backgroundColor: "rgb(239, 239, 239)",
    cursor: "pointer",
    fontSize: "25px",
    "&:hover": {
      backgroundColor: "#ffc836",
      color: 'white'
    },
  },
  name: {
    fontSize: "25px",
    margin: "10px",
  },
  price: {
    fontSize: "15px",
    margin: "10px 0",
  },
  count: {
    width: "60px",
    height: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "20px",
  },
  orderButton: {
    width: "120px",
    height: "30px",
    borderRadius: "20px",
    border: "none",
    backgroundColor: "rgb(239, 239, 239)",
    cursor: "pointer",
    fontSize: "15px",
    marginTop: "5px",
    "&:hover": {
      backgroundColor: "#ffc836",
      color: 'white'
    }
  },
  added: {
    backgroundColor: '#68a346',
    color: 'white',
    '&:hover': {
      backgroundColor: '#68a346',
    }
  }
});

export default function ProductCard({ product }) {
  const classes = useStyles();
  const [count, setCount] = useState(1);
  const [user, setUser] = useState(null);
  const [desabledButton, setDesabledButton] = useState(true); 

  useEffect(() => {
    if (count === 1) {
      setDesabledButton(true);
    }
  }, [count,user]);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  
  const addProduct = (e,item) => {
    
    e.target.innerHTML = 'Added!'
    e.target.classList.add(classes.added)
    setDoc(doc(firestore, 'cart', item.id), {
      ...item,
      count: count
    })
    setTimeout(()=> {
      e.target.innerHTML = 'Add'
      e.target.classList.remove(classes.added)

    }, 1000)
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
        <img className={classes.image} src={product.image} />
      </div>
      <p className={classes.name}>{product.name}</p>
      <p className={classes.price}>{product.price} AMD</p>
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
      {!user ? (
        <LoginPopUpModalForAdd />
      ) : (
        <button className={classes.orderButton} onClick={(e) => addProduct(e,product)}>Add</button>
      )}
      
      
    </div>
  );
}