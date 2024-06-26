import Head from 'next/head'
import Podcasts from '../components/Podcasts'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Juan P. Romano - Podcasts</title>
      </Head>
    <Podcasts />
    </div>
  )
}
