
import './App.css';
import Portfolio from "./pages/portfolio";
import Carousel from "./components/carousels/carousel";
import NavigationMenu from "./components/navigation/navMenu";

function App() {
    return (
        <div>
            < NavigationMenu/>
            < Portfolio/>
            < Carousel/>
        </div>
    )
        ;
}

export default App;
