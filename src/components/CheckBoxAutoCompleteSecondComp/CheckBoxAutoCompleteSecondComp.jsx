import React from 'react'
import { Form } from 'react-bootstrap';
import { Picky } from 'react-picky';
import "./CheckBoxAutoCompleteSecondComp.scss"

const alergy_information = [{ name: "Egg", image:"zzzzz" }, { name: "Milk", image:"zzzzz" }, { name: "Celery", image:"zzzzz" }, { name: "Mustard", image:"zzzzz" }, { name: "Lupin", image:"zzzzz" }, { name: "Nuts", image:"zzzzz" }, { name: "Peanuts", image:"zzzzz" }, { name: "Sesame", image:"zzzzz" }, { name: "Molluscs", image:"zzzzz" }, { name: "Crustaceans", image:"zzzzz" }, { name: "Fish", image:"zzzzz" }, { name: "Cereals (Wheat)", image:"zzzzz" }, { name: "Soya", image:"zzzzz" }, { name: "Sulphur dioxide", image:"zzzzz" }];
const CheckBoxAutoCompleteSecondComp = ({ placeholder,clearAll, labelKey = "name", valueKey = "_id", options, value, onChangeData, className = "" }) => {
   
    return (
        <React.Fragment>
        <Picky
            buttonProps={{
                className: 'testing'
            }}
            placeholder={placeholder}
            numberDisplayed={1}
            options={options}
            labelKey={labelKey}
            valueKey={valueKey}
            multiple={true}
            includeFilter={false}
            includeSelectAll={false}
            value={value}
            onChange={onChangeData}
            className={`filterdropdown ${className}`}
            render={({
                style,
                isSelected,
                item,
                selectValue,
                labelKey,
                valueKey,
                multiple,
            }) => {
                return (
                    <div className="filter-listcheck">
                        {/* {JSON.stringify(item) } */}
                        {/* {isSelected?
                       <div className="clearall-link">
                       <button onClick={clearAll}>
                           Clear all
                       </button>
                   </div>
                        :null} */}
                        <Form>
                                <div key={`custom-inline-${item._id}`} className="mb-2">
                                    <Form.Check
                                        key={item._id} // required
                                        onChange={() => selectValue(item)}
                                        custom
                                        inline
                                        checked={isSelected}
                                        label={item.name}
                                        className="filterdrop-checkbox"
                                        type="checkbox"
                                        id={item._id}
                                    />
                                    
                                </div>
                           
                        </Form>
                    </div>
                );
            }}
        />
        {/* {JSON.stringify(options)} */}
        </React.Fragment>
    )
}

export default CheckBoxAutoCompleteSecondComp;
