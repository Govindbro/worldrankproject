import styles from './MyCountries.module.css'
import { useState } from 'react'
import Searchcss from './Search.module.css'
// get our fontawesome imports
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// here countries is an array here 
const MyCountries = ({countries}) => {
    // for searching purpose 
    const [keyword,setKeyword]=useState('');
    const [mycountry,Setmycountry]=useState(countries);
    const [nameflag,Setnameflag]=useState(0);
    const [areaflag,Setareaflag]=useState(0);
    const [populationflag,Setpopulationflag]=useState(0);

    // makeing a funtion for sorting the population 

    const orderpop=(countries)=>{
        Setareaflag(0);
        Setnameflag(0);
        if(populationflag==0){
            // we have to use the rest operator to copy the array 
            let data=[...countries].sort((a,b)=>(a.population<b.population?1:-1))
            Setpopulationflag(1);
            return Setmycountry(data);
        }
        if(populationflag==1){
            // we have to use the rest operator to copy the array 
            let data=[...countries].sort((a,b)=>(a.population>b.population?1:-1))
            Setpopulationflag(0);
            return Setmycountry(data);
        }
    }
    const ordername=(countries)=>{
        Setareaflag(0);
        Setpopulationflag(0);
        if(nameflag==0){
            // we have to use the rest operator to copy the array 
            let data=[...countries].sort((a,b)=>(a.name.common<b.name.common?1:-1))
            Setnameflag(1);
            return Setmycountry(data);
        }
        if(nameflag==1){
            // we have to use the rest operator to copy the array 
            let data=[...countries].sort((a,b)=>(a.name.common>b.name.common?1:-1))
            Setnameflag(0);
            return Setmycountry(data);
        }
    }
    const orderarea=(countries)=>{
        Setpopulationflag(0);
        Setnameflag(0);
        if(areaflag==0){
            // we have to use the rest operator to copy the array 
            let data=[...countries].sort((a,b)=>(a.area<b.area?1:-1))
            Setareaflag(1);
            return Setmycountry(data);
        }
        if(areaflag==1){
            // we have to use the rest operator to copy the array 
            let data=[...countries].sort((a,b)=>(a.area>b.area?1:-1))
            Setareaflag(0);
            return Setmycountry(data);
        }
    }
    // console.log(countries[0].name.common)
    // {
    //     countries.map((country)=>{
    //         console.log(country.name.common)
    //     })
    // }
//   return (
//     <div className={styles.countriestable}>
//         <div className={styles.innertable}>
//             <div className={styles.column}>
//                 <h1>Name</h1>
//                 {
//                     countries.map((country)=><p>{country.name.common}</p>)
//                 }
//             </div>
//             <div className={styles.column}>
//                 <h1>Area</h1>
//                 {
//                     countries.map((country)=><p>{country.area}</p>)
//                 }
//             </div>
//             <div className={styles.column}>
//                 <h1>Population</h1>
//                 {
//                     countries.map((country)=><p>{country.population}</p>)
//                 }
//             </div>
//         </div>
//     </div>
//   )
    const handleInputchange=(event)=>{
        setKeyword(event.target.value.toLowerCase());
        Setmycountry(countries.filter(country=>country.name.common.toLowerCase().includes(keyword)));
    }
    return (
        <div className={styles.countrytable_outer}>
         <div className={Searchcss.container}>
           <div className={Searchcss.searchbar}>
                <FontAwesomeIcon icon={faSearch}/>
                <input placeholder="Search any Place" onChange={(e)=>handleInputchange(e)}/>
           </div>
            
        </div>
            <div className={styles.countrytable_inner}>
                <div className={styles.head}>
                    <button onClick={()=>ordername(countries)}>Name {
                        nameflag==0?<i className={`${styles.arrow} ${styles.down}`}></i>:<i className={`${styles.arrow} ${styles.up}`}></i>
                    }</button>
                    <button>Flags </button>
                    <button onClick={()=>orderpop(countries)}>Population {
                        populationflag==0?<i className={`${styles.arrow} ${styles.down}`}></i>:<i className={`${styles.arrow} ${styles.up}`}></i>
                    }</button>
                    <button onClick={()=>orderarea(countries)}>Area {
                        areaflag==0?<i className={`${styles.arrow} ${styles.down}`}></i>:<i className={`${styles.arrow} ${styles.up}`}></i>
                    }</button>
                </div>
                <div  className={styles.content}>
                {mycountry.length==0?<h1>No Country of this name!! </h1>:<div>
                    {mycountry.map((country)=>
                       <div key={country.flags.png} className={styles.country_row}>
                       <div><p>{country.name.common}</p></div>
                        <div className={styles.country_flag}><img src={country.flags.png}></img></div>
                        <div><p>{country.population}</p></div>
                        <div><p>{country.area}</p></div>
                       </div>
                    )}
                </div>}
                
                </div>
            </div>
        </div>
    )
}

export default MyCountries