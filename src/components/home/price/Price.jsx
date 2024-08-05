import Heading from "../../common/Heading";
import PriceCard from "./PriceCard";
import "./Price.css";

const Price = () => {
  return (
    <>
    <section className="price padding">
        
        <div className="container"></div>
        <Heading title="Select Your Package" subtitle="Options include short-term, long-term leases, furnished or 
        unfurnished units. Consider factors like amenities (pool, gym, parking), utilities included, pet policies, 
        security features, and additional services offered to select the best package matching your lifestyle and budget."/>
        <PriceCard/>
    </section></>
  )
}

export default Price