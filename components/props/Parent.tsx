import { Child } from './Child'

const Parent = () => {
    return (
        <div>
            <p>I am the Parent component.</p>
           <div> &nbsp; <Child color='blue' onClick={() => console.log('I am the onClick method that was passed as a prop')} /></div> 
        </div>
        
    )
}

export default Parent