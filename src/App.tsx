import React from "react";
import SelectField from "./components/common/SelectField";
import PriceRange from "./components/ui/PriceRange";
import Categories from "./components/common/Categories";
import Button from "./components/common/Button";

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
                <SelectField />
                <PriceRange />
                <SelectField />
                <Categories />
                <Button />
            </div>
            <div className="result">
                <h2>Результаты</h2>
                <div className="sort">
                    <p className="label">Показать сначала:</p>
                    <ul className="sort-list">
                        <li>Популярные</li>
                        <li>Дешёвые</li>
                        <li>Новые</li>
                    </ul>
                </div>
                <div className="favorites">Показать избранные</div>
                <ul className="ad-list">
                    <li>
                        <img src="" alt="Картинка" />
                        <p>Название</p>
                        <p>Цена</p>
                        <p>Месторасположение</p>
                        <p>публикации</p>
                    </li>
                    <li>
                        <img src="" alt="Картинка" />
                        <p>Название</p>
                        <p>Цена</p>
                        <p>Месторасположение</p>
                        <p>публикации</p>
                    </li>
                    <li>
                        <img src="" alt="Картинка" />
                        <p>Название</p>
                        <p>Цена</p>
                        <p>Месторасположение</p>
                        <p>публикации</p>
                    </li>
                    <li>
                        <img src="" alt="Картинка" />
                        <p>Название</p>
                        <p>Цена</p>
                        <p>Месторасположение</p>
                        <p>публикации</p>
                    </li>
                    <li>
                        <img src="" alt="Картинка" />
                        <p>Название</p>
                        <p>Цена</p>
                        <p>Месторасположение</p>
                        <p>публикации</p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default App;
