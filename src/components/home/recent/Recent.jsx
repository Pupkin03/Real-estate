import Heading from '../../common/Heading'
import './Recent.css'
import RecentCard from './RecentCard'

const Recent = () => {
  return (
    <>
    <section className='recent padding'>
    <div className="container">
        <Heading title='Recent Property Listed' subtitle='Renting a house
        involves key details. Consider property size, location, amenities,
        rent, lease terms, security deposit, pet policies, maintenance, and
        utilities. Understanding these factors helps in making informed rental decisions.'/>
        <RecentCard/>
    </div>
    </section></>
  )
}

export default Recent