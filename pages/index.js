import Head from 'next/head';
import styles from '../styles/Home.module.css';
import HomePage from './home';
import Script from 'next/script';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>EasyStay - Travel Effortlessly </title>
        <meta name="description" content="Generated by Syed Ali Co." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </>
  );
}