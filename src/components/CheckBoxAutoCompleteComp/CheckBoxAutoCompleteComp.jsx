/* eslint-disable no-use-before-define */

import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const options = ['Option 1', 'Option 2','Option 3', 'Option 4','Option 5', 'Option 6','Option 7', 'Option 8'];


  
export default function CheckBoxAutoCompleteComp() {
    const [value, setValue] = React.useState();
  const [inputValue, setInputValue] = React.useState('');
  return (
      <>
    <Autocomplete
      multiple
      limitTags={1}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      id="checkboxes-tags-demo"
      options={options}
      disableCloseOnSelect
      getOptionLabel={(option) => option}
      renderOption={(option, { selected }) => (
        <React.Fragment>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option}
        </React.Fragment>
      )}
      style={{ width: 300 }}
      renderInput={(params) => (
        <TextField {...params} variant="outlined" placeholder="select" />
      )}
    />
    </>
  );
}

