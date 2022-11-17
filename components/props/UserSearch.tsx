import { useState } from 'react'

const UserSearch: React.FC = () => {

    const users = [
        {name:'Rich', age:53},
        {name:'Tom', age:28},
        {name:'Sal', age:49},
        {name:'Kelly', age:41}
    ]

    const [name, setName] = useState('');
    const [user, setUser] = useState<{name:string; age:number} | undefined>();

    const onClick = () => {
        const foundUser = users.find((user) => {
            return user.name === name
        });
        setUser(foundUser)
    }

    return (
        <div>
            User Search <input value={name} onChange={(e) => setName(e.target.value)} />
            <button style={{border: 'thin solid grey', borderRadius: '3px', padding: '2px', marginLeft: '5px'}} onClick={onClick}>Search</button><br /><br />

            <div>
                {user?.name} is now {user?.age}
            </div>
        </div>
    )
}

export default UserSearch