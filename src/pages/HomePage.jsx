import { Link } from 'react-router-dom'
import avatar from '../assets/portfolio/avatar.png'
import cursor from '../assets/portfolio/cursor.svg'
import leadzumpImage from '../assets/portfolio/leadzump.png'
import loopImage from '../assets/portfolio/loop.png'
import nameUnderline from '../assets/portfolio/name-underline.svg'
import rcxImage from '../assets/portfolio/rcx.png'
import sitezumpImage from '../assets/portfolio/sitezump.png'

const projects = [
  {
    slug: 'sitezump',
    name: 'SiteZump - Website Builder',
    description:
      'A B2C platform that lets users create and publish websites effortlessly through a drag-and-drop interface',
    image: sitezumpImage,
    imageAlt: 'SiteZump website builder displayed on a laptop',
    color: 'butter',
    art: 'sitezump',
  },
  {
    slug: 'leadzump',
    name: 'Leadzump - A Realestate CRM',
    description:
      'A B2B Product that streamlines deal, product, and reports. Designed to help organizations stay organized & efficient',
    image: leadzumpImage,
    imageAlt: 'Leadzump real estate CRM displayed on a laptop',
    color: 'blue',
    art: 'leadzump',
  },
  {
    slug: 'rcx',
    name: 'RCX - Realestate sales Application',
    description:
      'Manages bookings, documents, and transactions for customers, while enabling admins to handle operations',
    image: rcxImage,
    imageAlt: 'RCX real estate sales application displayed on a laptop',
    color: 'lilac',
    art: 'rcx',
  },
  {
    slug: 'vastra-loop',
    name: 'Loop - P2P Rental App',
    description:
      'Connecting users to rent and lend items effortlessly, simplifying transactions and building trust',
    image: loopImage,
    imageAlt: 'Loop peer-to-peer rental app displayed on a phone',
    color: 'periwinkle',
    art: 'loop',
  },
]

function HomePage() {
  return (
    <>
      <section className="intro-section" id="about" aria-labelledby="intro-title">
        <div className="intro-layout">
          <div className="intro-profile">
            <div className="intro-copy">
              <h1 id="intro-title">
                <span className="intro-name">
                  <span className="intro-light">I’m</span> Hari Haran,
                </span>
                <span className="intro-role">Product designer.</span>
              </h1>
              <img className="name-underline" src={nameUnderline} alt="" />
            </div>
            <div className="avatar-wrap">
              <div className="avatar-selection" aria-hidden="true">
                <span />
                <span />
                <span />
                <span />
              </div>
              <div className="avatar-crop">
                <img className="avatar" src={avatar} alt="Illustrated portrait of Hari Haran" />
              </div>
              <div className="figma-cursor" aria-hidden="true">
                <img src={cursor} alt="" />
                <span>Hari Pixels</span>
              </div>
            </div>
          </div>
          <p className="intro-statement">
            I bring more humanness to digital spaces by creating <strong>pixels</strong> with{' '}
            <strong>purpose</strong>
          </p>
        </div>
      </section>

      <section className="projects-section" id="projects" aria-label="Selected design projects">
        <div className="projects-grid">
          {projects.map((project) => (
            <Link to={`/${project.slug}`} key={project.name} className="project-card-link">
              <article className="project-card">
                <div className={`project-visual visual-${project.color}`}>
                  <div className={`project-art art-${project.art}`}>
                    <img src={project.image} alt={project.imageAlt} />
                  </div>
                </div>
                <div className="project-copy">
                  <h2>{project.name}</h2>
                  <p>{project.description}</p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}

export default HomePage
