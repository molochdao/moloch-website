import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Head from "@docusaurus/Head";
import Newsletter from "../components/Newsletter";
import styles from "./pages.module.scss";

const page_meta = {
  title: "Become A Member of MolochDAO",
  description:
    "Help beat the tragedy of the commons, with collective action for the public good. Learn more about becoming a member of MolochDAO.",
};

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={page_meta.title} description={page_meta.description}>
      <Head>
        <title>{page_meta.title}</title>
        <meta property="og:title" content={page_meta.title} />
        <meta name="description" content={page_meta.description} />
        <meta property="og:description" content={page_meta.description} />
      </Head>
      <div className={styles.page}>
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
                    className="button moloch-button button--primary"
                    href="https://app.daohaus.club/dao/0x1/0x519f9662798c2e07fbd5b30c1445602320c5cf5b"
                    target="_blank"
                  >
                    Launch App
                  </a>
                  <a
                    className="button moloch-button button--secondary"
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
                  <div className="contain-img">
                    <img src="img/content/Group 3.jpg" alt="" />
                  </div>
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
                      className="button moloch-button button--secondary"
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
        <section className="">
          <div className="container moloch-padding--xl">
            <div className="row">
              <div className="text col col--7">
                <h3>
                  We exist to eliminate societal patterns of optimizing for the
                  individual at the cost of the collective.
                </h3>
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
                    will slay the demon.
                  </p>
                </div>
                <div className="ctas">
                  <a
                    target="_blank"
                    className="button moloch-button button--secondary"
                    href="https://github.com/MolochVentures/Whitepaper/raw/master/Whitepaper.pdf"
                  >
                    Read Whitepaper
                  </a>
                </div>
              </div>
              <div className="img col col--5">
                <div className="contain-img">
                  <img src="img/content/Group 5.jpg" alt="" />
                </div>
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
                  <h2 className="moloch-margin--md">
                    So You Still Want to Join?
                  </h2>
                  <div className="text">
                    <p>
                      Do you have what it takes to slay the demon who falsely
                      promises the actualization of your shallow desires for
                      power and wealth?
                    </p>
                    <p>I thought so!</p>
                  </div>
                  <h4 className="moloch-margin--md">
                    There are a few ways to join our DAO:
                  </h4>
                  <div className="content-cards">
                    <div className="content-card">
                      <div className="top">
                        <div className="icon">
                          <img src="img/icon-dollarsign.svg" alt="" />
                        </div>
                        <h5>Pledge</h5>
                      </div>
                      <div className="content">
                        <p>Pledge 10-100 wETH</p>
                        <p>
                          <a href="https://app.daohaus.club/dao/0x1/0x519f9662798c2e07fbd5b30c1445602320c5cf5b">
                            Visit MolochDAO to pledge
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="content-card">
                      <div className="top">
                        <div className="icon">
                          <img src="img/icon-pen.svg" alt="" />
                        </div>
                        <h5>Share</h5>
                      </div>
                      <div className="content">
                        <p>Share your proposal here & request sponsorship</p>
                        <p>
                          <a href="https://forum.daohaus.club/c/moloch-rises">
                            Visit the MolochDAO Discourse forum
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="content-card">
                      <div className="top">
                        <div className="icon">
                          <img src="img/icon-thumbsup.svg" alt="" />
                        </div>
                        <h5>Propose</h5>
                      </div>
                      How to submit a funding proposal
                      <div className="content">
                        <p>Get DAO membership via a grant from MolochDAO</p>
                        <p>
                          <a href="/project-grants">
                            How to submit a funding proposal
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="content-card">
                      <div className="top">
                        <div className="icon">
                          <img src="img/icon-envelope.svg" alt="" />
                        </div>
                        <h5>Contact</h5>
                      </div>
                      <div className="content">
                        <p>
                          Get involved and do work for the DAO to earn your way
                          in
                        </p>
                        <p>
                          <a href="">
                            Contact a member of the ReallyBoringGuild
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="moloch-margin--md"></div>
                  <div className="ctas">
                    <a
                      className="button moloch-button button--secondary"
                      href="http://localhost:3000/docs/DAO-member-policies/how-to-join-molochdao"
                    >
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
          <div className="moloch-margin--xl"></div>
          <div className="container moloch-padding-xl">
            <div className="row">
              <div className="col">
                <h2 className="centered moloch-margin--lg">
                  How To Get Started
                </h2>
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
