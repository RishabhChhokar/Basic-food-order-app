import classes1 from "./MenuList.module.css";
import classes2 from "./MenuSummary.module.css";

const Meals = () => {//Main Component to export
  return (
    <>
      <MealsSummary />
      <MenuList />
    </>
  );
};
/////////////////////////////////////////////////////////////////////////////////////
const MealsSummary = () => {
  return (
    <section className={classes2.summary}>
      <h2>Delicious Food, Delivered To You</h2>
      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </section>
  );
};
//////////////////////////////////////////////////////////////////////////////////////
const PRESET_MEALS = [
  {
    id: "m1",
    name: "Saahi Paneer",
    description: "Panner masala curry with rice and naan.",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Aloo Paratha",
    description: "Crispy aloo partha served with butter.",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Butter Chicken",
    description: "Delicious Butter Chicken served with rice.",
    price: 12.99,
  },
];

const MenuList = () => {
  const mealsList = PRESET_MEALS.map((meal) => <li>{meal.name}</li>);

  return (
    <section className={classes1.meals}>
      <ul>{mealsList}</ul>
    </section>
  );
};



export default Meals;
