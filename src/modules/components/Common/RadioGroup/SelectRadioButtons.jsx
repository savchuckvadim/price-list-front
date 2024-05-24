import React from 'react';
import { ButtonGroup, Button, FormGroup, Label, Input } from 'reactstrap';
import './SelectRadioButtons.scss';

const SelectRadioButtons = ({
    isHorizontal, name, values, currentId, errorMessage,
    selectCallback, cleanError
}) => {

    const onChangeHandler = (itemId) => {
        selectCallback(itemId);
    };

    return (
        <div className='radio__wrapper'>
            <FormGroup>
                <div className="radio__label">
                    {!errorMessage
                        ? <Label for="radio-buttons-group">{name}</Label>
                        : <p className='error'>{errorMessage}</p>
                    }
                </div>
                <FormGroup check
                className='d-flex flex-column  col-12'
                >
                    {values.map(v => (
                        <Label check>
                            <Input
                             className='col-12 h-10'
                                type="checkbox"
                                id="flexCheckDefault"
                                // color='black'
                                checked={currentId == v.id}
                                onChange={(e) => {
                                    // e.preventDefault();
                                    onChangeHandler(v.id);
                                }}
                            />
                            {v.title || v.value}
                        </Label>
                    ))}
                   
                </FormGroup>
                {/* {<ButtonGroup vertical={!isHorizontal}>
                    {values.map(v => (
                        <Button
                            key={`global-radio-${name}-${v.id}`}
                            color={v.id === currentId ? "primary" : "secondary"}
                            onClick={(e) => {
                                e.preventDefault();
                                onChangeHandler(v.id);
                            }}
                        >
                            {v.title || v.value}
                        </Button>
                    ))}
                </ButtonGroup>} */}
            </FormGroup>
        </div>
    );
};

export default SelectRadioButtons;
