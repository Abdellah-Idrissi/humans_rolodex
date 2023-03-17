
const HumansList = ({humans})=> {
  

  return(
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-rows-4 gap-5 px-5 lg:px-[80px] my-[30px]">
      {
        humans.map(human=> {
          let {id,name,email} = human

          return(
            <div key={id} className='bg-[#89D3D3] grid place-items-center px-4 py-5 rounded-lg cursor-pointer ease-linear duration-200 hover:bg-[#7bc0c0] hover:scale-[1.02]'>
              <img src={`https://robohash.org/${id * 2}?set=set5`} alt={name} className='w-[180px]' />
              <h2 className="text-[30px] leading-[1.3] font-[600] mb-6 mt-3">{name}</h2>
              <p className="text-[13px] md:text-[15px]">{email}</p>
            </div>
          )

        })
      }
    </div>
  )
}


export default HumansList