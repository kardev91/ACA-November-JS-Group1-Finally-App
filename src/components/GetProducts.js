import { useEffect, useState } from "react";
import { firestore } from "../configurations/firebase";
import { collection, onSnapshot } from "firebase/firestore";

 export function GetProducts() {
  const [productList, setProductList] = useState([]);
  
  useEffect(
        () =>
          onSnapshot(collection(firestore, "product_table"), (snapshot) =>
            setProductList(snapshot.docs.map((doc) => doc.data()))
          ),
        []
      );
  return productList
}


