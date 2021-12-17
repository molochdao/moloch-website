import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.scss";
import Section from "../components/Section";
import Blog from "../components/Blog";
import Head from "@docusaurus/Head";

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

const mailchimp_form = `
<!-- Begin Mailchimp Signup Form -->
<div id="mc_embed_signup">
<form action="https://molochdao.us6.list-manage.com/subscribe/post?u=6a2d1b4767bae8cb22c1b8bd9&amp;id=f9117b00f3" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
    <div id="mc_embed_signup_scroll">
<div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
<div class="mc-field-group">
	<label for="mce-EMAIL">Email Address  <span class="asterisk">*</span>
</label>
	<input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
</div>
<div class="mc-field-group">
	<label for="mce-FNAME">First Name </label>
	<input type="text" value="" name="FNAME" class="" id="mce-FNAME">
</div>
<div class="mc-field-group">
	<label for="mce-LNAME">Last Name </label>
	<input type="text" value="" name="LNAME" class="" id="mce-LNAME">
</div>
<div class="mc-field-group size1of2">
	<label for="mce-BIRTHDAY-month">Birthday </label>
	<div class="datefield">
		<span class="subfield monthfield"><input class="birthday " type="text" pattern="[0-9]*" value="" placeholder="MM" size="2" maxlength="2" name="BIRTHDAY[month]" id="mce-BIRTHDAY-month"></span> / 
		<span class="subfield dayfield"><input class="birthday " type="text" pattern="[0-9]*" value="" placeholder="DD" size="2" maxlength="2" name="BIRTHDAY[day]" id="mce-BIRTHDAY-day"></span> 
		<span class="small-meta nowrap">( mm / dd )</span>
	</div>
</div>	<div id="mce-responses" class="clear foot">
		<div class="response" id="mce-error-response" style="display:none"></div>
		<div class="response" id="mce-success-response" style="display:none"></div>
	</div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_6a2d1b4767bae8cb22c1b8bd9_f9117b00f3" tabindex="-1" value=""></div>
        <div class="optionalParent">
            <div class="clear foot">
                <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button">
            </div>
        </div>
    </div>
</form>
</div>

<!--End mc_embed_signup-->

`;
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
                    <a
                      className="button button--secondary"
                      href="/docs/Vision%20&%20Values/manifesto"
                    >
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
                  <a
                    className="button button--primary"
                    href="https://discord.com/invite/PxrnEUsbef"
                    target="_blank"
                  >
                    Join Discord
                  </a>
                  <a
                    className="button button--primary"
                    href="https://twitter.com/molochdao"
                    target="_blank"
                  >
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
                  <a
                    className="button button--secondary"
                    href="/docs/Vision%20&%20Values/manifesto"
                  >
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
                    <a
                      className="button button--secondary"
                      href="/project-grants"
                    >
                      Project Grants
                    </a>
                    <a
                      className="button button--secondary"
                      href="/research-grants"
                    >
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
                  <a className="button button--primary" href="#">
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
                    From the summoning of the DAO, the first of its kind,
                    through cycles of grants, to the slaying of Moloch. Let's
                    get to work.
                  </div>
                  <div className="post">
                    <Blog account="molochdao" limit={1} />
                  </div>
                  <div className="read-all">
                    <a href="https://molochdao.medium.com/" target="_blank">
                      Read All
                    </a>
                  </div>
                </div>

                <div className="col col--4">
                  <h3>Ethereum Cat Herders</h3>
                  <div className="description">
                    Decentralized project management contributions to the growth
                    and development of the Ethereum ecosystem.
                  </div>
                  <div className="post">
                    <Blog account="ethereum-cat-herders" limit={1} />
                  </div>
                  <div className="read-all">
                    <a
                      href="https://medium.com/ethereum-cat-herders"
                      target="_blank"
                    >
                      Read All
                    </a>
                  </div>
                </div>

                <div className="col col--4">
                  <h3>Death Guild</h3>
                  <div className="description">
                    Questioning the models we take for granted regarding
                    governance, treasury management and privacy.
                  </div>
                  <div className="post">
                    <Blog account="@traviswyche" limit={1} />
                  </div>
                  <div className="read-all">
                    <a href="https://medium.com/@traviswyche" target="_blank">
                      Read All
                    </a>
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
                <div
                  className="mailchimp-form"
                  dangerouslySetInnerHTML={{ __html: mailchimp_form }}
                ></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
