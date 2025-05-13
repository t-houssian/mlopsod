import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>MLOps On Demand</title>
        <meta
          name="description"
          content="Turnkey MLOps & AI infrastructure—Metaflow, Argo, Kubernetes, JupyterHub—delivered in a single sprint."
        />
      </Head>

      <section className="hero">
        <h1>Build ML & AI Infrastructure Fast</h1>
        <p>
          Turnkey, open-source deployments (Metaflow • Argo • Kubernetes) ready
          in a single sprint.
        </p>
        <Link href="/contact" className="btn-gold">
          Get In Touch
        </Link>
      </section>

      <section className="section">
        <h2>Our Mission</h2>
        <p>
          Empower SaaS startups to operationalize ML and AI at cloud scale using
          vendor-agnostic, open-source tooling—fast, flexible, and without vendor lock-in.
        </p>
        <p>
          We do things differently. We deliver expertise on a sprint-by-sprint basis: engage us for targeted
          projects without long-term contracts. You get the support you need,
          exactly when you need it.
        </p>
        <p>
          By leveraging proven open-source technologies, we ensure your infrastructure
          remains adaptable and cost-efficient. Our team has deep experience in
          building, deploying, and scaling ML and AI systems.
        </p>
        <p>
          As a specialized consulting firm, we also offer architecture audits, use-case
          assessments, MLOps roadmaps, cluster provisioning with IaC modules,
          example pipelines, monitoring (Prometheus/Grafana), and custom JupyterHub
          authenticator/spawner integrations.
        </p>
      </section>

      <section className="section">
        <h2>Ready to Get Started?</h2>
        <p>
          Explore our <Link href="/services">Services</Link> or{' '}
          <Link href="/contact">Contact Us</Link> to learn how we can accelerate
          your ML and AI initiatives.
        </p>
        <Link href="/services" className="btn-gold">
          View Services
        </Link>
      </section>

      <section className="section">
        <h2>Rapid Deployments • Turnkey Solutions • Open-Source</h2>
      </section>
    </>
  )
}