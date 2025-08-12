import Head from 'next/head'
import Script from 'next/script'

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
          <a href="mailto:mlopsod@gmail.com">
           mlopsod@gmail.com
          </a>
        </p>
        <p>
          We will get back to you within 24 hours. Look forward to hearing from you!
        </p>
      </section>

      {/* Direct Email Scheduling */}
      <Head>
        <title>Schedule a Meeting – MLOps On Demand</title>
      </Head>
      <section className="section">
        <h2>Pick a Time on Our Calendar</h2>
        <iframe
          src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3o3P3ZFe9hsGk3PSFzhSb7Jvlu-4KXjJnjSnu_Fh7XyfxMQ-vmOAJc8S7woPK1TCLLCHkP2_Gm?gv=true"
          style={{ width: '100%', height: '800px', border: 0 }}
          loading="lazy"
        />
      </section>
    </>
  )
}
