import "./App.css";
import MyForm from "./components/MyForm";

function App() {
  return (
    <div className="App">
      <h1>Formularios</h1>
      <MyForm
        user={{
          name: "Valdemar",
          email: "valdemarnanon@gmail.com",
          bio: "Sou um programador",
          role: "admin",
        }}
      />
    </div>
  );
}
export default App;
