import { useState } from 'react'

const EventComponent: React.FC = () => {
    const onChange = (event: React.ChangeEvent<HTMLInputElement> | undefined) => {
        console.log(event?.target.value);
    }

    const onDragStart = (e: React.DragEvent<HTMLDivElement> | undefined) => {
        console.log(`The onDragStart event contains: ${e?.movementX} & ${e?.movementY}`);
    }

    return (
        <div>
            Event Component: 
            <input onChange = {onChange} />
            <div draggable onDragStart={onDragStart}>Drag me!</div>
        </div>
    )
}

export default EventComponent