import React, {ChangeEvent, useState} from 'react';

const Input = () => {
    const [value, setValue] = useState('')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    return <input type="text" value={value} onChange={onChangeHandler}/>;
};

export default Input;