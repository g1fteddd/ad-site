import React, { useCallback, useState } from "react";
import TextField from "../../common/TextField";
import styles from "./PriceRange.module.scss";

import { useAppDispatch } from "../../../redux/store";
import { setPriceFrom, setPriceTo } from "../../../redux/filters/slice";
import debounce from "lodash.debounce";
const PriceRange: React.FC = React.memo(() => {
    const dispatch = useAppDispatch();
    const [valuePriceFrom, setValuePriceFrom] = useState<number | null>(null);
    const [valuePriceTo, setValuePriceTo] = useState<number | null>(null);

    const updatePriceFrom = useCallback(
        debounce((num: number) => dispatch(setPriceFrom(num)), 350),
        []
    );

    const updatePriceTo = useCallback(
        debounce((num: number) => dispatch(setPriceTo(num)), 350),
        []
    );

    const handleChangePriceFrom = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValuePriceFrom(Number(e.target.value));
        updatePriceFrom(Number(e.target.value));
    };

    const handleChangePriceTo = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValuePriceTo(Number(e.target.value));

        updatePriceTo(Number(e.target.value));
    };

    console.log(valuePriceFrom);
    return (
        <div className={styles["price-range"]}>
            <p className="label">Цена, ₽</p>
            <div className={styles["wrapper"]}>
                <TextField
                    value={valuePriceFrom || ""}
                    onChange={handleChangePriceFrom}
                    type="number"
                    placeholder="цена, от"
                />
                <TextField
                    value={valuePriceTo || ""}
                    onChange={handleChangePriceTo}
                    type="number"
                    placeholder="цена, до"
                />
            </div>
        </div>
    );
});

export default PriceRange;
