import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Head from "@docusaurus/Head";
import Newsletter from "../components/Newsletter";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <Head>
        <title>MolochDAO: The Original Grant Giving DAO</title>
        <meta
          property="og:title"
          content="MolochDAO: The Original Grant Giving DAO"
        />
        <meta
          name="description"
          content="MolochDAO is a grant giving Decentralized Autonomous Organization, deployed on Ethereum mainnet, to fund essential digital public goods."
        />
        <meta
          property="og:description"
          content="MolochDAO is a grant giving Decentralized Autonomous Organization, deployed on Ethereum mainnet, to fund essential digital public goods."
        />
      </Head>
      <div>
        <section className="intro">
          <div className="container moloch-padding--lg">
            <div className="row">
              <div className="col centered">
                <h1 className="red">
                  Welcome <br />
                  Mercenaries of
                  <br />
                  MolochDAO
                </h1>
                <div className="text">
                  <p>
                    Help beat the tragedy of the commons, with collective action
                    for the public good.z
                  </p>
                </div>
                <div className="ctas">
                  <a
                    className="button button--primary"
                    href="https://app.daohaus.club/dao/0x1/0x519f9662798c2e07fbd5b30c1445602320c5cf5b"
                    target="_blank"
                  >
                    Launch App
                  </a>
                  <a
                    className="button button--secondary"
                    href="/docs/Introduction/wtf-is-moloch"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="manifesto">
          <div className="rip-top"></div>
          <div className="wrapper bg-red">
            <div className="container moloch-padding--lg">
              <div className="row">
                <div className="img col col--5">
                  <img src="img/content/Group 3.jpg" alt="" />
                </div>
                <div className="text col col--7">
                  <h2>Don’t Say We Didn’t Warn You</h2>
                  <div className="text">
                    <p>
                      MolochDAO is a grant giving decentralized autonomous
                      organization (DAO), where every member has voting power,
                      as opposed to a small group of investors making all the
                      decisions.
                    </p>
                    <p>
                      As a group of resilient optimists, who laugh in the face
                      of Moloch and display battle scars with pride, members
                      contribute their own capital to fund projects that further
                      the development of public goods in the Ethereum ecosystem.
                      Copy
                    </p>
                  </div>
                  <div className="ctas">
                    <a
                      className="button button--secondary"
                      href="/docs/vision-and-values/manifesto"
                    >
                      Read Manifesto
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rip-bottom"></div>
        </section>
        <section className="join">
          <div className="container moloch-padding--xl">
            <div className="row">
              <div className="text col col--7">
                <h2>
                  We exist to eliminate societal patterns of optimizing for the
                  individual at the cost of the collective.
                </h2>
                <div className="text">
                  <p>
                    The demon, Moloch, prevents collective action, misaligning
                    individual incentives with what is beneficial for all of
                    humanity.
                  </p>
                  <p>
                    MolochDAO provides funding in the form of grants for digital
                    public infrastructure. An individual’s cost to develop this
                    infrastructure is disproportionate to how they will benefit
                    from it, which is why members reject any intention for
                    investment return.
                  </p>
                  <p>
                    In incentivizing coordination with grant funding, the DAO
                    will slay the demon.z
                  </p>
                </div>
                <div className="ctas">
                  <a
                    className="button button--secondary"
                    href="/docs/vision-and-values/manifesto"
                  >
                    Read Manifesto
                  </a>
                </div>
              </div>
              <div className="img col col--5">
                <img src="img/content/Group 5.jpg" alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className="funding">
          <div className="angle-top-up" />

          <div className="wrapper bg-red">
            <div className="container moloch-padding--xl">
              <div className="row">
                <div className="col centered">
                  <h2>So You Still Want to Join?</h2>
                  <div className="text">
                    <p>
                      Do you have what it takes to slay the demon who falsely
                      promises the actualization of your shallow desires for
                      power and wealth?
                    </p>
                    <p>I thought so!</p>
                  </div>
                  <h3>There are a few ways to join our DAO:</h3>
                  <div className="content-cards">Content Cards</div>
                  <div className="ctas">
                    <a className="button button--secondary" href="#">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="angle-bottom-down" />
        </section>

        <section>
          <div className="container moloch-padding-xl">
            <div className="row">
              <div className="col">
                <h2>How to get started</h2>
                <ol className="list-big">
                  <li>
                    Read through our mission and values, vision of Web 3, and
                    underlying beliefs.
                  </li>
                  <li>
                    Join our Discord chat and familiarize yourself with our core
                    values.
                  </li>
                  <li>Tell us how you want to get involved!</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        <div className="hr" />
        <Newsletter />
      </div>
    </Layout>
  );
}