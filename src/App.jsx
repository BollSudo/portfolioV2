
import {IconoirProvider} from "iconoir-react";
import Hero from "./sections/Hero.jsx";
import Navbar from "./sections/Navbar.jsx";

const App = () => {
    return (
        <IconoirProvider
            iconProps={{
                color: '#AAAAAA',
                strokeWidth: 1,
                width: '2em',
                height: '2em',
            }}
        >
        <main className="max-w-7xl mx-auto">
            <Navbar />
            <Hero />
            <div id="about" className="h-screen">test</div>
        </main>
        </IconoirProvider>
    )
}

export default App;
