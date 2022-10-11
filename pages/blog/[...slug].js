// catch all path [...pathName]

import React from 'react';
import { useRouter } from 'next/router';

const BlogPostPage = () => {
  const router = useRouter();
  console.log(router.query);

  return <h1>BlogPostPage</h1>;
};

export default BlogPostPage;
