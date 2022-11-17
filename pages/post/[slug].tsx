import React from 'react';
import { useRouter } from 'next/router';
import { useSession, signIn, signOut } from 'next-auth/react'
import { PostDetail, Categories, PostWidget, Author, Comments, CommentsForm, Loader, Footer } from '../../components';
import { getPosts, getPostDetails } from '../../services';
import Link from 'next/link'

//import { AdjacentPosts } from '../../sections';

const PostDetails = ({ post }) => {
  const {data: session} = useSession()
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <>
      <div className="container mx-auto px-10 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="col-span-1 lg:col-span-8">
          <div className='bg-white shadow-lg rounded-lg p-0 md:p-4 pb-12 mb-8'> 
              <h1 className="text-3xl font-semibold text-center cursor-pointer">{post.title} </h1>
          </div>
            <PostDetail post={post} />
            {/* <Author author={post.author} />
            <AdjacentPosts slug={post.slug} createdAt={post.createdAt} /> */}
            {session ?
            <div>
              <CommentsForm slug={post.slug} />
            </div>
            
            : 
            <div className='bg-white shadow-lg rounded-lg p-0 md:p-4 pb-12 mb-8'>
              <div className="container">
                <div className="showcase-form card grid place-items-center">
                  <Link href={`/login`}>
                      <button className="transition duration-500 ease hover:bg-indigo-900 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">
                          Login to comment
                      </button>
                  </Link>
                </div>
              </div>
            </div>  

            }
            <Comments slug={post.slug} />
          </div>
          <div className="col-span-1 lg:col-span-4">
            <div className="relative lg:sticky top-8">
              {/* <PostWidget slug={post.slug} categories={post.categories.map((category) => category.slug)} /> */}
              <Categories />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default PostDetails;

// Fetch data at build time
export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);
  return {
    props: {
      post: data,
    },
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const posts = await getPosts();
  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  };
}