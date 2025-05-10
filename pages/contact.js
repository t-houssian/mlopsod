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
          <a href="mailto:thous@mlopsod.io">
            thous@mlopsod.io
          </a>
        </p>
      </section>
    </>
  )
}
