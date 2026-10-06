import './RcxPage.css'
import heroImage from '../assets/portfolio/rcx.png'
import roleRequirements from '../assets/portfolio/leadzump/role-requirements.png'
import roleResearch from '../assets/portfolio/leadzump/role-architecture.png'
import roleExecution from '../assets/portfolio/leadzump/role-execution.png'
import roleDesign from '../assets/portfolio/leadzump/role-design-system.png'

const images = import.meta.glob('../assets/portfolio/rcx/*.png', {
  eager: true,
  import: 'default',
})

const roles = [
  ['Experience definition and problem framing', 'I identified key friction points in the buyer journey such as unclear booking steps, lack of payment transparency, and inconsistent project communication. These insights guided the overall experience strategy', roleRequirements],
  ['Flow design for complex real-estate journeys', 'I designed step-by-step flows covering unit selection, booking, digital signing, milestone-based payments, document access, and construction updates, ensuring customers always knew what to do next', roleResearch],
  ['Collaboration with product and engineering teams', 'I worked closely with developers and product stakeholders to ensure designs were technically feasible, scalable across projects, and consistent across residential and commercial use cases', roleExecution],
  ['High-fidelity execution & design system', 'I created detailed high-fidelity screens for critical customer touchpoints, balancing clarity with reassurance in high-trust moments like payments, agreements, and legal documents', roleDesign],
]

const stories = [
  { title: 'Secure and Simple Login', description: 'The login experience is built to be fast and dependable. Flexible sign in options and PIN based verification balance ease of access with strong security', files: ['20584', 'login-verification'], alt: 'RCX secure login and verification screens', tone: 'tinted' },
  { title: 'Dashboard & Project Browsing', description: 'View your active bookings at a glance and explore other projects with clear details on pricing, status, and progress. Everything you need to compare options and take the next step sits in one simple, easy-to-scan view', files: ['dashboard-browsing'], alt: 'RCX dashboard and project browsing interface', tone: 'plain' },
  { title: 'Project Discovery to Cost Confirmation', description: 'Explore complete project details, pricing, visuals, and availability in one place. Compare options easily and move forward with clarity', files: ['20585', '20586', '20587', '20588'], alt: 'RCX project discovery and cost screens', tone: 'plain' },
  { title: 'Booking Form Signing', description: 'Users can review the booking form and sign it digitally within the flow. This keeps the process quick, clear, and fully traceable without moving outside the system', files: ['20589', '20590', '20591'], alt: 'RCX booking form and digital signing screens', tone: 'tinted' },
  { title: 'Booking Amount Payment', description: 'Users pay the booking amount securely within the platform and get instant confirmation. The unit is marked as booked, keeping the flow clear and reassuring', files: ['20592', '20593'], alt: 'RCX booking amount payment screens', tone: 'plain' },
  { title: 'Milestones, Payments & Project Updates', description: 'Users can follow construction progress through clear milestone stages, view related updates and visuals, make payments as each stage completes, and review all transactions in one place', files: ['20594', '20595', '20596'], alt: 'RCX milestone, payment, and project update screens', tone: 'tinted' },
  { title: 'Schedule a Call', description: 'Users can book a call directly from the project page by selecting a convenient date and time. This makes it easy to connect with the team, clarify details, and move forward without leaving the flow', files: ['schedule-call', '20597', '20598'], alt: 'RCX call scheduling screens', tone: 'plain' },
  { title: 'Client side : Project Set up', description: 'This is the starting point for setting up a project on the client side. Teams can configure how the project appears to customers by managing key details such as highlights, location, amenities, galleries, and supporting content', files: ['20599', '20600', '20601', '20602', '20603'], alt: 'RCX client project setup screens', tone: 'tinted' },
  { title: 'Inventory Setup for Residential Projects', description: 'This step lets teams define and upload unit level details like unit type, floor plan, facing, parking, and super built up area. Once configured, the inventory becomes easy to manage, filter, and map to milestones and payments', files: ['20604', '20605', '20606'], alt: 'RCX residential inventory setup screens', tone: 'plain' },
  { title: 'Publishing Project Updates', description: 'Teams can publish verified project updates directly to customers, keeping progress transparent and timely. This builds trust by sharing real milestones, visuals, and status without manual follow-ups', files: ['20607', '20608'], alt: 'RCX project update publishing screens', tone: 'tinted' },
  { title: 'Milestone Triggers & Demand Letters', description: 'Teams can mark construction milestones as complete and trigger them in the system. This automatically generates and sends demand letters to customers, keeping billing aligned with project progress and timelines', files: ['20612', '20610', '20611'], alt: 'RCX milestone trigger and demand letter screens', tone: 'plain' },
  { title: 'Publishing Project Updates', description: 'Teams can publish verified project updates directly to customers, keeping progress transparent and timely. This builds trust by sharing real milestones, visuals, and status without manual follow-ups', files: ['20615', '20616', '20617', '20618'], alt: 'RCX project updates and status screens', tone: 'tinted' },
  { title: 'Audit Trail', description: 'Every customer action is logged in a clear, time-stamped timeline. Teams can review activity history to track progress, verify actions, and maintain accountability without digging through records', files: ['20613', '20614'], alt: 'RCX customer activity audit trail screens', tone: 'plain' },
]

