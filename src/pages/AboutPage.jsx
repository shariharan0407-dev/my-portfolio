import './AboutPage.css'
import eye from '../assets/portfolio/about/eye.png'
import portrait from '../assets/portfolio/about/portrait.png'
import contact from '../assets/portfolio/about/contact.png'
import purposeUnderline from '../assets/portfolio/about/underline-purpose.svg'
import creativityUnderline from '../assets/portfolio/about/underline-creativity.svg'
import thoughtfulSolutionsCircle from '../assets/portfolio/about/circle-solutions.svg'
import focusUnderline from '../assets/portfolio/about/underline-focus.svg'
import thoughtfulCircle from '../assets/portfolio/about/circle-thoughtful.svg'
import lookingUnderline from '../assets/portfolio/about/underline-looking-ahead.svg'
import divider from '../assets/portfolio/about/divider.svg'

function AboutPage() {
  return (
    <article className="about-design-page">
      <section className="about-intro">
        <div className="about-intro-inner">
          <div className="about-copy">
            <h1>
              <img src={eye} alt="" />
              <span className="about-heading-text">
                Create pixels with <span className="about-purpose">purpose
                  <img src={purposeUnderline} alt="" aria-hidden="true" />
                </span>
              </span>
            </h1>
            <p className="about-focus-copy">
              My focus is on using technology to make everyday life and work simpler, smarter, and
              more meaningful. What keeps me drawn to design is how it blends{' '}
              <span className="about-creativity-highlight">
                creativity, logic, and strategy
                <img src={creativityUnderline} alt="" aria-hidden="true" />
              </span>{' '}
              to solve real human problems
            </p>
            <img className="about-annotation about-focus-underline" src={focusUnderline} alt="" />
            <p className="about-thoughtful-copy">
              My combined passions for art, storytelling, and psychology shapes how I approach
              design. I enjoy uncovering what people need, translating that into{' '}
              <span className="about-solutions-highlight">
                thoughtful solutions
                <img src={thoughtfulSolutionsCircle} alt="" aria-hidden="true" />
              </span>
              , and making digital experiences feel effortless
            </p>
            <img className="about-annotation about-thoughtful-circle" src={thoughtfulCircle} alt="" />
            <p className="about-looking-copy">
              Looking ahead, I want to collaborate with other designers to build digital products
              that not only work well but also make users feel confident and valued
            </p>
            <img className="about-annotation about-looking-underline" src={lookingUnderline} alt="" />
          </div>
          <div className="about-portrait">
            <img src={portrait} alt="Portrait illustration of Hari" />
          </div>
        </div>
      </section>

      <div className="about-divider" aria-hidden="true">
        <img src={divider} alt="" />
      </div>

      {/* <section className="about-contact">
        <img src={contact} alt="Three people collaborating around a table" />
        <div className="about-contact-copy">
          <h2>keen to chat or collab?</h2>
          <p>Let’s connect!</p>
          <nav aria-label="Contact links">
            <a href="mailto:ihariharan47@gmail.com">Email</a>
            <a href="https://www.instagram.com/hari_pixels/" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://www.linkedin.com/in/hari-haran-7b2032244/" target="_blank" rel="noreferrer">LinkedIn</a>
          </nav>
        </div>
      </section> */}
    </article>
  )
}

export default AboutPage
