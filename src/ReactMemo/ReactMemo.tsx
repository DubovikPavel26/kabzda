import React, {useState} from 'react';

type CounterPropsType = {
    count: number
}

type UsersPropsType = {
    users: Array<string>
}

const Counter = (props: CounterPropsType) => {
    return (
        <div>
            {props.count}
        </div>
    )
}

const UsersSecret = (props: UsersPropsType) => {
    return (
        <div>
            {props.users.map((el, index) => <div key={index}>{el}</div>)}
        </div>
    )
}

const Users = React.memo(UsersSecret)

const ReactMemo = () => {
    const [counter, setCounter] = useState(2)
    const [users, setUsers] = useState(["Pasha", "Dima", "Sasha"])
    const onClickHandkerCount = () => {
        setCounter(counter + 1)
    }

    const onClickHandkerUser = () => {
       setUsers([...users, 'Sveta'])
    }
    return (
        <div>
            <button onClick={onClickHandkerCount}>+ count</button>
            <button onClick={onClickHandkerUser}>+ user</button>
            <Counter count={counter}/>
            <Users users={users}/>
        </div>
    );
};

export default ReactMemo;