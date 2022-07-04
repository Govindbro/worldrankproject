import Searchcss from './Search.module.css'

const Search = () => {
  return (
    <div>
        <div className={Searchcss.container}>
            <input placeholder="Search any Place"/>
            <button>Search</button>
        </div>
    </div>
  )
}

export default Search