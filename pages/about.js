import Head from 'next/head'

export default function About() {
  return (
    <>
      <Head>
        <title>About Us – MLOps On Demand</title>
      </Head>

      <section className="section">
        <h2>About MLOps On Demand</h2>
        <p>
          MLOps On Demand (MLOps OD) is a premium niche consulting firm entering
          a booming MLOps and AI landscape by offering turnkey,
          open-source–based infrastructure deployments (Metaflow • Argo • Kubernetes)
          alongside AI integration advisory and JupyterHub enablement.
        </p>
      </section>

      <section className="section">
        <h2>Engagement Models</h2>
        <ul>
          <li>
            <strong>Discovery Sprints (1–2 weeks | $10K):</strong> Architecture audit,
            AI use-case assessment, and MLOps roadmap. Deliverable: detailed playbook
            with ROI projections.
          </li>
          <li>
            <strong>Deployment Sprints (2–4 weeks | $30K):</strong> Cluster provisioning,
            Metaflow + Argo IaC modules, example pipelines, monitoring
            (Prometheus/Grafana), and customized JupyterHub authenticator/spawner with CI/CD.
          </li>
        </ul>
      </section>
    </>
  )
}
