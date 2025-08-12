import Head from 'next/head'

export default function Bio() {
  return (
    <>
      <Head>
        <title>Bio – MLOps On Demand</title>
      </Head>

      {/* CEO/CTO */}
      <section className="section bio-section">
        <div className="bio-photo">
          <img src="/photos/tyler-houssian.jpeg" alt="Tyler Houssian" />
        </div>
        <div className="bio-text">
          <h2>Tyler Houssian — CEO/CTO</h2>
          <p>
            I’m an MLOps Specialist with 6 years of experience, currently leading MLOps at DTN.
            I specialize in building ML infrastructure and know how to leverage technology to
            efficiently execute business strategies.
          </p>
          <p>
            My daily toolkit includes Kubernetes, Metaflow, AWS, Terraform, Argo, Python, React,
            and Helm. I also maintain a keen understanding of AI tooling and how to integrate it
            seamlessly.
          </p>
          <p>
            At DTN, I helped architect and support a data-science platform used by dozens of
            scientists to build and run cutting-edge products in the weather, agriculture,
            and energy sectors.
          </p>
          <p>
            Prior to that, I spent 5 years at fintech startup Saveday, where I designed and
            built a back-office system providing critical financial tools including investment
            management and account opening workflows.
          </p>
        </div>
      </section>

      {/* Infrastructure Specialist
      <section className="section bio-section">
        <div className="bio-photo">
          <img src="/photos/tyler-potts.jpeg" alt="Tyler Potts" />
        </div>
        <div className="bio-text">
          <h2>Tyler Potts — Infrastructure Specialist</h2>
          <p>
            I am passionate about problem-solving and finding solutions that make a difference.
            Whether it’s researching neuronal proteins, processing large datasets, or managing
            technical teams, I consistently ask two key questions: “why?” and “how?”
          </p>
          <p>
            My background in Neuroscience provided me with a strong foundation in analytical
            thinking and solution methodologies. Transitioning into the Python scientific
            computing world, I discovered the transformative potential of open-source software.
          </p>
          <p>
            Over the years, I have leveraged open-source tooling to build robust infrastructures
            that empower data scientists to tackle complex computing challenges. I have
            successfully architected and deployed infrastructure for the Air Force, Nebari,
            and DTN.
          </p>
        </div>
      </section> */}

      {/* Delivery Architect */}
      <section className="section bio-section">
        <div className="bio-photo">
          <img src="/photos/jacob-houssian.jpeg" alt="Jacob Houssian" />
        </div>
        <div className="bio-text">
          <h2>Jacob Houssian — Delivery Architect</h2>
          <p>
            I’m a full-stack “architect-builder” who turns designs into production systems—fast.
            I stand up AI chatbots, wire complex APIs, and take ideas from whiteboard to cloud
            using proven, vendor-agnostic tooling.
          </p>
          <p>
            My toolkit spans backend and frontend: Node.js, Python, TypeScript, Next.js/React,
            Postgres, Redis, Docker, Kubernetes, Terraform, and AWS. I live in the command line,
            automate with Linux tooling, and ship clean CI/CD integrations.
          </p>
          <p>
            In our sprint-based model, I jump in where needed—designing service architectures,
            building REST endpoints, integrating LLMs and RAG pipelines, or polishing
            frontends—so you get exactly the expertise you need, when you need it.
          </p>
          <p>
            I cut my teeth as a lead programmer on a robotics team, learning to debug under
            pressure and ship reliable systems. That Swiss-army-knife mindset still drives me:
            pragmatic choices, open-source first, and results you can run and scale.
          </p>
        </div>
      </section>
    </>
  )
}
