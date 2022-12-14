import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { getCategories } from '../services';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-2 font-semibold border-b pb-4">Blog Categories</h3>
      {categories.map((category, index) => (
        
      // @ts-ignore
        <Link key={index} href={`/blog/${category.slug}`}>
      // @ts-ignore
          <span className={`cursor-pointer block ${(index === categories.length - 1) ? 'border-b-0' : 'border-b'} pb-1 mb-3`}>{category.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;