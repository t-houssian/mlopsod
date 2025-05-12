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
      'Detailed playbook with ROI projections'
    ]
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
      'Customized JupyterHub authenticator/spawner & CI/CD'
    ]
  },
  {
    title: 'AI Integration Advisory Sprint',
    timeframe: '1 sprint',
    price: '25K',
    bullets: [
      'AI Architecture audit',
      'AI use-case assessment',
      'MLOps roadmap',
      'Detailed playbook with ROI projections'
    ]
  },
  {
    title: 'AI Deployment Sprint',
    timeframe: '1 sprint',
    price: '60K',
    bullets: [
      'AI inference pipeline implementation',
      'Feature store setup',
      'Data-ops best practices',
    ]
  },
  {
    title: 'JupyterHub Enablement',
    timeframe: '1 sprint',
    price: '30K',
    bullets: [
      'Multi-tenant notebook design',
      'SSO/LDAP integration',
      'Resource limit configuration',
      'Monitoring & alerting setup'
    ]
  }
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
                <strong>{s.timeframe}</strong> • {s.price}
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
            Our sprint-based approach allows you to engage us for specific projects
            without the need for long-term contracts. This ensures that you get the
            expertise you need when you need it, without the overhead of a full-time
            engagement. Discovery sprints are designed to help assess your business
            needs and identify the best solutions for your organization. Deployment
            sprints focus on implementing the solutions identified in the discovery
            phase, ensuring a smooth transition to your new infrastructure.
        </p>
        <p>
            We are confident in our ability can tyically stand up a full system in a
            sinlge sprint. We have a proven track record of delivering high-quality
            solutions on time.
        </p>
        <p>
            You are %100 in control of the engagement. We will work with you to
            determine the best approach for your organization, and we will provide
            you with a detailed playbook outlining the steps we will take to
            implement the solutions we recommend. This playbook will include
            timelines, milestones, and deliverables, ensuring that you have a clear
            understanding of the process and what to expect.
        </p>
        <p>
            At any time, you can choose to extend for another sprint or call it
            good and walk away hence "On Demand" in our name.
        </p>
      </section>
    </>
  )
}