function Screen({ file, alt }) {
  const src = images[`../assets/portfolio/rcx/${file}.png`]
  return (
    <figure className="rcx-screen">
      <div className="rcx-screen-bar" aria-hidden="true"><i /><i /><i /></div>
      <img src={src} alt={alt} loading="lazy" decoding="async" />
    </figure>
  )
}

function RcxPage() {
  return (
    <article className="rcx-case">
      <section className="rcx-hero">
        <div className="rcx-width rcx-hero-inner">
          <header className="rcx-intro">
            <h1>RCX - Customer Experience App</h1>
            <p>Manages bookings, documents, and transactions for customers, while enabling admins to handle operations</p>
          </header>
          <div className="rcx-hero-art">
            <img src={heroImage} alt="RCX customer experience app dashboard displayed on a laptop" />
          </div>
        </div>
      </section>

      <section className="rcx-overview rcx-width">
        <h2>Overview</h2>
        <p>
          RCX is a customer-facing real estate platform that guides buyers from project discovery
          through booking, payments, and construction updates, while also enabling builders to upload
          and manage project details and inventory with ease
        </p>
      </section>

      <section className="rcx-role">
        <div className="rcx-width">
          <header className="rcx-section-heading">
            <h2>My Role</h2>
            <p>As the <strong>Product Designer</strong>, I was responsible for:</p>
          </header>
          <ul className="rcx-role-list">
            {roles.map(([title, description, image]) => (
              <li key={title}><img src={image} alt="" /><div><h3>{title}</h3><p>{description}</p></div></li>
            ))}
          </ul>
        </div>
      </section>

      {stories.map((story, index) => (
        <section className={`rcx-story rcx-${story.tone}`} key={`${story.title}-${index}`}>
          <div className="rcx-width">
            <header className="rcx-story-copy"><h2>{story.title}</h2><p>{story.description}</p></header>
            <div className={`rcx-screens rcx-screens-${story.files.length}`}>
              {story.files.map((file) => <Screen key={`${file}-${story.title}`} file={file} alt={story.alt} />)}
            </div>
          </div>
        </section>
      ))}

      <section className="rcx-impact">
        <div className="rcx-width">
          <h2>The Impact</h2>
          <div className="rcx-impact-copy">
            <p>
              The final outcome was a clearer and more transparent buying experience that helped
              customers navigate their property journey with confidence. Buyers could track bookings,
              payments, and project progress without relying on constant follow-ups
            </p>
            <p>
              During usability sessions, users described the experience as “<em>easy to understand
              and reassuring</em>“, which validated the goal of making complex real estate processes
              feel simple and trustworthy
            </p>
          </div>
          <div className="rcx-metrics">
            <div><strong>35%</strong><p>Increase in booking completion rate due to clear unit selection, cost transparency, and guided booking flows</p></div>
            <div><strong>42%</strong><p>Reduction in customer support queries after introducing milestone-based payment &amp; demand letters</p></div>
            <div><strong>30%</strong><p>Improvement in engagement, with users trackings payments, &amp; project updates instead of offline follow-ups.</p></div>
          </div>
        </div>
      </section>
    </article>
  )
}

export default RcxPage
