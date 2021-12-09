import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.scss";
import Section from "../components/Section";
import Blog from "../components/Blog";

const content = {
  page_title: "The Original Grant Giving DAO",
  sections: [
    {
      content:
        "<p>MolochDAO is a Decentralized Autonomous Organization, deployed on Ethereum mainnet. Members contribute capital with the sole intention of giving it all away to fund worthwhile public goods projects</p>",
      ctas: [
        {
          text: "Launch App",
          link: "https://app.daohaus.club/dao/0x1/0x519f9662798c2e07fbd5b30c1445602320c5cf5b",
          external: "true",
        },
        {
          text: "Learn More",
          link: "/docs",
        },
      ],
    },
    {
      title: "Whom Do You Serve?",
      content: `
      <p>Wipe your brow and bandage your wounds, if you must, but do not indulge in deceptive ideologies of power and wealth. The future of humanity requires the sacrifice of your shallow desires, but it’s reward is the ultimate satisfaction.</p>
      <p>Moloch, the demon of child sacrifice, who makes you believe that you must take what you can get or go without, will be slain. Pledge your oath to his demise, or go down with him.</p>
      `,
      ctas: [
        {
          text: "Read Manifesto",
          link: "/docs",
        },
      ],
    },
  ],
};
export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <div className={styles.homepage}>
        <section className="intro">
          <div className="container padding-top--lg padding-bottom--lg">
            <div className="row">
              <div className="col centered">
                <h1 className="red">
                  The Original Grant <br />
                  Giving DAO
                </h1>
                <div className="text">
                  <p>
                    MolochDAO is a Decentralized Autonomous Organization,
                    deployed on Ethereum mainnet. Members contribute capital
                    with the sole intention of giving it all away to fund
                    Ethereum infrastructure as an essential digital public good.
                  </p>
                </div>
                <div className="ctas">
                  <a className="button button--primary" href="">
                    Launch App
                  </a>
                  <a className="button button--secondary" href="">
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
            <div className="container padding-top--lg padding-bottom--lg">
              <div className="row">
                <div className="text col col--7">
                  <h2>Whom Do You Serve?</h2>
                  <div className="text">
                    <p>
                      Wipe your brow and bandage your wounds, if you must, but
                      do not indulge in deceptive and selfish ideologies. The
                      future of humanity requires the sacrifice of your shallow
                      desires, but it’s reward is the head of Moloch himself.
                    </p>
                    <p>
                      This demon god of coordination failure, who consumes our
                      future potential for perverse immediate gain, will be
                      slain. Pledge your oath to his demise, or go down with
                      him.
                    </p>
                  </div>
                  <div className="ctas">
                    <a className="button button--secondary" href="">
                      Read Manifesto
                    </a>
                  </div>
                </div>
                <div className="img col col--5">
                  <img src="img/content/moloch1.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="blood-bottom"></div>
        </section>
        <section className="join">
          <div className="container padding-top--xl padding-bottom--xl">
            <div className="row">
              <div className="col centered">
                <h2 className="red">DEMON BLOOD LOOKS GOOD ON YOU</h2>
                <div className="text">
                  <p>
                    Member participation is vital to slaying web3 demons for the
                    public good. Join us on Twitter and Discord to make your
                    voice heard.
                  </p>
                </div>
                <div className="ctas">
                  <a className="button button--primary" href="">
                    Join Discord
                  </a>
                  <a className="button button--primary" href="">
                    Join Twitter
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="hr" />
        <section className="manifesto-2">
          <div className="container padding-top--xl padding-bottom--xl">
            <div className="row">
              <div className="text col col--6">
                <h2>Be a Part of Something Meaningful️</h2>
                <div className="text">
                  <p>
                    Becoming a member of MolochDAO signals your commitment to
                    fund regenerative infrastructure and digital public goods
                    that will eventually lay the foundation for physical public
                    goods.{" "}
                  </p>
                  <p>
                    Decentralized and open source, the voting power of every
                    member helps the community make a meaningful impact.
                  </p>
                </div>
                <div className="ctas">
                  <a className="button button--secondary" href="">
                    Read Manifesto
                  </a>
                </div>
              </div>
              <div className="img col col--6">
                <img src="img/content/Team-Picture.jpg" alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="funding angle-up-top angle-down-bottom">
          <div className="wrapper bg-red circle-pattern">
            <div className="container padding-top--xl padding-bottom--xl">
              <div className="row">
                <div className="col centered">
                  <h2>Request Funding</h2>
                  <div className="text">
                    <p>
                      MolochDAO has $1M+ to dispense every year. As a grant
                      giving DAO, our sole purpose is to fund projects that make
                      an impact to the Ethereum ecosystem. If you are
                      contributing knowledge via research reports or building
                      tools in service of the public good, we want to hear from
                      you.
                    </p>
                  </div>
                  <div className="ctas">
                    <a className="button button--secondary" href="">
                      Project Grants
                    </a>
                    <a className="button button--secondary" href="">
                      Research Grants
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="annual-report">
          <div className="container padding-top--xl padding-bottom--md">
            <div className="row">
              <div className="text col col--6">
                <h2 className="red">2021 Has Been Quite The Year!</h2>
                <div className="text">
                  <p>
                    Read our annual report to see what we’ve been up to in 2021,
                    which projects we’ve funded, and what you can expect in
                    2022.
                  </p>
                </div>
                <div className="ctas">
                  <a className="button button--primary" href="">
                    View Annual Report
                  </a>
                </div>
              </div>
              <div className="img col col--6">
                <img src="img/content/Running.jpg" alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="blog">
          <div className="angle-top-down"></div>
          <div className="wrapper bg-red">
            <div className="container padding-top--xl padding-bottom-xl">
              <div className="row">
                <div className="col">
                  <h2>Satisfy Your Thirst For More</h2>
                </div>
              </div>
              <div className="row">
                <div className="col col--4">
                  <h3>MolochDAO Blog</h3>
                  <div className="description">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Voluptas corrupti aliquam ipsum officia tenetur, magnam
                    nihil velit!
                  </div>
                  <div className="post">
                    <Blog account="molochdao" limit={1} />
                  </div>
                  <div className="read-all">
                    <a href="">Read All</a>
                  </div>
                </div>

                <div className="col col--4">
                  <h3>Ethereum Cat Herders</h3>
                  <div className="description">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Voluptas corrupti aliquam ipsum officia tenetur, magnam
                    nihil velit!
                  </div>
                  <div className="post">
                    <Blog account="ethereum-cat-herders" limit={1} />
                  </div>
                  <div className="read-all">
                    <a href="">Read All</a>
                  </div>
                </div>

                <div className="col col--4">
                  <h3>Death Guild</h3>
                  <div className="description">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Voluptas corrupti aliquam ipsum officia tenetur, magnam
                    nihil velit!
                  </div>
                  <div className="post">
                    <Blog account="@traviswyche" limit={1} />
                  </div>
                  <div className="read-all">
                    <a href="">Read All</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rip-bottom"></div>
        </section>
        <section className="newsletter">
          <div className="container padding-top--md padding-bottom--xl">
            <div className="row">
              <div className="col">
                <h2 className="red">
                  Of Course There’s a Newsletter; You’re Welcome.
                </h2>
                <div className="text">
                  Join the official MolochDAO newsletter to get notified about
                  upcoming grant funding, recent projects, and member events.
                </div>
                <div className="form">
                  <form>
                    <input type="email" name="" id="" />
                    <button className="button button--primary">
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <div className="container padding-vert--xl">
          <h1 className="row">{content.page_title}</h1>
        </div>
        <Blog account="molochdao" limit={1} />
        <Blog account="ethereum-cat-herders" limit={1} />
        <Blog account="@traviswyche" limit={1} />

        {content.sections.map((props, idx) => (
          <Section key={idx} {...props} />
        ))} */}
      </div>
    </Layout>
  );
}
