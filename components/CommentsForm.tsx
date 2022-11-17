import React, { useState, useEffect } from 'react';
import { submitComment, publishComment } from '../services';
import { useRouter } from 'next/router';

const CommentsForm = ({ slug }) => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', comment: '', storeData: false });
  const [returnedId, setReturnedId] = useState('')

  const router = useRouter();

  useEffect(() => {
    setLocalStorage(window.localStorage);
    const initalFormData = {
      name: window.localStorage.getItem('name'),
      email: window.localStorage.getItem('email'),
      storeData: window.localStorage.getItem('name') || window.localStorage.getItem('email'),
    };
    setFormData(initalFormData);
  }, []);

  useEffect(() => {
    console.log(returnedId)
    publishComment(returnedId) 
  },[returnedId]);

  const onInputChange = (e) => {
    const { target } = e;
    if (target.type === 'checkbox') {
      setFormData((prevState) => ({
        ...prevState,
        [target.name]: target.checked,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [target.name]: target.value,
      }));
    }
  };

  const handlePostSubmission = () => {
    const naughtyList = ['shit','piss','fuck','cunt','bitch','asshole','whore'];

    for(let i=0; i < naughtyList.length; i++){
      if(formData.comment.includes(naughtyList[i]) == true){
        setErrorMessage(`Your comment contains a naughty word ("${naughtyList[i]}"). Please remedy your language and try again.`);
        setShowErrorMessage(true);
        return;
      }
    }

    for(let i=0; i < naughtyList.length; i++){
      if(formData.name.includes(naughtyList[i]) == true){
        setErrorMessage(`The name you are using contains a naughty word ("${naughtyList[i]}"). Please remedy your language and try again.`);
        setShowErrorMessage(true);
        return;
      }
    }

    for(let i=0; i < naughtyList.length; i++){
      if(formData.email.includes(naughtyList[i]) == true){
        setErrorMessage(`The email you are using contains a naughty word ("${naughtyList[i]}"). Please remedy your language and try again.`);
        setShowErrorMessage(true);
        return;
      }
    }

    if(!formData.email.includes('@')){
      setErrorMessage(`Your email address is not properly formatted. Please fix and try again.`);
      setShowErrorMessage(true);
      return;
    }

 
    setError(false);
    const { name, email, comment, storeData } = formData;
    if (!name || !email || !comment) {
      setError(true);
      return;
    }
    const commentObj = {
      name,
      email,
      comment,
      slug
    };

    if (storeData) {
      localStorage.setItem('name', name);
      localStorage.setItem('email', email);
    } else {
      localStorage.removeItem('name');
      localStorage.removeItem('email');
    }

    submitComment(commentObj)
      .then((res) => {
        if (res.createComment) {
          if (!storeData) {
            formData.name = '';
            formData.email = '';
          }
          formData.comment = '';
          setFormData((prevState) => ({
            ...prevState,
            ...formData,
          }));
          setShowSuccessMessage(true);
          setErrorMessage(null)
          setShowErrorMessage(false)
          setTimeout(() => {
            setShowSuccessMessage(false);
            router.reload()
          }, 6000);
          
          setReturnedId(res.createComment.id)
          publishComment(res.createComment.id)
        }
      });
      
      //publishComment(returnedId)  
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-8 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-2">Leave a comment....</h3>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea 
            value={formData.comment} 
            onChange={onInputChange} 
            className="p-4 outline-none w-full rounded-lg h-40 focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" 
            name="comment" 
            placeholder="Comment" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <input 
            type="text" 
            value={formData.name} 
            onChange={onInputChange} 
            className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" 
            placeholder="Name" 
            name="name" />
        <input 
            type="email" 
            value={formData.email} 
            onChange={onInputChange} 
            className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" 
            placeholder="Email" 
            name="email" />
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div>
          <input checked={formData.storeData} onChange={onInputChange} type="checkbox" id="storeData" name="storeData" value="true" />
          <label className="text-gray-500 cursor-pointer" htmlFor="storeData"> &nbsp; Save my name, email in this browser for the next time I comment.</label>
        </div>
      </div>
      {error && <p className="text-xs text-red-500">All fields are required.</p>}
      {showErrorMessage && <span className="text-xs text-red-500">{errorMessage}</span>}
      {showSuccessMessage && <span className="text-xs text-green-500">Comment submitted for approval, give it a minute....</span>}
      <div className="mt-8">
        <button 
            type="button" 
            onClick={handlePostSubmission} 
            className="transition duration-500 ease hover:bg-indigo-900 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">
                Post Comment
            </button>
        {/*  */}
        
      </div>
    </div>
  );
};

export default CommentsForm;