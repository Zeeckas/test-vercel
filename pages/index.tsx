import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'

const buttonClassName = 'px-4 py-3 text-semibold bg-gray-100'

function Counter() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <button className={buttonClassName} onClick={() => setCount(count + 1)}>
        INCREMENT
      </button>
      <pre>{count}</pre>
      <button
        className={buttonClassName}
        onClick={() => setCount(count > 0 ? count - 1 : count)}
      >
        DECREMENT
      </button>
    </div>
  )
}
const Home: NextPage = () => {
  return (
    <main className="grid gap-4 p-5">
      <pre>Hello Hackers!!!!</pre>
      <Counter />
    </main>
  )
}

export default Home
