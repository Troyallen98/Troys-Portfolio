import Navigation from './Navigation.js'
import Onboardingblog from './Onboardingblog.js'
import Frontendblog from './Frontendblog.js'
import Backendblog from './Backendblog.js'
import Reactblog from './Reactblog.js'
import Projects from './Projects.js'
import Contact from './Contact.js'
import Home from './Home.js'

import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";


function App() {

    return (
        <BrowserRouter>
            <Navigation />
            <Routes>
                <Route path="/">
                    <Route path="/onboarding" element={<Onboardingblog />} />
                    <Route path="/Frontend" element={<Frontendblog />} />
                    <Route path="/Backend" element={<Backendblog />} />
                    <Route path="/react" element={<Reactblog />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact name='ian'/>} />
                    <Route path="/" element={<Home />} />{/* use exact instead of anther path */}
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
