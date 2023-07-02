import React, { useState } from "react";
import PriceRange from "./components/ui/PriceRange";
import Button from "./components/common/Button";
import AdList from "./components/ui/AdList";
import AdCategories from "./components/ui/AdCategories";
import AdSort from "./components/ui/AdSort";
import AdFavorites from "./components/ui/AdFavorites";

const App: React.FC = () => {
    const [isFavorites, setFavorites] = useState(false);
    return (
        <div className="content">
            <div className={`filters ${isFavorites ? "disabled" : ""}`}>
                <AdCategories />
                <PriceRange />
            </div>
            <div className="result">
                <h2 className="title">Результаты</h2>

                <div className="wrapper">
                    <AdSort />
                    <Button onClick={() => setFavorites(!isFavorites)}>
                        {isFavorites ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-heart-fill"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-heart"
                                viewBox="0 0 16 16"
                            >
                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                            </svg>
                        )}

                        <p>Показать избранные</p>
                    </Button>
                </div>

                {isFavorites ? <AdFavorites /> : <AdList />}
            </div>
        </div>
    );
};

export default App;
