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
          MLOps On Demand (MLOps OD) is a premium, niche consulting firm poised to transform the
          booming MLOps and AI landscape. We deliver turnkey, open-source–based infrastructure
          deployments&mdash;Metaflow &bull; Argo &bull; Kubernetes&mdash;alongside AI integration
          advisory and JupyterHub enablement.
        </p>
        <p>
          Have a business model you need operational in weeks? We can help. Our team of experts
          collaborates with you to understand your unique requirements and craft tailored solutions.
          With a proven track record of delivering high-quality results, we turn visions into reality
          swiftly and reliably.
        </p>
      </section>

      <section className="section">
        <h2>Engagement Models</h2>
        <p>
          Our sprint-based approach gives you flexibility: engage us for targeted projects without
          long-term contracts. Choose the model that best suits your needs:
        </p>
        <ul>
          <li>
            <strong>Discovery Sprint (1 sprint | $25K):</strong> Architecture audit, AI use-case
            assessment, and MLOps roadmap. Deliverable: detailed playbook with ROI projections.
          </li>
          <li>
            <strong>Deployment Sprint (1 sprint | $60K):</strong> Cluster provisioning, Metaflow+
            Argo IaC modules, example pipelines, monitoring (Prometheus/Grafana), and a customized
            JupyterHub authenticator/spawner with CI/CD integration.
          </li>
          <li>
            <strong>JupyterHub Enablement (1 sprint | $30K):</strong> Multi-tenant notebook
            environment design, SSO/LDAP integration, resource-limit configuration, and
            monitoring & alerting setup.
          </li>
        </ul>
        <p>
          Our mission is to empower SaaS startups to operationalize ML and AI at cloud scale
          using vendor-agnostic, open-source tooling.
        </p>
      </section>
    </>
  )
}
