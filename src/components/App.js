import Navigation from './Navigation.js'
import Blog from './Blog.js'
import Projects from './Projects.js'
import About from './About.js'
import Home from './Home.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";


function App() {
    return (
        // <div className="App">
        //   <Blog />
        // </div>

        <BrowserRouter>
            <Navigation />
            <Routes>
                <Route path="/">
                    <Route path="blog" element={<Blog />} />
                    <Route path="projects" element={<Projects />} />
                    <Route path="about" element={<About />} />
                    <Route path="/" element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
