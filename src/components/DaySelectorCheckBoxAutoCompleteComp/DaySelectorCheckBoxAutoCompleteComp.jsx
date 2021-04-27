import React from 'react'
import { Form } from 'react-bootstrap';
import { Picky } from 'react-picky';
import "./DaySelectorCheckBoxAutoCompleteComp.scss"

const DaySelectorCheckBoxAutoCompleteComp = ({ placeholder,clearAll, labelKey = "name", valueKey = "_myId", options, value, onChangeData, className = "" }) => {
   
    return (
        <Picky
            id="picky"
            buttonProps={{
                className: 'testing text-capitalize'
            }}
            placeholder={placeholder}
            numberDisplayed={2.5}
            options={options}
            labelKey="label"
            valueKey="value"
            multiple={true}
            includeFilter={false}
            includeSelectAll={true}
            value={value}
            onChange={onChangeData}
            className={`DaySelectorCheckBoxAutoCompleteComp ${className}`}
            renderSelectAll={({
                filtered,
                tabIndex,
                allSelected,
                toggleSelectAll,
                multiple,
              }) => {
                // Don't show if single select or items have been filtered.
                if (multiple && !filtered) {
                  return (
                    // <div
                      
                    // >
                    //     <input type="checkbox" tabIndex={tabIndex}
                    //   role="option"
                    //   checked={allSelected ? true:false}
                    //   className={allSelected ? 'option selected filter-listcheck' : 'option filter-listcheck'}
                    //   onClick={toggleSelectAll}
                    //   onKeyPress={toggleSelectAll}/>
                    //     select{JSON.stringify(allSelected)}
                    //      </div>

                     <div className="filter-listcheck">
                        
                      
                     
                        <Form>
                            <div className="mb-2 ml-2">
                                <Form.Check
                                    key={"selectr_all"} // required
                                    className={allSelected ? 'option selected filter-listcheck' : 'option filter-listcheck'}
                                    onClick={toggleSelectAll}
                                    onKeyPress={toggleSelectAll}
                                    custom
                                    inline
                                    checked={allSelected=="all"?true:false}
                                    label={"Select All"}
                                    className="filterdrop-checkbox text-capitalize"
                                    type={"checkbox"}
                                    id={"My_select_all"}
                                />
                            </div>
                        </Form>
                    </div>
                   
                  );
                }
              }}
            render={({
                style,
                isSelected,
                item,
                selectValue,
                tabIndex,
                valueKey,
                multiple,
                allSelected,
                toggleSelectAll,
                filtered
            }) => {
                return (
                    <React.Fragment key={`custom-inline-${item}`}>
                        
                    <div className="filter-listcheck">
                        
                        {/* {isSelected?
                            <div className="clearall-link">
                                <button onClick={clearAll}>
                                    Clear all
                                </button>
                            </div>
                        :
                            null
                        } */}
                     
                        <Form>
                            <div className="mb-2">
                                <Form.Check
                                    key={item} // required
                                    onChange={() => selectValue(item)}
                                    custom
                                    inline
                                    checked={isSelected}
                                    label={item}
                                    className="filterdrop-checkbox text-capitalize"
                                    type={"checkbox"}
                                    id={item}
                                />
                            </div>
                        </Form>
                    </div>
                    </React.Fragment>
                );
            }}

           

        />
    )
}

export default DaySelectorCheckBoxAutoCompleteComp;
