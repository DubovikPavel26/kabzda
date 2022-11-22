import React, {useState} from 'react';

const UncontrillInput = () => {
    const [value, setValue] = useState('')
    return (
        <div>
        <input type="text" onChange={(e) => {
        setValue(e.currentTarget.value)
    }}/> -{value}
        </div>
)};

export default UncontrillInput;