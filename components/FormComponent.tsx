import React, { useState } from 'react';
import { Icon } from '@iconify/react';

const FormComponent = ({fields, submitLabel, submitButtonIcon, formTitle, onSubmitValue}:any) => {
    const [error, setError] = useState(false);
    const [userMessage, setUserMessage] = useState('Please fill in all required fields')

    const results:any = [] 
    const requiredFields:any = []

    const executeOnSubmitValue = `${onSubmitValue}`;

    function checkForm(e:any) {
        e.preventDefault();

        //error trapping
        if(requiredFields.length){
            return
        } else {
            setUserMessage('Looks good!')
            //processThisFormHere(onSubmitValue)
        }
    }
    
    fields.forEach(f => {
        if(f.type == 'text'){
            results.push(<div style={{paddingBottom: '15px'}} key={f.name}>{f.required && <span style={{color: 'red'}}> * </span>}{f.displayLabel}: <br />
                    <input type={f.type} name={f.name} required={f.required} style={{border: 'thin solid silver', borderRadius: '5px'}} placeholder={f.displayLabel} maxLength={f.length}></input>
                </div> )
            if(f.required){requiredFields.push(<p key={f.name}>{f.displayLabel}</p>)}
        }
        if(f.type == 'radio'){
            results.push(<div style={{paddingBottom: '15px'}} key={f.name}>{f.required && <span style={{color: 'red'}}> * </span>} {f.displayLabel}:
             {f.options.map((o) => (
                    <div key={o}>
                        <input type={f.type} id={o} name={f.name} value={o} defaultChecked />
                        <label htmlFor={o}> {o}</label>
                    </div>) )}
            </div> )
            if(f.required){requiredFields.push(<p key={f.name}>{f.displayLabel}</p>)}
        }
        if(f.type == 'select'){
            results.push(<div style={{paddingBottom: '15px'}} key={f.name}>{f.required && <span style={{color: 'red'}}> * </span>}<label htmlFor={f.name}>{f.displayLabel}:</label><br /> 
                <select name={f.name} style={{border: 'thin solid lightgrey', borderRadius: '5px'}} required={f.required} id={f.name} key={f.name}>
                    {f.options.map((o) => (<option key={o} value={o}>{o}</option>) )}
                </select></div> )
            if(f.required){requiredFields.push(<p key={f.name}>{f.displayLabel}</p>)}
        }
        if(f.type == 'checkbox'){
            results.push(<div style={{paddingBottom: '15px'}} key={f.name}>{f.required && <span style={{color: 'red'}}> * </span>} {f.displayLabel}: <br />
                {f.options.map((o) => (<div key={o}><input  type={f.type} required={f.required} id={o} name={f.name} value={o} /> <label htmlFor={o}> {o} </label><br></br></div>) )}
                </div> )
            if(f.required){requiredFields.push(<p key={f.name}>{f.displayLabel}</p>)}
        }
    })
    //console.log(requiredFields);

  return (
    <div>
        <div style={{border: 'thin solid silver', borderRadius: '6px', padding: '10px'}}>
        
        {requiredFields.length && <h2 className='p-2 text-red-800'>{userMessage} {requiredFields}</h2>}
        {!requiredFields.length && <h2 className='p-2 text-red-800'>{userMessage}</h2>}
            <h2>{formTitle}</h2><br />
            
            {error && <p className="text-xs text-red-500">Fields marked with <span style={{color: 'red'}}>*</span> are required - do not leave blank.</p>}
            <form>
                {results}
                <div>
                <button 
                    type="button"
                    onClick={checkForm}
                    style={{borderRadius: '5px', backgroundColor: 'black', color: 'white', padding: '5px'}}>
                       <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}> 
                            <div style={{flexBasis: '20%', textAlign: 'center', paddingRight: '10px'}}> <Icon icon="mdi-light:home" /> </div>
                            <div style={{fontSize: '15px', textAlign: 'center', paddingRight: '1px'}}> {submitLabel} </div>
                       </div>
                </button>
                </div>
            </form>
            
        </div>
    </div>
  )
}

export default FormComponent