import Head from 'next/head'

export default function Bio() {
  return (
    <>
      <Head>
        <title>Bio – MLOps On Demand</title>
      </Head>

      {/* CEO */}
      <section className="section bio-section">
        <div className="bio-photo">
          <img src="/photos/tyler-potts.jpeg" alt="Tyler Potts" />
        </div>
        <div className="bio-text">
          <h2>Tyler Potts — CEO</h2>
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
      </section>

      {/* CTO */}
      <section className="section bio-section">
        <div className="bio-photo">
          <img src="/photos/tyler-houssian.jpeg" alt="Tyler Houssian" />
        </div>
        <div className="bio-text">
          <h2>Tyler Houssian — CTO</h2>
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

      {/* COO */}
      <section className="section bio-section">
        <div className="bio-photo">
          <img src="/photos/sarah-stanton.jpg" alt="Sarah Stanton" />
        </div>
        <div className="bio-text">
          <h2>Sarah Stanton — COO</h2>
          <p>
            I am an up-and-coming business operations expert. New to tech but a keen learner.
          </p>
          <p>
            I'm known for implementing lean methodologies and cross-functional collaboration,
            workflows, budgets, and resource allocation.
          </p>
          <p>
            I studied aerospace engineering and am rapidly expanding my
            skills in data science and machine learning.
            I am passionate about building the processes that power next-generation AI
            solutions at scale.
          </p>
        </div>
      </section>
    </>
  )
}
