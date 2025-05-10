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
    title: 'AI Integration Advisory',
    timeframe: 'Sprint-based',
    price: 'Custom',
    bullets: [
      'AI inference pipeline implementation',
      'Feature store setup',
      'Data-ops best practices'
    ]
  },
  {
    title: 'JupyterHub Enablement',
    timeframe: 'Sprint-based',
    price: 'Custom',
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
    </>
  )
}
