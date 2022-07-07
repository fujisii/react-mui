import "./styles.css";
import MenuBar from "./components/atoms/menuBar";
import RecipeReviewCard from "./components/atoms/recipeReviewCard";
import BasicModal from "./components/atoms/basicModal";

export default function App() {
  return (
    <div className="App">
      <MenuBar />
      <BasicModal />
      <RecipeReviewCard />
      <RecipeReviewCard />
    </div>
  );
}
