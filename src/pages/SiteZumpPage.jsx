import './SiteZumpPage.css'
import heroImage from '../assets/portfolio/sitezump.png'
import roleRequirements from '../assets/portfolio/leadzump/role-requirements.png'
import roleResearch from '../assets/portfolio/leadzump/role-architecture.png'
import roleExecution from '../assets/portfolio/leadzump/role-execution.png'
import roleDesign from '../assets/portfolio/leadzump/role-design-system.png'
import editorImage from '../assets/portfolio/sitezump/20627.png'
import beforeImage from '../assets/portfolio/sitezump/editor-before.png'
import afterImage from '../assets/portfolio/sitezump/20626.png'
import templatesImage from '../assets/portfolio/sitezump/20633.png'
import settingsOneImage from '../assets/portfolio/sitezump/20635.png'
import settingsTwoImage from '../assets/portfolio/sitezump/20632.png'
import helpImage from '../assets/portfolio/sitezump/20637.png'
import supportOneImage from '../assets/portfolio/sitezump/20631.png'
import supportTwoImage from '../assets/portfolio/sitezump/20636.png'
import dashboardImage from '../assets/portfolio/sitezump/20628.png'
import siteSettingsImage from '../assets/portfolio/sitezump/20629.png'

const roles = [
  {
    image: roleRequirements,
    title: 'Defining product requirements',
    description:
      'I articulated our vision for a user-first website builder strategy aligned with business goals, translating broad user and market needs into a clear roadmap balancing innovation and feasibility',
  },
  {
    image: roleResearch,
    title: 'Collaborating on architecture and research',
    description:
      'I worked closely with system architects and user researchers to design the app framework, ensuring our experience supported both speed of creation and flexibility of design',
  },
  {
    image: roleExecution,
    title: 'Leading cross-functional execution',
    description:
      'I drove alignment and momentum across engineering, UX, and platform teams, facilitating key experience flows, prioritising features, resolving issues, and ensuring we delivered on time and within scope',
  },
  {
    image: roleDesign,
    title: 'Executing high-fidelity designs',
    description:
      'I crafted the visual system, interface components, and micro-interactions that brought our brand to life, ensuring consistency, clarity and delight across screens',
  },
]

function ProductImage({ src, alt, className = '' }) {
  return (
    <figure className={`sitezump-product-image ${className}`}>
      <div className="sitezump-image-bar" aria-hidden="true"><i /><i /><i /></div>
      <img src={src} alt={alt} loading="lazy" decoding="async" />
    </figure>
  )
}

