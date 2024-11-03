// Components
import FistComponent from './components/FistComponents';
import TemplateEpressions from './components/TemplateExpressions';
import MyComponent from './components/MyComponent';
import Events from './components/Events';
import Challenge from './components/Challenge';


// styles / CSS
import './App.css';

export default function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <FistComponent />
      <TemplateEpressions />
      <MyComponent />
      <Events />
      <Challenge />
    </div>
  );
}