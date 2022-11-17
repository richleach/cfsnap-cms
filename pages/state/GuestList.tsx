import { useState } from 'react';
import EventComponent from '../../components/props/EventComponent';
import UserSearch from '../../components/props/UserSearch';

const GuestList: React.FC = () => {
    const [name, setName] = useState('')
    const [guests, setGuests] = useState<string[]>([])

    const onClick = () => {
        setGuests([...guests, name])
        setName('') 
    }

    

   return (
    <div>
        <h3>Guest List</h3>
        <UserSearch />
        <ul>
            {guests && guests.map((guest) => (
                <li key={guest}>{guest}</li>
            ))
            }
        </ul>
        
        <input value={name} onChange={(e) => {setName(e.target.value)}} style={{border: 'thin solid grey', borderRadius: '3px'}}/>
        <button style={{border: 'thin solid grey', borderRadius: '3px', padding: '2px', marginLeft: '5px'}} onClick={onClick}>Add Guest</button><br /><br />
        <EventComponent />
    </div>
   ) 
}

export default GuestList