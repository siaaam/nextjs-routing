import React from 'react';
import { useRouter } from 'next/router';

const SelectedClientProjectPage = () => {
  const router = useRouter();

  console.log(router.query);
  return <h1>This is individual SelectedClientProjectPage</h1>;
};

export default SelectedClientProjectPage;
