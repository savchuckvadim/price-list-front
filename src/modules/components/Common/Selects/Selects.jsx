
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import './Selects.css';



const Selects = ({ name, items, currentValue,
    rowTarget, productType = false,
    isSmall, isAddingSecondGarantInGeneralSet = false, variant = "outlined", onSelectClick }) => {

    let ref = React.createRef()
    let current = currentValue && (currentValue.title || currentValue.name || currentValue.aprilName || currentValue.complectName || currentValue || name)



    
    
    return (
        <div className="selects__select__wrapper">
            <FormControl fullWidth size="small" variant={variant}
             background="white"
            >
                <InputLabel id="deal-contract-select-label" htmlFor={`${name}-select`}>{name}</InputLabel>
                <Select
                    size={'small'}
                    style={{ height: !isSmall ? '54px' : '37px', paddingTop: 5, border: 'none', minWidth: '100%' }}
                    // labelId={`${name}-select-label`}
                    id={`${name}-select`}
                    value={current}
                    label={name}
                    ref={ref}
                >
                    {items && items.length > 0 && items.map((item, index) => {
                        let itemName = item.title || item.name || item.aprilName || item.complectName
                        const isNoService = item.isNoService


                        return (<MenuItem key={`${index}-${item.number || itemName || item}`} onClick={(e) => {
                            e.preventDefault()
                            
                            name !== 'Тип договора' || (name === 'Тип договора' && rowTarget)
                                ?
                                onSelectClick(
                                    item.number,
                                    name,
                                    rowTarget,
                                    isAddingSecondGarantInGeneralSet,
                                    isNoService,
                                    productType

                                )
                                : onSelectClick(item.number)
                        }} className="btn" value={
                            itemName
                        }>{itemName}</MenuItem>)
                    })}
                </Select>
            </FormControl>
        </div>
    )
}

export default Selects

