import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  wrapper: {
    width: "300px",
    height: "400px",
    margin: "20px 35px",
    borderRadius: "20px",
    backgroundColor: "#fffaf2",
  },
  imageWrapper: {
    width: "100%",
    height: "220px",
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
    backgroundColor: "#f5ebdc",
    cursor: "pointer",
    fontSize: "25px",
    "&:hover": {
      backgroundColor: "#e2d5c0",
    },
  },
  name: {
    fontSize: "30px",
    margin: "0",
  },
  price: {
    fontSize: "20px",
    margin: "10px 0",
  },
  count: {
    width: "100px",
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
    backgroundColor: "#f5ebdc",
    cursor: "pointer",
    fontSize: "15px",
    marginTop: "5px",
    "&:hover": {
      backgroundColor: "#e2d5c0",
    },
  },
});

export default function ProductCard({ product }) {
  const classes = useStyles();
  const [count, setCount] = useState(1);
  const [desabledButton, setDesabledButton] = useState(true);

  useEffect(() => {
    if (count === 1) {
      setDesabledButton(true);
    }
  }, [count]);

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
      <button className={classes.orderButton}>Add</button>
    </div>
  );
}

// import React,{useState} from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import clsx from "clsx";
// import Card from "@material-ui/core/Card";
// import CardHeader from "@material-ui/core/CardHeader";
// import CardMedia from "@material-ui/core/CardMedia";
// import CardContent from "@material-ui/core/CardContent";
// import CardActions from "@material-ui/core/CardActions";
// import Collapse from "@material-ui/core/Collapse";
// import IconButton from "@material-ui/core/IconButton";
// import Typography from "@material-ui/core/Typography";
// import { red } from "@material-ui/core/colors";
// import FavoriteIcon from "@material-ui/icons/Favorite";
// import ShareIcon from "@material-ui/icons/Share";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import MoreVertIcon from "@material-ui/icons/MoreVert";

// const useStyles = makeStyles((theme) => ({
//     root: {
//       maxWidth: 345,
//       margin:'30px',
//       display:'inline-block',
//       marginRight: 10
//     },
//     media: {
//       height: 0,
//       paddingTop: "56.25%"
//     },
//     expand: {
//       transform: "rotate(0deg)",
//       marginLeft: "auto",
//       transition: theme.transitions.create("transform", {
//         duration: theme.transitions.duration.shortest,
//       }),
//     },
//     expandOpen: {
//       transform: "rotate(180deg)",
//     },
//     avatar: {
//       backgroundColor: red[500],
//     },
//   }));

//   function ProductCard({product}) {
//     const classes = useStyles();
//     const [expanded, setExpanded] = useState(false);

//     const handleExpandClick = () => {
//       setExpanded(!expanded);
//     };

//       return (
//         <Card className={classes.root}>
//         <CardHeader
//           action={
//             <IconButton aria-label="settings">
//               <MoreVertIcon />
//             </IconButton>
//           }
//           title={product.name}
//         />
//         <CardMedia
//           className={classes.media}
//           image={product.image}
//           title="Paella dish"
//         />
//         <CardContent>
//           <Typography variant="body2" color="textSecondary" component="p">
//             This impressive paella is a perfect party dish and a fun meal to
//             cook together with your guests. Add 1 cup of frozen peas along with
//             the mussels, if you like.
//           </Typography>
//         </CardContent>
//         <CardActions disableSpacing>
//           <IconButton aria-label="add to favorites">
//             <FavoriteIcon />
//           </IconButton>
//           <IconButton aria-label="share">
//             <ShareIcon />
//           </IconButton>
//           <IconButton
//             className={clsx(classes.expand, {
//               [classes.expandOpen]: expanded,
//             })}
//             onClick={handleExpandClick}
//             aria-expanded={expanded}
//             aria-label="show more"
//           >
//             <ExpandMoreIcon />
//           </IconButton>
//         </CardActions>
//         <Collapse in={expanded} timeout="auto" unmountOnExit>
//           <CardContent>
//             <Typography paragraph>Բաղադրություն</Typography>
//             <Typography paragraph>
//             {product.description}
//             </Typography>
//           </CardContent>
//         </Collapse>
//       </Card>
//       )
//   }

//   export default ProductCard
