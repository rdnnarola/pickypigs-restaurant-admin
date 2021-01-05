import React from 'react'
import { Form } from 'react-bootstrap';
import { Picky } from 'react-picky';
import "./CheckBoxAutoCompleteComp.scss"

const CheckBoxAutoCompleteComp = ({ placeholder,clearAll, labelKey = "name", valueKey = "_id", options, value, onChangeData, className = "" }) => {
   
    return (
        <Picky
            buttonProps={{
                className: 'testing'
            }}
            placeholder={placeholder}
            numberDisplayed={2.5}
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
                        
                        {/* {isSelected?
                       <div className="clearall-link">
                       <button onClick={clearAll}>
                           Clear all
                       </button>
                   </div>
                        :null} */}
                        <Form>
                            {['checkbox'].map((type,index) => (
                                <div key={`custom-inline-${type}`} className="mb-2">
                                    <Form.Check
                                        key={item[valueKey]} // required
                                        onChange={() => selectValue(item)}
                                        custom
                                        inline
                                        checked={isSelected}
                                        label={item}
                                        className="filterdrop-checkbox"
                                        type={"checkbox"}
                                        id={item}
                                    />
                                </div>
                            ))}
                        </Form>
                    </div>
                );
            }}

           

        />
    )
}

export default CheckBoxAutoCompleteComp;
