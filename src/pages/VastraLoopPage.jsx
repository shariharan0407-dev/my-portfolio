import './VastraLoopPage.css'
import heroImage from '../assets/portfolio/loop.png'
import roleRequirements from '../assets/portfolio/leadzump/role-requirements.png'
import roleResearch from '../assets/portfolio/leadzump/role-architecture.png'
import roleExecution from '../assets/portfolio/leadzump/role-execution.png'
import roleDesign from '../assets/portfolio/leadzump/role-design-system.png'

const images = import.meta.glob('../assets/portfolio/vastra-loop/*.png', {
  eager: true,
  import: 'default',
})

const roles = [
  ['Defining product requirements', 'Collaborated with founders to translate the platform’s goal of enabling trust-based circular fashion into actionable design objectives and a clear roadmap. I aligned user needs (simplicity, reliability, and transparency) with business goals (conversion and retention)', roleRequirements],
  ['Research & Strategy', 'Conducted market and competitor research on peer-to-peer fashion rental platforms (like Rent the Runway & Flyrobe) to identify trust and usability gaps. These insights shaped our experience strategy focused on frictionless transactions and credibility cues', roleResearch],
  ['Leading cross-functional execution', 'Partnered with the development team to design scalable app architecture that supports multi-user types (renter, lender, and admin), with modular flows for renting, buying, and managing orders', roleExecution],
  ['High-fidelity execution & design system', 'Delivered pixel-perfect responsive UI screens that balanced vibrant visual storytelling (orange/coral tones) with usability best practices — ensuring visual consistency and micro-interaction delight across modules', roleDesign],
]

const stories = [
  {
    title: 'Product Discovery',
    description: 'Users can move smoothly from browsing listings to a detailed product view with a single tap. the transition preserves context and keeps attention on outfit details, pricing, and actions.',
    files: ['20721', '20722', '20724', '20725'],
    alt: 'Vastra Loop product discovery screens',
    tone: 'plain',
  },
  {
    title: 'Renting an Attire',
    description: 'Users select the rental duration, review pricing and deposit details, New users are prompted to log in with OTP during checkout, then continue the rental flow without interruption',
    files: ['20726', '20727', '20728', '20730'],
    alt: 'Vastra Loop rental selection and checkout screens',
    tone: 'tinted',
  },
  {
    title: 'Buying an Attire (One-Time Purchase Flow)',
    description: 'Users can complete checkout with clear guidance on delivery and return steps, ensuring a smooth and confident purchase experience.',
    files: ['20731', '20732', 'purchase-flow', '20733'],
    alt: 'Vastra Loop one-time purchase screens',
    tone: 'plain',
  },
  {
    title: 'Seller Product Listing & Publishing',
    description: 'Sellers are guided step by step to add photos, product details, pricing, and delivery preferences, followed by a final review that ensures listings are accurate, trustworthy, and ready to go live.',
    files: ['20736', '20738', '20739', '20737'],
    alt: 'Vastra Loop seller listing and publishing screens',
    tone: 'tinted',
  },
  {
    title: 'Order Cancellation & Rental Extension',
    description: 'Users can easily cancel an order or extend their rental directly from the orders page without breaking the flow. Clear options, pricing visibility, and confirmations help users take action confidently at any stage of the rental.',
    files: ['20743', '20740', '20741', '20742'],
    alt: 'Vastra Loop cancellation and rental extension screens',
    tone: 'tinted',
  },
  {
    title: 'Renter Initiated Self Return',
    description: 'Renters can start a self return from the app, hand over the item in person, and mark it as handed over. This keeps the return process clear and properly recorded',
    files: ['20756', '20757'],
    alt: 'Vastra Loop renter self-return flow',
    tone: 'plain',
  },
  {
    title: 'Seller Confirmation and Refund',
    description: 'Sellers confirm receipt after inspection. Once confirmed, the deposit refund process is triggered automatically, ensuring a smooth and transparent closure',
    files: ['20759', '20760', '20754', '20763'],
    alt: 'Vastra Loop seller confirmation and refund flow',
    tone: 'tinted',
  },
  {
    title: 'Menu, Help, and Account Management',
    description: 'The menu brings orders, profile settings, support, FAQs, and account controls into one easy-to-navigate space, helping users find help, manage listings, and adjust preferences without friction.',
    files: ['20748', '20750', '20749', '20751'],
    alt: 'Vastra Loop menu, help, and account screens',
    tone: 'plain',
  },
  {
    title: 'Adding Attires to Collections',
    description: 'Users can save outfits to wishlists or custom collections to plan looks for specific occasions, with clear prompts that prevent duplicates and make organizing, editing, or removing items easy.',
    files: ['20734', '20735'],
    alt: 'Vastra Loop attire collection screens',
    tone: 'tinted',
  },
  {
    title: 'Notifications and Inbox',
    description: 'Users can view all messages and updates in one place, including support chats, rental reminders, order status, and extension approvals. Clear separation between messages and notifications helps users stay informed and respond quickly without confusion',
    files: ['20745', '20744', '20746', '20747'],
    alt: 'Vastra Loop notifications and inbox screens',
    tone: 'plain',
  },
]

