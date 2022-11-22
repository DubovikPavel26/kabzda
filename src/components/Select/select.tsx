import React, {useState} from 'react';
import s from "./select.module.css"

type ItemsType = {
    title: string
    value: any
}
type selectPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemsType[]
}

const Select = (props: selectPropsType) => {
    const [active, setActive] = useState(false)
    const [hover, setHover] = useState(props.value)
    const hoveredItem = props.items.find(i => i.value === hover)
    const selectedItem = props.items.find(i => i.value === props.value)

    const onClickSpanHandler = () => {
        setActive(!active)
    }
    const OnItemClick = (value: any) => {
        props.onChange(value) ;
        onClickSpanHandler()
    }
    return (
        <div className={s.select + " " + s.active}>
            <span className={s.main} onClick={onClickSpanHandler}>{selectedItem && selectedItem.title}</span>
            <div className={s.items}>
                {active && props.items.map(el => <div onMouseEnter={() => {setHover(el.value)}} className={s.item + " " + (hoveredItem === el ? s.selected : "")} key={el.value} onClick={() => {OnItemClick(el.value)}}>{el.title}</div>)}
            </div>
        </div>
    );
};

export default Select;