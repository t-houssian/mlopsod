import Head from 'next/head'

const services = [
  {
    title: 'Discovery Sprint',
    timeframe: '1–2 weeks',
    price: '$10K',
    bullets: [
      'Architecture audit',
      'AI use-case assessment',
      'MLOps roadmap',
      'Detailed playbook with ROI projections'
    ]
  },
  {
    title: 'Deployment Sprint',
    timeframe: '2–4 weeks',
    price: '$30K',
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
    timeframe: '1-2 weeks',
    price: '10K',
    bullets: [
      'AI Architecture audit',
      'AI use-case assessment',
      'MLOps roadmap',
      'Detailed playbook with ROI projections'
    ]
  },
  {
    title: 'AI Deployment Sprint',
    timeframe: '2-4 weeks',
    price: '30K',
    bullets: [
      'AI inference pipeline implementation',
      'Feature store setup',
      'Data-ops best practices',
    ]
  },
  {
    title: 'JupyterHub Enablement',
    timeframe: '2-4 weeks',
    price: '20K',
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
      </section>
    </>
  )
}
