import styles from './MyCountries.module.css'
// here countries is an array here 
const MyCountries = ({countries}) => {
    // console.log(countries[0].name.common)
    // {
    //     countries.map((country)=>{
    //         console.log(country.name.common)
    //     })
    // }
  return (
    <div className={styles.countriestable}>
        <div className={styles.innertable}>
            <div className={styles.column}>
                <h1>Name</h1>
                {
                    countries.map((country)=><p>{country.name.common}</p>)
                }
            </div>
            <div className={styles.column}>
                <h1>Area</h1>
                {
                    countries.map((country)=><p>{country.area}</p>)
                }
            </div>
            <div className={styles.column}>
                <h1>Population</h1>
                {
                    countries.map((country)=><p>{country.population}</p>)
                }
            </div>
        </div>
    </div>
  )
}

export default MyCountries