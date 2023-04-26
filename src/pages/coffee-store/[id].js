import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'

const CoffeStore = () => {

  const router = useRouter();

  return (
    <div>
      <h1>Coffe Store Page{router.query.id}</h1>
      <Link href="/">Back to home</Link>
    </div>
  )
}

export default CoffeStore;
