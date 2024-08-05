import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import "./About.css";

const About = () => {
  return (
    <>
    <section className='about'>
        <Back name="About Us" title="About US - Who We Are?" cover={img} />
        <div className="container flex mtop">
            <div className="left row">
                <Heading title="Our Agency Story" subtitle="Check out our company 
                story and  work process"/>
                <p>Our rentals are exceptional! We offer a diverse range of properties to suit every need. 
                Our dedicated team provides top-notch service, from finding the perfect home to handling maintenance efficiently. 
                Experience comfort, convenience, and satisfaction with our rentals.</p>

                <p>
                With a focus on property maintenance and tenant 
                satisfaction, we strive to create comfortable and enjoyable living 
                spaces. Choose us for your housing needs and experience the difference.
                </p>
                <button className="btn2">More About US</button>
            </div>
            <div className="right row">
                <img src="./immio.jpg" alt="" />
            </div>
        </div>
    </section>
    </>
  )
}

export default About

