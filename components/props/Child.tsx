interface ChildProps {
    color: string;
    children?: React.ReactNode;
    onClick: () => void;
}

export const Child = ({color, onClick}: ChildProps) => {
    return (
        <div>
            <p>I am Child component, my color is: {color}</p>
            <button onClick={onClick}>Click Me</button>
        </div>
    )
}


export const ChildAsFC: React.FC<ChildProps> = ({color, onClick}) => {
    return (
        <div>This is ChildAsFC
            {color}<br />
            <button onClick={onClick}>Click Me</button>
        </div>
    )
} 
