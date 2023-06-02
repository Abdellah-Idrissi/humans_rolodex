import { useState , useEffect } from 'react'
import SearchBox from './components/search-box-component'
import HumansList from './components/humans-list-component'

function App() {

  let [humans , setHumans] = useState([])
  let [searchValue , setSearchValue] = useState('')

  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(fetchedHumans => setHumans(fetchedHumans))
  },[])

  let filterOnChange = (event)=> {
    let typedValue = event.target.value.toLocaleLowerCase()
    setSearchValue(typedValue)
  }

  let filteredHumans = humans.filter(humans=> {
    return humans.name.toLocaleLowerCase().includes(searchValue)
  })


  return (
    <div className="">
      <h1 className='text-[#0ccac4] font-["Bigelow_Rules"] text-[75px] sm:text-[100px]'>Humans Rolodex</h1>
      <SearchBox placeholder='search humans' filterOnChange={filterOnChange}/>
      <HumansList humans={filteredHumans}/>
    </div>
  )
}

export default App
