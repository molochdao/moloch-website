import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Head from "@docusaurus/Head";
import Newsletter from "../components/Newsletter";
import styles from "./pages.module.scss";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <Head>
        <title>MolochDAO: Project Grants</title>
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
      <div className={styles.page}>
        <section className="intro">
          <div className="container moloch-padding--lg">
            <div className="row">
              <div className="col centered">
                <h1 className="red">MolochDAO Project Grants</h1>
                <div className="text">
                  <p>
                    Want to make an impact? We’re here to help your project
                    succeed.
                  </p>
                </div>
                <div className="ctas">
                  <a className="button button--primary" href="#">
                    Apply for Funding
                  </a>
                  <a className="button button--secondary" href="#">
                    View Funded Projects
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
                  <img src="img/content/Group 2.jpg" alt="" />
                </div>
                <div className="text col col--7">
                  <h4>
                    Moloch serves as a foundational building block for the
                    advancement of Ethereum scalability and supports the
                    Ethereum ecosystem as a whole.
                  </h4>
                  <div className="text">
                    <p>
                      Since the launch of MolochDAO, we’ve seen over $1M (7,000+
                      ETH) in contributions from some of Ethereum’s largest
                      companies and community members.
                    </p>
                    <p>
                      We exist to fund and further the development of public
                      infrastructure related to Eth 2.0.
                    </p>
                    <p>$1,000,000 in grants is available each year.</p>
                  </div>
                  <div className="ctas">
                    <a className="button button--secondary" href="#">
                      View the 2021 Annual Report
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
              <div className="col col--6">
                <h3>Who We Fund</h3>
                <ul className="list-yes">
                  <li>
                    Individuals and projects dedicated to the advancement of
                    Ethereum blockchain
                  </li>
                  <li>Initiatives to improve Ethereum infrastructure</li>
                  <li>
                    Culture building projects that iterate upon the lore of a
                    global scale, cryptographically secured, parallel
                    computational network as the digital public good that will
                    facilitate the preservation of physical public goods.
                  </li>
                </ul>
              </div>
              <div className="col col--6">
                <h3>Who We Don't Fund</h3>
                <ul className="list-no">
                  <li>Shitcoins</li>
                  <li>Degens</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <div className="hr" />

        <section class="single-col">
          <div className="wrapper">
            <div className="container moloch-padding-xl">
              <div className="row">
                <div className="col">
                  <h2 className="centered">How to Get Funding</h2>
                  <h4 className="centered">
                    Here’s a quick overview of the grant proposal process.
                  </h4>
                  <ol className="list-big">
                    <li>
                      Get initial feedback from community members about your
                      project.
                    </li>
                    <li>
                      Jump on a video call to determine if your project is a
                      good fit for our grants.
                    </li>
                    <li>
                      Submit a proposal on-chain through the DAOHaus platform.
                    </li>
                    <li>
                      Get more feedback about the project before we commit to a
                      grant.
                    </li>
                  </ol>
                  <h4 className="centered">Interested? Find out more!</h4>
                  <p className="centered">
                    Get more feedback about the project before we commit to a
                    grant.
                  </p>
                  <div className="ctas centered">
                    <a className="button button--secondary" href="#">
                      Grant Proposal Process
                    </a>
                  </div>
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
                  <h2>Funded Projects</h2>
                  <div className="text">
                    <p>
                      Moloch DAO has awarded over $845,000 in grants since 2019.
                    </p>
                  </div>

                  <div className="content-cards">
                    <div className="content-card">
                      <div className="top">
                        <div className="icon">
                          <img src="img/icon-dollarsign.svg" alt="" />
                        </div>
                        <h5>Project Title</h5>
                      </div>
                      <div className="content">
                        <p>
                          2021
                          <br />
                          $5,000
                          <br />
                          Development Type
                          <br />
                          Subject Area
                        </p>
                      </div>
                    </div>

                    <div className="content-card">
                      <div className="top">
                        <div className="icon">
                          <img src="img/icon-dollarsign.svg" alt="" />
                        </div>
                        <h5>Project Title</h5>
                      </div>
                      <div className="content">
                        <p>
                          2021
                          <br />
                          $5,000
                          <br />
                          Development Type
                          <br />
                          Subject Area
                        </p>
                      </div>
                    </div>

                    <div className="content-card">
                      <div className="top">
                        <div className="icon">
                          <img src="img/icon-dollarsign.svg" alt="" />
                        </div>
                        <h5>Project Title</h5>
                      </div>
                      <div className="content">
                        <p>
                          2021
                          <br />
                          $5,000
                          <br />
                          Development Type
                          <br />
                          Subject Area
                        </p>
                      </div>
                    </div>

                    <div className="content-card">
                      <div className="top">
                        <div className="icon">
                          <img src="img/icon-dollarsign.svg" alt="" />
                        </div>
                        <h5>Project Title</h5>
                      </div>
                      <div className="content">
                        <p>
                          2021
                          <br />
                          $5,000
                          <br />
                          Development Type
                          <br />
                          Subject Area
                        </p>
                      </div>
                    </div>
                  </div>

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

        <Newsletter />
      </div>
    </Layout>
  );
}
