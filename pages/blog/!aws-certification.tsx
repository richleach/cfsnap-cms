import React, { useState, useEffect } from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {Categories, PostWidget, PostCard, Header } from '../../components'
import Footer from '../../components/Footer'
import { getPosts} from '../../services'

import { getCategories } from '../../services';


const AWSCertification: NextPage = ({posts}) => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
    getCategories().then((newCategories) => {
        setCategories(newCategories);
    });
    }, []);

  return (
    <div className="container mx-auto px-10 mb-8">

      <Head>
        <title>cfsnap.com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='grid grid-cols-1 md:grid-cols-12 gap-12'>
        <div className='sm:col-span-8 col-span-1'>
          <div className='bg-white shadow-lg rounded-lg p-0 md:p-4 pb-12 mb-8'>
            <Link href={`/blog/`}>
                <h3 className="text-3xl font-semibold border-b pb-2 cursor-pointer">AWS Certification</h3>
            </Link>
          </div>
          {categories.map((category, index) => (
        <Link key={index} href={`/category/${category.slug}`}>
          <span className={`cursor-pointer block ${(index === categories.length - 1) ? 'border-b-0' : 'border-b'} pb-3 mb-3`}>{category.name}</span>
        </Link>
      ))}
        </div>
        <div className='sm:col-span-4 col-span-1'>
            <div className='sm:sticky relative top-8'>
              <Categories />
              <PostWidget />
            </div>
        </div>
        
      </div>
      
      <Footer />
      
    </div>
  )
};

export default AWSCertification