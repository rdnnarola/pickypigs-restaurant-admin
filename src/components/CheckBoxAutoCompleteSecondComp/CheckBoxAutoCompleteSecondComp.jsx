import React from 'react'
import { Form } from 'react-bootstrap';
import { Picky } from 'react-picky';
import "./CheckBoxAutoCompleteSecondComp.scss"

const CheckBoxAutoCompleteSecondComp = ({ placeholder,clearAll, labelKey = "name", valueKey = "_id", options, value, onChangeData, className = "" }) => {
   
    return (
        <React.Fragment>
        <Picky
            buttonProps={{
                className: 'testing'
            }}
            placeholder={placeholder}
            numberDisplayed={0}
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
                    <div className="filter-listcheck" key={`custom-inline-${item._id}`}>
                  
                        <Form>
                                <div  className="mb-2">
                                    <Form.Check
                                        key={item._id} // required
                                        onChange={() => selectValue(item._id)}
                                        custom
                                        inline
                                        checked={value&&value.indexOf(item._id) !== -1}
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
