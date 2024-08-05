import Heading from "../../common/Heading"
import { location } from "../../data/Data"
import "./Location.css"

const Location = () => {
  return (
    <>
    <section className="location padding">
        <div className="container">
            <Heading title="Explore By Location" subtitle="Choosing a house location
            depends on factors like: proximity to work/school,
            safety, access to amenities, transportation, cost of living, 
            neighborhood environment, and personal preferences."/>

            <div className="content grid3 mtop">
                {location.map((items, index) => {
                    return (
                    <div className="box" key={index}>
                        <img src={items.cover} alt=""/>
                        <div className="overlay">
                            <h5>{items.name}</h5>
                            <p>
                            <label>{items.Villas}</label>
                            <label>{items.Offices}</label>
                            <label>{items.Apartments}</label>
                            </p>
                        </div>
                    </div>
                )
                })}
            </div>
        </div>
    </section>
    </>
  )
}

export default Location