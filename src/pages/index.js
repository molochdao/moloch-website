import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import styles from './index.module.scss'
import Section from '../components/Section'

const content = {
  page_title: 'The Original Grant Giving DAO',
  sections: [
    {
      content:
        '<p>MolochDAO is a Decentralized Autonomous Organization, deployed on Ethereum mainnet. Members contribute capital with the sole intention of giving it all away to fund worthwhile public goods projects</p>',
      ctas: [
        {
          text: 'Launch App',
          link: 'https://app.daohaus.club/dao/0x1/0x519f9662798c2e07fbd5b30c1445602320c5cf5b',
          external: 'true',
        },
        {
          text: 'Learn More',
          link: '/docs',
        },
      ],
    },
    {
      title: 'Whom Do You Serve?',
      content: `
      <p>Wipe your brow and bandage your wounds, if you must, but do not indulge in deceptive ideologies of power and wealth. The future of humanity requires the sacrifice of your shallow desires, but it’s reward is the ultimate satisfaction.</p>
      <p>Moloch, the demon of child sacrifice, who makes you believe that you must take what you can get or go without, will be slain. Pledge your oath to his demise, or go down with him.</p>
      `,
      ctas: [
        {
          text: 'Read Manifesto',
          link: '/docs',
        },
      ],
    },
  ],
}
export default function Home() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout title={`Hello from ${siteConfig.title}`} description="Description will go into a meta tag in <head />">
      <div className={styles.homepage}>
        <div className="container padding-vert--xl">
          <h1 className="row">{content.page_title}</h1>
        </div>
        {content.sections.map((props, idx) => (
          <Section key={idx} {...props} />
        ))}
      </div>
    </Layout>
  )
}