function PhoneScreen({ file, alt }) {
  const src = images[`../assets/portfolio/vastra-loop/${file}.png`]
  return (
    <figure className="vastra-phone-screen">
      <div className="vastra-phone-bar" aria-hidden="true" />
      <img src={src} alt={alt} loading="lazy" decoding="async" />
    </figure>
  )
}

function VastraLoopPage() {
  return (
    <article className="vastra-case">
      <section className="vastra-hero">
        <div className="vastra-width vastra-hero-inner">
          <header className="vastra-intro">
            <h1>Vastra Loop - P2P Rental App</h1>
            <p>Connecting users to rent and lend items effortlessly, simplifying transactions and building trust</p>
          </header>
          <div className="vastra-hero-art">
            <img src={heroImage} alt="Vastra Loop rental app displayed on a phone" />
          </div>
        </div>
      </section>

      <section className="vastra-overview vastra-width">
        <h2>Overview</h2>
        <p>
          Vastra Loop is a peer-to-peer clothing rental and resale platform that makes it easy to
          rent, lend, and buy ethnic wear. It builds trust through a clear experience, helping users
          earn from their wardrobes while supporting sustainable fashion
        </p>
      </section>

      <section className="vastra-role">
        <div className="vastra-width">
          <header className="vastra-section-heading">
            <h2>My Role</h2>
            <p>As a <strong>freelance Product Designer</strong>, I was responsible for:</p>
          </header>
          <ul className="vastra-role-list">
            {roles.map(([title, description, image]) => (
              <li key={title}>
                <img src={image} alt="" />
                <div><h3>{title}</h3><p>{description}</p></div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {stories.map((story) => (
        <section className={`vastra-story vastra-${story.tone}`} key={story.title}>
          <div className="vastra-width">
            <header className="vastra-story-copy">
              <h2>{story.title}</h2>
              <p>{story.description}</p>
            </header>
            <div className={`vastra-screens vastra-screens-${story.files.length}`}>
              {story.files.map((file) => (
                <PhoneScreen key={file} file={file} alt={story.alt} />
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="vastra-impact">
        <div className="vastra-width">
          <h2>The Impact</h2>
          <div className="vastra-impact-copy">
            <p>
              The final outcome was a clearer and more reliable rental experience that helped users
              rent and lend with confidence. Transparent flows around deposits, rental status, and
              refunds reduced uncertainty throughout the process
            </p>
            <p>
              During usability sessions, users described the experience as easy to understand and
              trustworthy, which confirmed the goal of making peer-to-peer rentals feel simple and
              dependable
            </p>
          </div>
          <div className="vastra-metrics">
            <div><strong>68%</strong><p>Improvement in task completion rate for first-time renters</p></div>
            <div><strong>55%</strong><p>Rise in repeat users within the first three months of beta testing</p></div>
            <div><strong>30%</strong><p>Improvement in user confidence due to clear tracking of rental status, deposits, and refunds</p></div>
          </div>
        </div>
      </section>
    </article>
  )
}

export default VastraLoopPage
