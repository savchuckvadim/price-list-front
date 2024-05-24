import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import { useEffect, useState } from "react"





const CommonSelect = ({ name, code, values, current, size, selectCallback, cleanError }) => {



    const [currentValue, setCurrentValue] = useState(current)

    const handleChange = (element) => {
        selectCallback(code, element)
    }


    useEffect(() => {
        setCurrentValue(current)
    }, [current])


    return (
        <FormControl fullWidth size={size}>
            <InputLabel id="select-label">
                {name}
            </InputLabel>
            <Select
                labelId="select-label"
                id="select"
        
                value={currentValue && (currentValue.name || currentValue.value)}
                label={currentValue && (currentValue.name || currentValue.value)}
            // onChange={handleChange}
            >
                {values.map((v, i) => <MenuItem
                    key={`common-select-item-${i}`}
                    value={v.name || v.value}
                    onClick={() => {
                        handleChange(v)
                    }}
                >{v.name || v.value}</MenuItem>)}

            </Select>
        </FormControl>
    )
}


export default CommonSelect