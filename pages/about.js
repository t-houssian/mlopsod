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
          alongside AI integration, advisory, and JupyterHub enablement.
        </p>
        <p>
            Have a business modle your looking to stand up in a matter of weeks?
            We can help you get there. Our team of experts will work with you to
            understand your specific needs and develop a customized solution that
            meets your requirements. We have a proven track record of delivering
            high-quality solutions!
        </p>
      </section>

      <section className="section">
        <h2>Engagement Models</h2>
        <p>
          Our offerings are designed to be flexible and tailored to your needs.
        </p>
        <p>
          We do things differently. We are not a traditional consulting firm. We work
          on a sprint by sprint basis, allowing you to engage us for specific projects
          without the need for long-term contracts. This approach ensures that you get
          the expertise you need when you need it, without the overhead of a full-time
          engagement.
        </p>
        <ul>
          <li>
            <strong>Discovery Sprints (1 sprint | $25K):</strong> Architecture audit,
            AI use-case assessment, and MLOps roadmap. Deliverable: detailed playbook
            with ROI projections.
          </li>
          <li>
            <strong>Deployment Sprints (1 sprint | $60K):</strong> Cluster provisioning,
            Metaflow + Argo IaC modules, example pipelines, monitoring
            (Prometheus/Grafana), and customized JupyterHub authenticator/spawner with CI/CD.
          </li>
          <li>
            <strong>JupyterHub Enablement (1 sprint | $30K):</strong> Multi-tenant
            notebook design, SSO/LDAP integration, resource limit configuration,
            and monitoring & alerting setup.
          </li>
        </ul>
        <p>
          Our mission is to empower SaaS startups to operationalize ML and AI at
          cloud-scale using vendor-agnostic, open-source tooling.
        </p>
      </section>
    </>
  )
}
