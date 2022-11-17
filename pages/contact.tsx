import { useState, useRef } from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {Categories, PostWidget, PostCard, Header } from '../components/'
import Footer from '../components/Footer'
import { getPosts} from '../services'
import emailjs from 'emailjs-com';

const Contact: NextPage = ({}) => {
    const [userMessage, setUserMessage] = useState('How Can I Help?')
    const nameInputRef = useRef()
    const emailInputRef = useRef()
    const messageInputRef = useRef()

    function sendEmail(e) {
        e.preventDefault();
       
        if(e.target.name ==''){
            setUserMessage('Better add a value in the name field!')
            return false;
        }
        if(e.target.email == ''){
            setUserMessage('Better add a value in the email field!')
            return false;
        }
 
        if(e.target.message == ''){
            setUserMessage('Better add a value in the message field!')
            return false;
        }

        const enteredName = nameInputRef.current.value
        const enteredEmail = emailInputRef.current.value
        const enteredMessage = messageInputRef.current.value

        const reqBody = {name: enteredName, email: enteredEmail, message: enteredMessage}

        emailjs.sendForm('service_ai3shen', 'template_xf5cfim', e.target, 'user_NzVHH8XcaOSaLyWhK0FwL')
        .then(function(response) {
           console.log('SUCCESS!', response.status, response.text);
           setUserMessage('Thank you, message sent.');
        }, function(error) {
           console.log('FAILED...', error);
        });
      }


  return (
    <div className="container mx-auto px-10 mb-8">

      <Head>
        <title>cfsnap.com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='grid grid-cols-1 md:grid-cols-12 gap-12'>
        <div className='sm:col-span-8 col-span-1'>
            
          <div className='bg-white shadow-lg rounded-lg p-0 md:p-4 pb-12 mb-8'> 
            <h3 className="text-3xl font-semibold cursor-pointer">Contact </h3>
          </div>

          <div className='bg-white shadow-lg rounded-lg p-0 md:p-4 pb-12 mb-8'>
          <div className="container">
            <div className="showcase-form card">
                    {userMessage && <h2 className='p-2'>{userMessage}</h2>}
                    <form onSubmit={sendEmail}>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                            <input type="hidden" name="form-name" value="contact" />
                            <div className="form-control">
                                <input type="text" name="name" placeholder="* Name" required ref={nameInputRef} className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" />
                            </div>
                            <div className="form-control">
                                <input type="email" name="email" placeholder="* Email" required ref={emailInputRef} className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" />
                            </div>
                        </div>    
                        <div className="grid grid-cols-1 gap-4 mb-4">
                            <div className="form-control">
                                <textarea name="message" required placeholder="* Enter your message here." className="p-4 outline-none w-full rounded-lg h-40 focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" ref={messageInputRef}>
                                    
                                </textarea>
                            </div>
                        </div>
                        <div className="mt-8">
                            <input type="submit" value="Send" className="transition duration-500 ease hover:bg-indigo-900 inline-block bg-blue-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer"/>
                        </div>
                    </form>
                </div>
            </div> 
          </div>
          
        </div>
        <div className='sm:col-span-4 col-span-1'>
            <div className='sm:sticky relative top-8'>
              <Categories />
              {/* <PostWidget /> */}
            </div>
        </div>
        
      </div>
      
      <Footer />
      
    </div>
  )
}

export default Contact
