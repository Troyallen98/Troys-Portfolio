import Navigation from './Navigation.js'
import Blog from './Blog.js'
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
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact name='ian'/>} />
                    <Route path="/" element={<Home />} />{/* use exact instead of anther path */}
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
