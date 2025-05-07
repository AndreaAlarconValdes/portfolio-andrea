import Box from '../../components/Box'
import "./About.css"

const About = () => {
  return (
    <div className='about-page'>
      <Box className="self-portrait" title="Photo"   >
            <img src="./selfie.jpeg" alt="selfie" />
          </Box>
          <Box title="About me"  className="about-container" >
            <div className="about-description">
              <h2>Andrea Alarcón Valdés</h2>
              <h4>
                Full-stack developer specialising in front-end development from
                Spain, based in Dublin.
              </h4>
              <p>
                Passionate about creating attractive and functional interfaces,
                always focused on delivering intuitive and user-centered
                experiences. I enjoy the creative process, blending design and
                development to achieve smooth and meaningful interactions.
              </p>
              <p>
                I see myself as a creative, organised, detail-oriented and
                curious person with a strong mindset for continuous learning and
                innovation. I work closely with multidisciplinary teams -
                designers, developers and marketing - to create digital
                experiences that are not only visually compelling, but also
                aligned with clear objectives. Adaptability, teamwork and
                problem solving are key pillars of my approach.
              </p>
            </div>
          </Box>
    </div>
  )
}

export default About
