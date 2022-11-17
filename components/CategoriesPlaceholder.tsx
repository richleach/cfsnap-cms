import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const CategoriesPlaceholder = () => {

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-2 font-semibold border-b pb-4">Blog Categories</h3><span className="cursor-pointer block border-b pb-1 mb-3">Web Development</span><span className="cursor-pointer block border-b pb-1 mb-3">CSS</span><span className="cursor-pointer block border-b pb-1 mb-3">AWS Certification</span><span className="cursor-pointer block border-b-0 pb-1 mb-3">Ask Rich</span>
    </div>
  );
};

export default CategoriesPlaceholder;