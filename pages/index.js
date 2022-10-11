import React from 'react';
import Link from 'next/link';

const Homepage = () => {
  return (
    <>
      <h1>This Is Our Homepage</h1>{' '}
      <ul>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/clients">Clients</Link>
        </li>
      </ul>
    </>
  );
};

export default Homepage;
