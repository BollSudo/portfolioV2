import { IconoirProvider } from "iconoir-react";
import Navbar from "./sections/Navbar.jsx";
import { AppProvider } from "./context/AppContext.jsx";
import Home from "./pages/Home.jsx";
import Project from "./pages/Project.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./sections/Footer.jsx";
import ScrollToTop from "./util/ScrollToTop.jsx";

const App = () => {
    return (
        <IconoirProvider
            iconProps={{
                color: "#AAAAAA",
                strokeWidth: 1,
                width: "2em",
                height: "2em",
            }}
        >
            <AppProvider>
                <Router>
                    <ScrollToTop />
                    <Navbar />
                    <main className="mx-auto overflow-x-hidden">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/project/:projectId" element={<Project />} />
                        </Routes>
                    </main>
                    <Footer />
                </Router>
            </AppProvider>
        </IconoirProvider>
    );
};

export default App;
