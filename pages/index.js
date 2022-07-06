import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import MyCountries from '../Components/MyCountries'

// for api fetching 
export const getStaticProps=async()=>{
  const res= await fetch("https://restcountries.com/v3.1/all")
  const data= await res.json();
  // const mydata=await res.json();

  return{
    // props:{data:mydata}
    props:{data}
  }
}

export default function Home({data}) {
  // console.log(data)
  return (
    <div>
      <h1 className={styles.heading}>World Ranks</h1>
      <MyCountries countries={data}/>
    </div>
  )
}
