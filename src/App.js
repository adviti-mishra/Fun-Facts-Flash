import { useEffect, useState } from "react";
import supabase from "./services/supabase";
import "./styles/style.css";
import Header from "./components/Header";
import NewFactForm from "./components/NewFactForm";
import CategoryFilter from "./components/CategoryFilter";
import FactsList from "./components/FactsList";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [facts, setFacts] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("all");

  useEffect(() => {
    async function getFacts() {
      let query = supabase.from("facts").select("*");
      if (currentCategory !== "all") {
        query = query.eq("category", currentCategory);
      }
      const { data: facts, error } = await query;
      if (error) {
        console.error(error);
      } else {
        setFacts(facts);
      }
    }
    getFacts();
  }, [currentCategory]);

  return (
    <>
      <Header showForm={showForm} setShowForm={setShowForm} />
      {showForm && (
        <NewFactForm setFacts={setFacts} setShowForm={setShowForm} />
      )}
      <main className="main">
        <CategoryFilter setCurrentCategory={setCurrentCategory} />
        <FactsList facts={facts} />
      </main>
    </>
  );
}

export default App;
