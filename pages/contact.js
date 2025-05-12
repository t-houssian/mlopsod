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
          <a href="mailto:contact@mlopsod.io">
           contact@mlopsod.io
          </a>
        </p>
        <p>
          We will get back to you within 24 hours. Look forward to hearing from you!
        </p>
      </section>
    </>
  )
}
