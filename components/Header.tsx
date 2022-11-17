import {useContext, useEffect, useState} from 'react';
import Link from 'next/link';

import { getCategories } from '../services';

const Header = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories().then((newCategories) => {
        setCategories(newCategories);
        });
    }, []);

    return (
      <div className='container mx-auto px-10 mb-8'>
        <div className='border-b w-full inline-block border-blue-900 py-8'>
            <div className='md:float-left block '>
                <Link href='/'>
                    <h3 className='cursor-pointer text-5xl font-bold text-blue-900 hit-the-floor'>
                        cfsnap
                    </h3>
                </Link>
            </div>
            <div className='md:float-left md:contents block'>
                {/* {categories.map((category) => (
                    <Link key={category.name} href={`/category/${category.slug}`}>
                       <span className='md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer'>
                            {category.name}
                        </span> 
                    </Link>
                ))} */}
                <Link href={`/contact/`}>
                    <span className='md:float-right mt-2 align-middle text-blue-900 ml-4 font-semibold cursor-pointer'>
                        Contact
                    </span> 
                </Link>
                
                    <span className='md:float-right mt-2 align-middle text-blue-900 ml-4 font-semibold cursor-pointer'>
                        Portfolio
                    </span> 
                
                    <span className='md:float-right mt-2 align-middle text-blue-900 ml-4 font-semibold cursor-pointer'>
                        CSS
                    </span> 
                
                    <span className='md:float-right mt-2 align-middle text-blue-900 ml-4 font-semibold cursor-pointer'>
                        Javascript
                    </span> 
                
                    <span className='md:float-right mt-2 align-middle text-blue-900 ml-4 font-semibold cursor-pointer'>
                        React
                    </span> 
                
                <Link href={`/blog/`}>
                    <span className='md:float-right mt-2 align-middle text-blue-900 ml-4 font-semibold cursor-pointer'>
                    Blog
                    </span> 
                </Link>
            </div>
        </div>
      </div>
    )
  }
  
  export default Header

  //drop-shadow-lg shadow-black  style={{ color: 'white', 'WebkitTextStrokeWidth': .2, 'WebkitTextStrokeColor': 'navy' }}