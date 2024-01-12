import { Link } from 'react-router-dom'
import page404 from '../assets/pg4.svg'

const Page404 = () => {
  return (
    <div>
        <div className='flex flex-col items-center justify-center h-[100vh] gap-[1rem] '>
            <img src={page404} alt="404" width='286px' height='300px' className='w-[286px] h-[300px]'/>
            <h1 className='font-bold text-xl'>404</h1>
            <p className='w-[280px]'>Looks like you got lost, nevertheless let’s help you find your way back</p>
            <Link to='/' className='text-[#38e738] text-2xl font-bold'>Go Home</Link>
        </div>

    </div>
  )
}

export default Page404