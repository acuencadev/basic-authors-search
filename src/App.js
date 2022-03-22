import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {HomePage} from "./pages/HomePage";
import {AuthorPage} from "./pages/AuthorPage";
import {BookPage} from "./pages/BookPage";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" exact element={<HomePage />} />
                    <Route path="/author" exact element={<AuthorPage />} />
                    <Route path="/book" exact element={<BookPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
