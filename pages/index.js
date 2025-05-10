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
        <h1>Premium MLOps & AI Consulting</h1>
        <p>
          Turnkey, open-source–based infrastructure deployments (Metaflow • Argo • Kubernetes)
          alongside AI integration advisory and JupyterHub enablement.
        </p>
        <Link href="/contact" className="btn-gold">
          Get in Touch
        </Link>
      </section>

      <section className="section">
        <h2>Our Mission</h2>
        <p>
          Empower SaaS startups to operationalize ML and AI at cloud-scale using
          vendor-agnostic, open-source tooling. Open transparency: all modules and
          templates are open-source.
        </p>
      </section>

      <section className="section">
        <h2>Rapid Agility • Sustainable Excellence • Collaborative Partnership</h2>
      </section>
    </>
  )
}
