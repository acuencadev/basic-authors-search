import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {HomePage} from "./pages/HomePage";
import {AuthorPage} from "./pages/AuthorPage";
import {BookPage} from "./pages/BookPage";
import {SearchBarComponent} from "./components/SearchBarComponent";
import {SearchPage} from "./pages/SearchPage";

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <SearchBarComponent />

                <Routes>
                    <Route path="/" element={<HomePage />}/>
                    <Route path="/search/:query" element={<SearchPage />}/>
                    <Route path="/author/:authorKey" exact element={<AuthorPage/>}/>
                    <Route path="/book/:bookKey" exact element={<BookPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
