import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Head from "@docusaurus/Head";
import Newsletter from "../components/Newsletter";
import styles from "./pages.module.scss";

const page_meta = {
  title: "Ethereum Project Grant Funding From MolochDAO",
  description:
    "MolochDAO exists to fund and further the development of public infrastructure related to Eth 2.0. Want to make an impact? Apply for a grant.",
};

const projects = [
  {
    title: "Stereum Ethereum Node Setup",
    year: 2021,
    amount: "$50,000",
    type: "Ecosystem Development",
    subject: "Scalability",
  },
  {
    title: "Sybil Resistance",
    year: 2021,
    amount: "$100,000",
    type: "Ecosystem Development",
    subject: "Security",
  },
  {
    title: "Ethereum Cat Herders",
    year: 2021,
    amount: "$10,000",
    type: "Ecosystem Development",
    subject: "Coordination",
  },
  {
    title: "MetaMoloch - M1 Grant Proposal",
    year: 2021,
    amount: "$20,170",
    type: "Ecosystem Development",
    subject: "Grant Matching",
  },
  {
    title: "TrueBlocks",
    year: 2021,
    amount: "$75,000",
    type: "ETH Ecosystem Development",
    subject: "dAPP",
  },
  {
    title: "Apache Tuweni",
    year: 2021,
    amount: "$50,000",
    type: "ETH Ecosystem Development",
    subject: "Scalability",
  },
  {
    title: "Umbra Protocol",
    year: 2021,
    amount: "$100,000",
    type: "ETH Ecosystem Development",
    subject: "Privacy",
  },
  {
    title: "Death Guild",
    year: 2021,
    amount: "$26,650",
    type: "General Crypto Development",
    subject: "Governance & Treasury Management",
  },
  {
    title: "Really Boring Guild",
    year: 2021,
    amount: "$56,400",
    type: "Moloch DAO - Internal",
    subject: "DAO Management",
  },
  {
    title: "Ethereum Cat Herders Note Taking Proposal",
    year: 2021,
    amount: "$10,000",
    type: "ETH Ecosystem Development",
    subject: "Scalability",
  },
  {
    title: "Neue UX",
    year: 2021,
    amount: "$23,000",
    type: "ETH Ecosystem Development",
    subject: "UX",
  },
  {
    title: "Ethereum Cat Herders",
    year: 2020,
    amount: "$45,000",
    type: "ETH Ecosystem Development",
    subject: "Scalability",
  },
  {
    title: "Moloch DAO - Guild System Proposal",
    year: 2020,
    amount: "$30,000",
    type: "Moloch DAO - Internal",
    subject: "DAO Management",
  },
  {
    title: "Moloch DAO Operations",
    year: 2020,
    amount: "$1,150",
    type: "Moloch DAO - Internal",
    subject: "DAO Management",
  },
  {
    title: "DAppNode ETH 2.0 Validator",
    year: 2020,
    amount: "$35,000",
    type: "ETH 2.0 Development",
    subject: "Scalability",
  },
  {
    title: "Ethereum Cat Herders Note Taking Proposal",
    year: 2020,
    amount: "$30,000",
    type: "ETH Ecosystem Development",
    subject: "Scalability",
  },
  {
    title: "Moloch Operations",
    year: 2020,
    amount: "$1,200",
    type: "Moloch DAO - Internal",
    subject: "DAO Management",
  },
  {
    title: "The ETH 2.0 Book",
    year: 2020,
    amount: "$12,500",
    type: "ETH Ecosystem Development",
    subject: "Comms",
  },
  {
    title: "ETH 2.0 Econ Audit",
    year: 2020,
    amount: "$40,500",
    type: "ETH 2.0 Development",
    subject: "Security",
  },
  {
    title: "Tornado Cash Trusted Setup Audit",
    year: 2020,
    amount: "$50,000",
    type: "ETH Ecosystem Development",
    subject: "Privacy",
  },
  {
    title: "Tornado Cash Trusted Setup",
    year: 2020,
    amount: "$10,000",
    type: "ETH Ecosystem Development",
    subject: "Privacy",
  },
  {
    title: "Moloch v1/v2 Security Review",
    year: 2020,
    amount: "$5,000",
    type: "Moloch DAO - Internal",
    subject: "DAO Management",
  },
  {
    title: "Optimistic Rollup Report",
    year: 2020,
    amount: "$2,000",
    type: "ETH Ecosystem Development",
    subject: "Comms",
  },
  {
    title: "Moloch 2019 Year in Review Post",
    year: 2020,
    amount: "$500",
    type: "Moloch DAO - Internal",
    subject: "Comms",
  },
  {
    title: "Moloch v2 Unit Testing",
    year: 2020,
    amount: "$6,125",
    type: "Moloch DAO - Internal",
    subject: "Security",
  },
  {
    title: "Moloch DAO Operations",
    year: 2019,
    amount: "$2,400",
    type: "Moloch DAO - Internal",
    subject: "DAO Management",
  },
  {
    title: "Moloch v2 Unit Testing",
    year: 2019,
    amount: "$6,125",
    type: "Moloch DAO - Internal",
    subject: "Security",
  },
  {
    title: "Year of DAOs: Moloch Rises",
    year: 2019,
    amount: "$2,700",
    type: "Moloch DAO - Internal",
    subject: "Comms",
  },
  {
    title: "VMCAI 2020 Winter School",
    year: 2019,
    amount: "$7,500",
    type: "ETH Ecosystem Development",
    subject: "Security",
  },
  {
    title: "Lighthouse Security Review",
    year: 2019,
    amount: "$40,000",
    type: "ETH Ecosystem Development",
    subject: "Security",
  },
  {
    title: "Ethereum Cat Herders Note Taking",
    year: 2019,
    amount: "$3,000",
    type: "ETH Ecosystem Development",
    subject: "Comms",
  },
  {
    title: "State of the Mixers Report",
    year: 2019,
    amount: "$2,500",
    type: "ETH Ecosystem Development",
    subject: "Comms",
  },
  {
    title: "Upgrades to Tornado.Cash (ERC20 + Relayers Market)",
    year: 2019,
    amount: "$21,000",
    type: "ETH Ecosystem Development",
    subject: "Privacy",
  },
  {
    title: "Shipping Tornado.Cash",
    year: 2019,
    amount: "$15,000",
    type: "ETH Ecosystem Development",
    subject: "Privacy",
  },
  {
    title: "Moloch App Dev",
    year: 2019,
    amount: "$2,000",
    type: "Moloch DAO - Internal",
    subject: "DAO Management",
  },
  {
    title: "Moloch Operations",
    year: 2019,
    amount: "$2,400",
    type: "Moloch DAO - Internal",
    subject: "Comms",
  },
  {
    title: "ETH 2.0 Validator Client GUI",
    year: 2019,
    amount: "$29,760",
    type: "ETH 2.0 Development",
    subject: "Scalability",
  },
  {
    title: "CF/Magmo Audit",
    year: 2019,
    amount: "$19,000",
    type: "ETH Ecosystem Development",
    subject: "Security",
  },
  {
    title: "YangDAO Leadership",
    year: 2019,
    amount: "$500",
    type: "ETH Ecosystem Development",
    subject: "Comms",
  },
  {
    title: "YangDAO Dev",
    year: 2019,
    amount: "$2,000",
    type: "ETH Ecosystem Development",
    subject: "Comms",
  },
  {
    title: "YangDAO PM",
    year: 2019,
    amount: "$500",
    type: "ETH Ecosystem Development",
    subject: "Comms",
  },
  {
    title: "YangDAO Design",
    year: 2019,
    amount: "$500",
    type: "ETH Ecosystem Development",
    subject: "Comms",
  },
  {
    title: "ETH 2 Dev",
    year: 2019,
    amount: "$6,000",
    type: "ETH 2.0 Development",
    subject: "Scalability",
  },
  {
    title: "Coordinating Mixer Development and Funding",
    year: 2019,
    amount: "$2,000",
    type: "ETH Ecosystem Development",
    subject: "Privacy",
  },
  {
    title: "Web UI for Hopper Mixer",
    year: 2019,
    amount: "$20,000",
    type: "ETH Ecosystem Development",
    subject: "Privacy",
  },
  {
    title: "Open Grants Standards Dev",
    year: 2019,
    amount: "$4,200",
    type: "ETH Ecosystem Development",
    subject: "Scalability",
  },
  {
    title: "ETH 2 Dev",
    year: 2019,
    amount: "$6,000",
    type: "ETH 2.0 Development",
    subject: "Scalability",
  },
  {
    title: "MolochPool Audit / Tests",
    year: 2019,
    amount: "$4,000",
    type: "ETH Ecosystem Development",
    subject: "Security",
  },
  {
    title: "ETH 2 Dev",
    year: 2019,
    amount: "$6,000",
    type: "ETH 2.0 Development",
    subject: "Scalability",
  },
  {
    title: "Lead Web Developer",
    year: 2019,
    amount: "$3,000",
    type: "Moloch DAO - Internal",
    subject: "DAO Management",
  },
  {
    title: "ETH 2 Dev",
    year: 2019,
    amount: "$6,000",
    type: "ETH 2.0 Development",
    subject: "Scalability",
  },
  {
    title: "The State of ETH 2.0 Report",
    year: 2019,
    amount: "$3,000",
    type: "ETH 2.0 Development",
    subject: "Comms",
  },
];

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
                    href="https://molochdao.gitbook.io/handbook/grant-pipeline-procedures/how-and-when-to-put-a-proposal-on-chain/application"
                  >
                    Apply for Funding
                  </a>
                  <a
                    className="button moloch-button button--secondary"
                    href="#funding"
                  >
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
                <div className="img col col--5 ">
                  <div className="contain-img">
                    <img src="img/content/Group 2.jpg" alt="" />
                  </div>
                </div>
                <div className="text col col--6">
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
                    <a
                      className="button moloch-button button--secondary"
                      href="/annual-report"
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

        <section className="single-col">
          <div className="wrapper">
            <div className="container moloch-padding-xl">
              <div className="row">
                <div className="col">
                  <div className="moloch-margin--md"></div>
                  <h2 className="centered moloch-margin--md">
                    How to Get Funding
                  </h2>
                  <h4 className="centered moloch-margin--lg">
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
                  <div className="moloch-margin--md"></div>
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

        <section id="funding" className="funding">
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
                    {projects.map((project, index) => (
                      <div key={project.title + index} className="content-card">
                        <div className="top">
                          <div className="icon">
                            <img src="img/icon-dollarsign.svg" alt="" />
                          </div>
                          <h5>{project.title}</h5>
                        </div>
                        <div className="content">
                          <p>
                            {project.year}
                            <br />
                            {project.amount}
                            <br />
                            {project.type}
                            <br />
                            {project.subject}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* <div className="ctas">
                    <a className="button moloch-button button--secondary" href="#">
                      Learn More
                    </a>
                  </div> */}
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
