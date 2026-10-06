import heroImage from '../assets/portfolio/leadzump.png'

const productAssets = import.meta.glob('../assets/portfolio/leadzump/*.png', {
  eager: true,
  import: 'default',
})

function productImage(name) {
  return productAssets[`../assets/portfolio/leadzump/${name}.png`]
}

function ProductScreen({ name, alt, className = '' }) {
  return (
    <div className={`leadzump-screen ${className}`}>
      <div className="leadzump-screen-bar" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <img src={productImage(name)} alt={alt} loading="lazy" decoding="async" />
    </div>
  )
}

function LeadzumpPage() {
  return (
    <article className="leadzump-page">
      <section className="leadzump-hero">
        <div className="leadzump-hero-inner">
          <header className="leadzump-intro">
            <h1>Leadzump - A Realestate CRM</h1>
            <p>
              A B2B Product that streamlines deal, product, and reports. Designed to help
              organizations stay organized &amp; efficient
            </p>
          </header>
          <div className="leadzump-hero-art">
            <img src={heroImage} alt="Leadzump CRM displayed on a laptop" />
          </div>
        </div>
      </section>

      <section className="leadzump-overview leadzump-content-width">
        <h2>Overview</h2>
        <p>
          Leadzump is a B2B real-estate CRM designed to streamline deal tracking, product
          management, and reporting, helping organizations stay organised and efficient in
          fast-moving property markets
        </p>
      </section>

      <section className="leadzump-role">
        <div className="leadzump-role-inner leadzump-content-width">
          <header className="leadzump-section-heading">
            <h2>My Role</h2>
            <p>
              As the <strong>Product Designer</strong>, I was responsible for:
            </p>
          </header>
          <ul className="leadzump-role-list">
            <li>
              <img src={productImage('role-requirements')} alt="" />
              <div>
                <h3>Defining product requirements</h3>
                <p>
                  I crafted our vision for a high-impact CRM tailored to real-estate operations,
                  translating user and business needs into a strategic roadmap that balanced
                  innovation with technical feasibility and market demand
                </p>
              </div>
            </li>
            <li>
              <img src={productImage('role-architecture')} alt="" />
              <div>
                <h3>Architecture &amp; research collaboration</h3>
                <p>
                  I worked closely with system architects and user researchers to shape an app
                  architecture that supports complex deal pipelines, product inventory, dynamic
                  reporting, and scalable team collaboration
                </p>
              </div>
            </li>
            <li>
              <img src={productImage('role-execution')} alt="" />
              <div>
                <h3>Leading cross-functional execution</h3>
                <p>
                  I drove alignment and momentum across engineering, UX, and platform teams,
                  facilitating key experience flows, prioritising features, resolving issues, and
                  ensuring we delivered on time and within scope
                </p>
              </div>
            </li>
            <li>
              <img src={productImage('role-design-system')} alt="" />
              <div>
                <h3>High-fidelity execution &amp; design system</h3>
                <p>
                  I developed the visual system, UI components and interaction patterns rooted in
                  CRM market research—ensuring that every screen supported meaningful workflows for
                  sales teams and business admins with clarity, consistency and usability
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <div id="leadzump-designs">
        <section className="leadzump-content-width leadzump-feature-row">
          <ProductScreen
            name="deals-kanban"
            alt="Leadzump deal management Kanban board"
            className="leadzump-screen-large"
          />
          <div className="leadzump-feature-copy">
            <h2>High-Fidelity Designs</h2>
            <h3>Organized Deal Management</h3>
            <p>
              <strong>Kanban view</strong> gives a clear visual of each deal’s stage with easy
              drag-and-drop updates
            </p>
          </div>
        </section>

        <section className="leadzump-content-width leadzump-screen-pair leadzump-table-pair">
          <p className="leadzump-pair-caption">
            <strong>Table view</strong> offers a structured list for quick sorting, filtering, and
            reporting
          </p>
          <ProductScreen name="deals-table" alt="Leadzump deals in table view" />
          <ProductScreen name="deals-detail" alt="Leadzump deal data table" />
        </section>

        <section className="leadzump-tinted-section">
          <div className="leadzump-content-width leadzump-workflow-block">
            <div className="leadzump-description">
              <h2>Deal Overview</h2>
              <p>
                The deal profile keeps everything about a client or opportunity in one place. Teams
                can view <strong>deal information, check activity history, add notes, manage tasks,
                upload documents, and log calls</strong> in a single view
              </p>
            </div>
            <div className="leadzump-three-screens">
              <ProductScreen name="deal-overview-a" alt="Leadzump deal profile details" />
              <ProductScreen name="deal-overview-b" alt="Leadzump deal activity and tasks" />
              <ProductScreen name="deal-overview-c" alt="Leadzump deal documents and notes" />
            </div>
          </div>
        </section>

        <section className="leadzump-tinted-section">
          <div className="leadzump-content-width leadzump-workflow-block">
            <div className="leadzump-description">
              <h2>WhatsApp Integration for Real-Time Communication</h2>
              <p>
                LeadZump connects directly with WhatsApp, letting teams message clients from within
                the deal view. It eliminates app-switching, keeps conversations tied to each deal,
                and ensures communication history stays visible to the team. It’s a simple way to
                stay responsive and maintain context without breaking workflow
              </p>
            </div>
            <div className="leadzump-two-screens">
              <ProductScreen name="whatsapp-deal" alt="WhatsApp contact panel in a Leadzump deal" />
              <ProductScreen name="whatsapp-chat" alt="WhatsApp conversation inside Leadzump" />
            </div>
          </div>
        </section>

        <section className="leadzump-content-width leadzump-dual-feature">
          <div className="leadzump-feature-item">
            <ProductScreen name="call-dashboard" alt="Leadzump call performance dashboard" />
            <div className="leadzump-description">
              <h2>Call Dashboard for Performance Insights</h2>
              <p>
                It tracks calls, talk time, and success rates. Trend graphs show peak engagement,
                while the “Best Time to Call” chart helps teams plan efficiently and work smarter.
              </p>
            </div>
          </div>
          <div className="leadzump-feature-item">
            <ProductScreen name="lead-bucket" alt="Leadzump lead bucket stage and status report" />
            <div className="leadzump-description">
              <h2>Lead Bucket Report for Stage and Status Tracking</h2>
              <p>
                The Lead Bucket Report shows how deals move through the pipeline, breaking them down
                by stage and status to highlight progress and follow-ups
              </p>
            </div>
          </div>
        </section>

        <section className="leadzump-content-width leadzump-feature-row leadzump-settings-row">
          <ProductScreen
            name="settings"
            alt="Leadzump settings and configuration screen"
            className="leadzump-screen-large"
          />
          <div className="leadzump-feature-copy">
            <h2>Settings and Configuration</h2>
            <p>
              The settings area brings all system controls into one place. Teams can manage roles,
              templates, tools, and integrations while maintaining security and structure
            </p>
          </div>
        </section>

        <section className="leadzump-tinted-section">
          <div className="leadzump-content-width leadzump-workflow-block">
            <h2>Building Structured Pipelines with Templates and Automation</h2>
            <div className="leadzump-pipeline-grid">
              <div>
                <p>
                  The template setup feature helps teams build a structured sales process by defining
                  template details that form the foundation for managing deals
                </p>
                <ProductScreen name="pipeline-template" alt="Leadzump pipeline template setup" />
              </div>
              <div>
                <p>
                  Stages and statuses outline the sales pipeline, with each stage marking a key step
                  in the deal journey, helping teams track progress clearly
                </p>
                <ProductScreen name="pipeline-stages" alt="Leadzump pipeline stages and statuses" />
              </div>
              <ProductScreen name="pipeline-flow-a" alt="Leadzump deal flow automation setup" />
              <ProductScreen name="pipeline-flow-b" alt="Leadzump deal assignment rules" />
            </div>
            <p className="leadzump-description">
              <strong>Deal flow management allows teams to automate lead assignments using customized rules</strong>.
              Deals can be routed to specific users or departments based on stage, source, or role.
              This keeps the process fast, fair, and organized while reducing manual effort and delays
            </p>
          </div>
        </section>

        <section className="leadzump-tinted-section">
          <div className="leadzump-content-width leadzump-workflow-block">
            <h2>Adding and Managing Products</h2>
            <div className="leadzump-product-grid">
              <div>
                <ProductScreen name="product-add" alt="Leadzump product setup form" />
                <p>
                  The product setup helps teams organize and manage projects in the CRM. Users add
                  products with details like name, description, and logo, then choose a template
                </p>
              </div>
              <div>
                <ProductScreen name="product-list" alt="Leadzump product list" />
                <p>
                  Each product follows a workflow based on the chosen template, or teams can use
                  custom rules. Products appear in a central list for easy updates
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="leadzump-content-width leadzump-organization">
          <div className="leadzump-description">
            <h2>Organisation Structure</h2>
            <p>
              The organisation structure helps teams set up departments, roles, and employees in a
              clear and connected way. It lets companies define how teams are organized, who reports
              to whom, and how responsibilities are shared
            </p>
          </div>
          <div className="leadzump-three-screens">
            <ProductScreen name="organization-a" alt="Leadzump organisation structure list" />
            <ProductScreen name="organization-b" alt="Leadzump department details" />
            <ProductScreen name="organization-c" alt="Leadzump employee and role list" />
          </div>
          <ProductScreen
            name="organization-overview"
            alt="Leadzump organisation hierarchy"
            className="leadzump-screen-large"
          />
        </section>

        <section className="leadzump-tinted-section">
          <div className="leadzump-content-width leadzump-workflow-block">
            <h2>Role-Based Access Control and User Management</h2>
            <div className="leadzump-product-grid">
              <div>
                <ProductScreen name="access-roles" alt="Leadzump role permissions" />
                <p>
                  RBAC keeps the CRM secure and organized by defining what each role can access.
                  Teams create profiles with specific permissions, ensuring users only see relevant
                  data while maintaining control over sensitive information
                </p>
              </div>
              <div>
                <ProductScreen name="team-users" alt="Leadzump user management" />
                <p>
                  User management lets admins invite and organize team members easily. Each user gets
                  a role that fits their responsibilities. Admins can track status and adjust
                  permissions as teams grow, keeping collaboration clear and secure
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="leadzump-content-width leadzump-workflow-block">
          <div className="leadzump-description">
            <h2>Notifications</h2>
            <p>
              The notifications center keeps users updated on deals, tasks, calls, and messages,
              helping teams stay organized and respond quickly
            </p>
          </div>
          <div className="leadzump-two-screens">
            <ProductScreen name="notifications-a" alt="Leadzump notifications center" />
            <ProductScreen name="notifications-b" alt="Leadzump notification preferences" />
          </div>
        </section>

        <section className="leadzump-tinted-section">
          <div className="leadzump-content-width leadzump-workflow-block">
            <div className="leadzump-description">
              <h2>Creating WhatsApp Templates</h2>
              <p>
                The WhatsApp Template feature lets teams design and personalize message formats for
                campaigns. Users can preview, submit for approval, and reuse them for quick,
                consistent outreach
              </p>
            </div>
            <div className="leadzump-two-screens">
              <ProductScreen name="whatsapp-template-a" alt="Leadzump WhatsApp template editor" />
              <ProductScreen name="whatsapp-template-b" alt="Leadzump WhatsApp template preview" />
            </div>
          </div>
        </section>

        <section className="leadzump-content-width leadzump-workflow-block">
          <div className="leadzump-description">
            <h2>Business Partner Module</h2>
            <p>
              The Business Partner module in Leadzump helps real estate companies collaborate
              efficiently with external agents and channel partners.
            </p>
          </div>
          <div className="leadzump-two-screens">
            <ProductScreen name="partners-a" alt="Leadzump business partner management" />
            <ProductScreen name="partners-b" alt="Leadzump partner deal view" />
          </div>
        </section>

        <section className="leadzump-tinted-section">
          <div className="leadzump-content-width leadzump-workflow-block">
            <div className="leadzump-feature-row leadzump-mobile-app-row">
              <ProductScreen
                name="mobile-app"
                alt="Leadzump branded mobile app settings"
                className="leadzump-screen-large"
              />
              <p>
                Teams can customize and generate a branded mobile app for Android or iOS, complete
                with logos, colors, and onboarding settings
              </p>
            </div>
            <p>
              Admins can set up verification methods, manage access, and define how partners log in.
              Partners can then add and track deals directly from the app, keeping the organization’s
              CRM updated in real time
            </p>
            <div className="leadzump-three-screens">
              <ProductScreen name="partner-mobile-a" alt="Leadzump partner mobile app screen" />
              <ProductScreen name="partner-mobile-b" alt="Leadzump partner deal entry" />
              <ProductScreen name="partner-mobile-c" alt="Leadzump partner deal tracking" />
            </div>
            <p>
              This module bridges teams and partners seamlessly, improving deal visibility, reducing
              manual work, and keeping the sales process organized and transparent
            </p>
          </div>
        </section>

        <section className="leadzump-impact leadzump-content-width">
          <h2>The Impact</h2>
          <div className="leadzump-impact-copy">
            <p>
              The final outcome was a clearer, more structured CRM experience that helped teams
              manage deals with confidence. Sales and admin users could complete tasks faster
              without needing constant guidance
            </p>
            <p>
              During usability sessions, users described the system as “<em>easy to follow and
              reliable</em>” which validated the goal of making complex real estate workflows feel
              simple and manageable
            </p>
          </div>
          <div className="leadzump-metrics">
            <div>
              <strong>38%</strong>
              <p>Faster deal movement with clearer pipelines and dual Kanban and Table views</p>
            </div>
            <div>
              <strong>42%</strong>
              <p>Higher daily usage driven by structured deal profiles and in-app WhatsApp communication</p>
            </div>
            <div>
              <strong>30%</strong>
              <p>Less manual effort through automation, templates, and role-based access control</p>
            </div>
          </div>
        </section>

        {/* <section className="leadzump-contact leadzump-content-width">
          <img src={footerFigure} alt="" />
          <div>
            <h2>keen to chat or collab?</h2>
            <p>Let’s connect!</p>
            <nav aria-label="Contact links">
              <a href="mailto:ihariharan47@gmail.com">Email</a>
              <a href="https://www.instagram.com/hari_pixels/" target="_blank" rel="noreferrer">
                Instagram
              </a>
              <a href="https://www.linkedin.com/in/hari-haran-7b2032244/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </nav>
          </div>
        </section> */}
      </div>
    </article>
  )
}

export default LeadzumpPage
