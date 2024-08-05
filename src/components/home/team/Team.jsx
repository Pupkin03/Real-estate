import Heading from "../../common/Heading";
import { team } from "../../data/Data";
import "./Team.css";


const Team = () => {
  return (
    <>
    <section className="team background">
        <div className="container">
            <Heading title="Our Featured Agents" subtitle="They understand market trends, 
            listen to client needs, and provide suitable property options. Trustworthy, with 
            strong communication skills, they guide clients through the rental process smoothly."/>

            <div className="container mtop grid3">
                {team.map((val, index) => {
                    return (
                    <div className="box" key={index}>
                        <button className="btn3">{val.list} Listings</button>
                        <div className="details">
                            <div className="img">
                                <img src={val.cover} alt="" />
                                <i className="fa fa-circle-check"></i>
                            </div>
                            <i className="fa fa-location-dot"></i>
                            <label htmlFor="">{val.address}</label>
                            <h4>{val.name}</h4>

                            <ul>
                                <i class='fa-brands fa-facebook-f'></i> 
                                <i class='fa-brands fa-linkedin'></i> 
                                <i class='fa-brands fa-twitter'></i> 
                                <i class='fa-brands fa-instagram'></i>
                            </ul>
                            <div className="button flex">
                            <button>
                                <i className="fa fa-envelope"></i>
                            Message
                            </button>
                            <button className="btn4">
                                <i className="fa fa-phone-alt"></i>
                            </button>
                            </div>
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

export default Team