import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import Head from 'next/head'
import {Categories, PostWidget, PostCard, Header } from '../components/'
import Footer from '../components/Footer'

const login = () => {
    const {data: session} = useSession()
    return(
        <div className="container mx-auto px-10 mb-8">

        <Head>
            <title>cfsnap.com</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className='grid grid-cols-1 md:grid-cols-12 gap-12'>
        <div className='sm:col-span-8 col-span-1'>
            
          <div className='bg-white shadow-lg rounded-lg p-0 md:p-4 pb-12 mb-8'> 
            <h3 className="text-3xl font-semibold cursor-pointer">Login </h3>
          </div>

          <div className='bg-white shadow-lg rounded-lg p-0 md:p-4 pb-12 mb-8'>
            <div className="container">
                <div className="showcase-form card">
                    {session ? 
                
                        <div>
                            <p>Welcome {session?.user.name}</p> <img src={session.user.image} style={{borderRadius: '50px'}} /><br />
                            <button 
                                className="transition duration-500 ease hover:bg-indigo-900 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer"
                                onClick={() => signOut()}>
                                Sign out
                            </button>

                        </div>
                        
                    :
                        
                        <div>
                            <p>Please login.</p><br />
                            <button
                                className="transition duration-500 ease hover:bg-indigo-900 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer" 
                                onClick={() => signIn()}>
                                    Sign in
                            </button> 
                        </div>
                        
                    }
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

export default login