function SiteZumpPage() {
  return (
    <article className="sitezump-case">
      <section className="sitezump-hero">
        <div className="sitezump-width sitezump-hero-inner">
          <header className="sitezump-intro">
            <h1>SiteZump - Website Builder</h1>
            <p>
              A B2C platform that lets users create and publish websites effortlessly through a
              drag-and-drop interface
            </p>
          </header>
          <div className="sitezump-hero-art">
            <img src={heroImage} alt="SiteZump website builder displayed on a laptop" />
          </div>
        </div>
      </section>

      <section className="sitezump-overview sitezump-width">
        <h2>Overview</h2>
        <p>
          Sitezump is a no-code, low-code B2C platform that lets users build and publish websites
          effortlessly via a drag-and-drop interface. It’s designed to democratize web creation,
          turning ideas into live sites quickly, without demanding technical skills.
        </p>
      </section>

      <section className="sitezump-role">
        <div className="sitezump-width">
          <header className="sitezump-section-heading">
            <h2>My Role</h2>
            <p>As the <strong>Product Designer</strong>, I was responsible for:</p>
          </header>
          <ul className="sitezump-role-list">
            {roles.map((role) => (
              <li key={role.title}>
                <img src={role.image} alt="" />
                <div>
                  <h3>{role.title}</h3>
                  <p>{role.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="sitezump-width sitezump-designs">
        <h2 className="sitezump-kicker">High-Fidelity Designs</h2>
        <div className="sitezump-feature-row">
          <ProductImage src={editorImage} alt="SiteZump main website editor interface" />
          <div className="sitezump-copy">
            <h3>Main Editor Interface</h3>
            <p>
              The core workspace where users visually build their websites. Elements are easily
              added from the left panel, while the right panel offers complete styling controls like
              typography, borders, and effects
            </p>
          </div>
        </div>
      </section>

      <section className="sitezump-before-after">
        <div className="sitezump-width sitezump-two-up">
          <div>
            <p className="sitezump-image-label">Before</p>
            <ProductImage src={beforeImage} alt="SiteZump editor before the redesigned interface" />
          </div>
          <div>
            <p className="sitezump-image-label">After</p>
            <ProductImage src={afterImage} alt="SiteZump editor after the redesigned interface" />
          </div>
        </div>
      </section>

      <section className="sitezump-width sitezump-feature-row sitezump-template-row">
        <ProductImage src={templatesImage} alt="SiteZump template gallery" />
        <div className="sitezump-copy">
          <h3>Template Gallery</h3>
          <p>
            Browse ready-made designs by category. Users can filter, preview, and choose templates
            that fit their goals to start building quickly
          </p>
        </div>
      </section>

      <section className="sitezump-tinted">
        <div className="sitezump-width sitezump-settings">
          <header className="sitezump-copy">
            <h3>Manage Site Essentials through Settings</h3>
            <p>
              You can manage every part of your site from here. Add custom fonts, connect forms,
              update icons, set up analytics, or adjust security settings. It keeps everything
              simple and easy to handle without jumping between tools
            </p>
          </header>
          <div className="sitezump-two-up">
            <ProductImage src={settingsOneImage} alt="SiteZump site settings panel" />
            <ProductImage src={settingsTwoImage} alt="SiteZump settings and integrations" />
          </div>
        </div>
      </section>

      <section className="sitezump-width sitezump-feature-row sitezump-help-row">
        <ProductImage src={helpImage} alt="SiteZump help and learning resources" />
        <div className="sitezump-copy">
          <h3>Easy Access to Help and Learning Resources</h3>
          <ul>
            <li>Help articles, tutorials, and tooltips are available right inside the editor.</li>
            <li>Users can learn and fix issues without switching tabs or leaving their workspace.</li>
            <li>Guided videos make complex actions simple to follow</li>
          </ul>
        </div>
      </section>

      <section className="sitezump-tinted">
        <div className="sitezump-width sitezump-principle">
          <h3>Jakob’s Law: Keeps support within familiar areas, matching user expectations</h3>
          <div className="sitezump-two-up">
            <ProductImage src={supportOneImage} alt="SiteZump contextual help inside the editor" />
            <ProductImage src={supportTwoImage} alt="SiteZump help and guidance interface" />
          </div>
        </div>
      </section>

      <section className="sitezump-width sitezump-dashboard-grid">
        <div>
          <h3>Dashboard</h3>
          <ProductImage src={dashboardImage} alt="SiteZump website dashboard" />
          <p>
            The dashboard gives users a clear view of all their projects. It lets them manage, edit,
            duplicate, or publish sites from one place, keeping everything organized as they build
            and update
          </p>
        </div>
        <div>
          <h3>Site Settings</h3>
          <ProductImage src={siteSettingsImage} alt="SiteZump site settings page" />
          <p>
            The site settings panel keeps everything in one place. Users can name their site,
            connect domains, add integrations, and upload brand assets with a clean, easy layout
          </p>
        </div>
      </section>

      <section className="sitezump-impact">
        <div className="sitezump-width">
          <h2>The Impact</h2>
          <div className="sitezump-impact-copy">
            <p>
              The final outcome was a smoother, more guided experience that helps users feel
              confident while building. New users could start creating without relying on
              documentation, and returning users found advanced options exactly where they expected
              them.
            </p>
            <p>
              During usability sessions, many described the experience as “<em>easy to navigate and
              easy to trust</em>” That feedback confirmed the design goal of making complexity feel
              simple
            </p>
          </div>
          <div className="sitezump-metrics">
            <div><strong>41%</strong><p>Higher publishing completion rate due to a simpler workflow and clearer next steps</p></div>
            <div><strong>25%</strong><p>Increase in overall user satisfaction as users found settings &amp; templates easier to access and understand</p></div>
            <div><strong>40%</strong><p>Increase in user engagement time as the editor layout and help center encouraged deeper interaction</p></div>
          </div>
        </div>
      </section>
    </article>
  )
}

export default SiteZumpPage
