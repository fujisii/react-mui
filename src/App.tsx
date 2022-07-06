import "./styles.css";
import MenuBar from "./components/atoms/menuBar";
import RecipeReviewCard from "./components/atoms/recipeReviewCard";

export default function App() {
  return (
    <div className="App">
      <MenuBar />
      <RecipeReviewCard />
      <RecipeReviewCard />
    </div>
  );
}
