import CartButton from './CartButton'
import headerImage from "../../assets/Header image.jpg";
import classes from "./Header.module.css";
const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>MealHouse</h1>
     <CartButton />
      </header>
      <div className={classes["main-image"]}>
        <img style={{height:"411px"}}src={headerImage} alt="A table full of delicious food!" />
      </div>
    </>
  );
};

export default Header;