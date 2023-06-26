import React from "react";
import PriceRange from "./components/ui/PriceRange";
import Categories from "./components/common/Categories";
import Button from "./components/common/Button";
import AdList from "./components/ui/AdList";
import AdCategories from "./components/ui/AdCategories";
import AdSort from "./components/ui/AdSort";
import Pagination from "./components/ui/Pagination";

const App: React.FC = () => {
    // const options = [
    //     { value: "all", label: "Все" },
    //     { value: "property", label: "Недвижимость" },
    //     { value: "cameras", label: "Фотоаппараты" },
    //     { value: "cars", label: "Автомобили" },
    // ];
    return (
        <div className="content">
            <div className="filters">
                <AdCategories />
                <PriceRange />
            </div>
            <div className="result">
                <h2 className="title">Результаты</h2>

                <div className="wrapper">
                    <AdSort />
                    <Button>Показать избранные</Button>
                </div>

                <AdList />
                <Pagination />
            </div>
        </div>
    );
};

export default App;
