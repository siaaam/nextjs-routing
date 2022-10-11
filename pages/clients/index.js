import React from 'react';
import Link from 'next/link';

const ClientPage = () => {
  const clients = [
    { id: 'siam', name: 'Siam' },
    {
      id: 'rocky',
      name: 'Rocky',
    },
    { id: 'raj', name: 'Raj' },
    { id: 'naruto', name: 'Naruto' },
  ];

  return (
    <div>
      <h1>The Client Page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link
              href={{
                pathname: '/clients/[id]',
                query: { id: client.id },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientPage;
