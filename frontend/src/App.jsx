import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { IngredientsList, RecipesList } from "./components";

function App() {
  const ingredients = [{ greeting: "hi" }];
  return (
    <Router>
      <h1>Now We're Cookin'</h1>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <IngredientsList ingredients={ingredients} />
              <RecipesList recipes={recipes} />
            </>
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
