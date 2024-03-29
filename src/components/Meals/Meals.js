import classes1 from "./MenuList.module.css";
import classes2 from "./MenuSummary.module.css";
import Card from "../UI/Card"
import MealsList from "./MealsList/MealsList"
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
    price: 500
  },
  {
    id: "m2",
    name: "Aloo Paratha",
    description: "Crispy aloo partha served with butter.",
    price: 300
  },
  {
    id: "m3",
    name: "Butter Chicken",
    description: "Delicious Butter Chicken served with rice.",
    price: 600
  },
];

const MenuList = () => {
  const mealsList = PRESET_MEALS.map((meal) => (
    <MealsList
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes1.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};



export default Meals;
