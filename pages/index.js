import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>MLOps On Demand</title>
        <meta
          name="description"
          content="Turnkey MLOps & AI consulting—Metaflow, Argo, Kubernetes, JupyterHub."
        />
      </Head>

      <section className="hero">
        <h1>Build ML & AI Infrastructure Fast</h1>
        <p>
          Turnkey, open-source–based infrastructure deployments (Metaflow • Argo • Kubernetes)
        </p>
        <Link href="/contact" className="btn-gold">
          Get in Touch
        </Link>
      </section>

      <section className="section">
        <h2>Our Mission</h2>
        <p>
          Empower SaaS startups to operationalize ML and AI at cloud-scale using
          vendor-agnostic, open-source tooling.
        </p>
        <p>
          We do things differently. We are not a traditional consulting firm. We work
          on a sprint by sprint basis, allowing you to engage us for specific projects
          without the need for long-term contracts. This approach ensures that you get
          the expertise you need when you need it, without the overhead of a full-time
          engagement.
        </p>
        <p>
          By using open-source tooling, we help you avoid vendor lock-in and
          ensure that your infrastructure is flexible and adaptable to your needs.
          Our team has extensive experience in building and deploying ML and AI
          infrastructure, and we are committed to helping you achieve your goals.
        </p>
      </section>

      <section className="section">
        <h2>Ready to Get Started?</h2>
        <p>
          Check out our <Link href="/services">services</Link> or{' '}
          <Link href="/contact">get in touch</Link> to learn more about how we can help you.
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
