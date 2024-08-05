import Back from "../common/Back"
import PriceCard from "../home/price/PriceCard"
import img from "../images/pricing.jpg"

const Pricing = () => {
  return (
    <>
    <section className='services mb'>
    <Back name="30 days money back guarantee" title="No Extra Fees. Friendly Support" cover={img}/>
    <div className="price container">
        <PriceCard/>
    </div>
    </section>
    </>
  )
}

export default Pricing