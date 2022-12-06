import * as React from 'react';  
import TextField from '@mui/material/TextField';  
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';  
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';  
import { TimePicker } from '@mui/x-date-pickers/TimePicker';  

export default function Time() {  
   const [value, setValue] = React.useState(null);  
    return (  
        
        <LocalizationProvider dateAdapter={AdapterDateFns}>
  <TimePicker
    label=""
    value={value}
    onChange={(newValue) => {
      setValue(newValue);
    }}
    renderInput={(params) => <TextField {...params} />}
  />
</LocalizationProvider> 
    );  
}  