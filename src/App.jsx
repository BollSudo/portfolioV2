import {Navbar} from "./sections/Navbar.jsx";
import {IconoirProvider} from "iconoir-react";

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
        </main>
        </IconoirProvider>
    )
}

export default App;
