import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Head from "@docusaurus/Head";
import Newsletter from "../components/Newsletter";
import styles from "./pages.module.scss";

const page_meta = {
  title: "Research Grant Funding From MolochDAO",
  description:
    "Love to research and report your findings? Help MolochDAO make informed decisions when providing projects with funding.",
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
                <h1 className="red">MolochDAO Project Grants</h1>
                <div className="text">
                  <p>
                    Want to make an impact? We’re here to help your project
                    succeed.
                  </p>
                </div>
                <div className="ctas">
                  <a
                    className="button moloch-button button--primary"
                    href="/docs/grant-pipeline-procedures/proposal-process/application"
                  >
                    Apply for Funding
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
                    <img src="img/content/Group 1.jpg" alt="" />
                  </div>
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
                    <a
                      className="button moloch-button button--secondary"
                      href="#"
                    >
                      View the 2021 Annual Report
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rip-bottom"></div>
        </section>

        <section class="single-col">
          <div className="wrapper">
            <div className="container moloch-padding-xl">
              <div className="row">
                <div className="col">
                  <h2 className="centered moloch-margin--lg">
                    How to Get Funding
                  </h2>
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
                  <h4 className="centered moloch-margin--sm">
                    Interested? Find out more!
                  </h4>
                  <p className="centered moloch-margin--md">
                    Get more feedback about the project before we commit to a
                    grant.
                  </p>
                  <div className="ctas centered moloch-margin--xl">
                    <a
                      className="button moloch-button button--secondary"
                      href="/docs/grant-pipeline-procedures/proposal-process/README"
                    >
                      Grant Proposal Process
                    </a>
                  </div>
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
