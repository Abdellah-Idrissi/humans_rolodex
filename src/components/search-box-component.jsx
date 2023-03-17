
const SearchBox = ({placeholder , filterOnChange}) => {
  return (
    <div>
      <input type="search" className="text-[14px] p-3 mt-3 outline-none rounded-md mb-3 caret-[#89D3D3] border-[#89D3D3] border-[2px]" placeholder={placeholder} onChange={filterOnChange}/>
    </div>
  )
}

export default SearchBox