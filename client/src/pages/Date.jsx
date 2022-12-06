import * as React from 'react';  
import TextField from '@mui/material/TextField';  
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';  
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';  
import { DatePicker } from '@mui/x-date-pickers/DatePicker';  

export default function Date(props) {
   const [value, setValue] = React.useState(null);  
    return (  
        
      <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label=""
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
          props.updateDate(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider> 
    );  
}  