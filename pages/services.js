import Head from 'next/head'

const services = [
  {
    title: 'Discovery Sprint',
    timeframe: '1 sprint',
    price: '$25K',
    bullets: [
      'Architecture audit',
      'AI use-case assessment',
      'MLOps roadmap',
      'Detailed playbook with ROI projections',
    ],
  },
  {
    title: 'Deployment Sprint',
    timeframe: '1 sprint',
    price: '$60K',
    bullets: [
      'Cluster provisioning',
      'Metaflow + Argo IaC modules',
      'Example pipelines',
      'Monitoring (Prometheus/Grafana)',
      'Customized JupyterHub authenticator/spawner with CI/CD',
    ],
  },
  {
    title: 'AI Integration Advisory Sprint',
    timeframe: '1 sprint',
    price: '$25K',
    bullets: [
      'AI architecture audit',
      'AI use-case assessment',
      'MLOps roadmap',
      'Detailed playbook with ROI projections',
    ],
  },
  {
    title: 'AI Deployment Sprint',
    timeframe: '1 sprint',
    price: '$60K',
    bullets: [
      'Inference pipeline implementation',
      'Feature store setup',
      'DataOps best practices',
    ],
  },
  {
    title: 'JupyterHub Enablement',
    timeframe: '1 sprint',
    price: '$30K',
    bullets: [
      'Multi-tenant notebook environment design',
      'SSO/LDAP integration',
      'Resource-limit configuration',
      'Monitoring and alerting setup',
    ],
  },
]

export default function Services() {
  return (
    <>
      <Head>
        <title>Services – MLOps On Demand</title>
      </Head>

      <section className="section">
        <h2>Services Offered</h2>
        <div className="services-grid">
          {services.map((s) => (
            <div key={s.title} className="service-card">
              <h3>{s.title}</h3>
              <p>
                <strong>{s.timeframe}</strong> • <strong>{s.price}</strong>
              </p>
              <ul>
                {s.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <p>
          Our sprint-based model empowers you to tap our expertise for discrete
          projects—no long-term contracts required. Discovery Sprints assess
          your business needs and surface optimal solutions, while Deployment
          Sprints implement those solutions and ensure a seamless transition
          to your new infrastructure.
        </p>
        <p>
          We confidently stand up full systems in a single sprint and have a
          proven track record of delivering high-quality solutions on schedule.
        </p>
        <p>
          You’re in complete control of the engagement—100% transparency and
          flexibility. We collaborate closely with your team and provide a
          detailed playbook outlining every step, timeline, milestone, and
          deliverable so you always know what to expect.
        </p>
        <p>
          At any point, you can extend for another sprint or conclude the
          engagement—truly <em>On Demand</em>.
        </p>
      </section>
    </>
  )
}
