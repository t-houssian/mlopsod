import Head from 'next/head'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact – MLOps On Demand</title>
      </Head>

      <section className="section">
        <h2>Contact Us</h2>
        <p>Ready to accelerate your MLOps journey? Reach out:</p>
        <p>
          Email:{' '}
          <a href="mailto:contact@mlopsondemand.com">
            contact@mlopsondemand.com
          </a>
        </p>
        <p>
          LinkedIn:{' '}
          <a href="https://www.linkedin.com/company/mlopsondemand">
            /company/mlopsondemand
          </a>
        </p>
      </section>
    </>
  )
}
