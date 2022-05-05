import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import {
  doc,
  getDocs,
  addDoc,
  updateDoc,
  query,
  where,
  collection,
  onSnapshot,
} from "firebase/firestore";
import { firestore } from "../configurations/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../configurations/firebase";
import { UserLogin } from "../helper/UserAuth";
import LoginPopUpModalForAdd from "./Modals/LoginPopUpModalForAdd";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import ProductInfoModal from "./Modals/ProductInfoModal";

const useStyles = makeStyles({
  wrapper: {
    width: "250px",
    height: "350px",
    margin: "20px 30px",
    // borderRadius: "10px",
    backgroundColor: "white",
    boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.2)",
    "&:hover": {
      transition: "all ease 0.5s",
      transform: "translateY(-5px)",
      boxShadow: "0px 10px 20px 2px rgba(0, 0, 0, 0.3)",
    },
  },
  imageWrapper: {
    width: "100%",
    height: "170px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
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
      color: "white",
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
      color: "white",
    },
  },
  added: {
    backgroundColor: "#68a346",
    color: "white",
    "&:hover": {
      backgroundColor: "#68a346",
    },
  },
  info: {
    display: "flex",
    position: "absolute",
    bottom: 5,
    right: 5,
    color: "white",
  },
});

export default function ProductCard({ product, pathName }) {
  const classes = useStyles();
  const [count, setCount] = useState(1);
  const [user, setUser] = useState(null);
  const [desabledButton, setDesabledButton] = useState(true);
  const [productIdList, setProductIdList] = useState([]);

  useEffect(() => {
    if (count === 1) {
      setDesabledButton(true);
    }
  }, [count, user]);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        const collectionRef = query(
          collection(firestore, "cart"),
          where("userId", "==", currentUser.uid)
        );
        onSnapshot(collectionRef, (querySnapshot) => {
          setProductIdList(querySnapshot.docs.map((doc) => doc.data().id));
        });
      }
    });
  }, []);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const addProduct = async (e, item) => {
    console.log(item.id, "from product");
    e.target.innerHTML = "Added!";
    e.target.classList.add(classes.added);
    const user = auth.currentUser;
    if (!productIdList.includes(item.id)) {
      const collectionQuery = query(
        collection(firestore, "products"),
        where("id", "==", item.id)
      );
      const docs = await getDocs(collectionQuery);
      if (docs.docs.length === 0) {
        console.log(item.id, "after add");
        await addDoc(collection(firestore, "cart"), {
          userId: user.uid,
          name: item.name,
          image: item.image,
          id: item.id,
          price: item.price,
          count,
        });
      }
    } else {
      const docUpdate = await getDocs(
        query(
          collection(firestore, "cart"),
          where("id", "==", item.id),
          where("userId", "==", user.uid)
        )
      );
      await updateDoc(doc(firestore, "cart", docUpdate.docs[0].id), {
        count,
      });
    }
    setTimeout(() => {
      e.target.innerHTML = "Add";
      e.target.classList.remove(classes.added);
    }, 1000);
  };

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

        <ProductInfoModal product={product}/>
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
        <LoginPopUpModalForAdd pathName={pathName}/>
      ) : (
        <button
          className={classes.orderButton}
          onClick={(e) => addProduct(e, product)}
        >
          Add
        </button>
      )}
    </div>
  );
}