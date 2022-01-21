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
                  <img src="img/content/Group 1.jpg" alt="" />
                </div>
                <div className="text col col--7">
                  <h2>Seeking Unbiased Researchers</h2>
                  <div className="text">
                    <p>
                      Would you like to contribute to one of the research
                      reports we have planned right now? If so,
                      ReallyBoringGuild (an internal group of MolochDAO) can
                      provide you with a $2,000 to $5,000 USD grant to produce
                      that report within a 4 to 8 week period.
                    </p>
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

        <section>
          <div className="container moloch-padding-xl">
            <div className="row">
              <div className="col">
                <h2>How to Get Funding</h2>
                <ol className="list-big">
                  <li>
                    Get initial feedback from community members about your
                    project.
                  </li>
                  <li>
                    Jump on a video call to determine if your project is a good
                    fit for our grants.
                  </li>
                  <li>
                    Submit a proposal on-chain through the DAOHaus platform.
                  </li>
                  <li>
                    Get more feedback about the project before we commit to a
                    grant.
                  </li>
                </ol>
                <h4>Interested? Find out more!</h4>
                <p>
                  Get more feedback about the project before we commit to a
                  grant.
                </p>
                <div className="ctas">
                  <a className="button button--secondary" href="#">
                    Grant Proposal Process
                  </a>
                </div>
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
