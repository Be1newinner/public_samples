import "./css/responsive.css";
import "./css/style.css";
import "./css/vendor.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Property from "./components/property";
import AvilableProperty from "./components/availavbe-property";
import PropertiesByCity from "./components/properties-by-city";
import RecentProperties from "./components/recent-properties";
import PropertyDetails from "./components/property-details";
import About from "./components/about";
import Advisor from "./components/advisor";
import Pricing from "./components/pricing";
import UserList from "./components/user-list";
import Error from "./components/error";
import Faq from "./components/faq";
import News from "./components/news";
import NewsDetails from "./components/news-details";
import Contact from "./components/contact";
import SearchMap from "./components/search-map";
import SearchGrid from "./components/search-grid";
import AddNew from "./components/add-property";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property" element={<Property />} />
        <Route path="/availavbe-property" element={<AvilableProperty />} />
        <Route path="/properties-by-city" element={<PropertiesByCity />} />
        <Route path="/recent-properties" element={<RecentProperties />} />
        <Route path="/property-details" element={<PropertyDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/advisor" element={<Advisor />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/user-list" element={<UserList />} />
        <Route path="/error" element={<Error />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/news" element={<News />} />
        <Route path="/news-details" element={<NewsDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/search-map" element={<SearchMap />} />
        <Route path="/search-grid" element={<SearchGrid />} />
        <Route path="/add-property" element={<AddNew />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
