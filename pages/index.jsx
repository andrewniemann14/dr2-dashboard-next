// npm run dev  => localhost:3000


import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

// this should really redirect to profile/[dynamic] if there's a username in the cookie jar
// or at least make a possible redirect predominant on this page

// TODO:
// challenge/[id].jsx
// just a DataGrid of the challenge

// TODO:
// challenge/current.jsx
// show best times per vehicle for current challenge's stage+class

// https://stackoverflow.com/questions/61927604/pass-custom-prop-or-data-to-next-js-link-component


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>DR2.0 Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Link href={"/profile/8ourne"} >My page</Link>
      <br />
      <Link href={"/current"}>Today`s challenges</Link>

    </div>
  )
}

