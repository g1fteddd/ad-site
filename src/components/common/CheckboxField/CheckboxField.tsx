import React from "react";

const CheckboxField: React.FC = () => {
    return (
        <div>
            <input type="checkbox" id="scales" name="scales" checked />
            <label htmlFor="scales">Scales</label>
        </div>
    );
};

export default CheckboxField;
