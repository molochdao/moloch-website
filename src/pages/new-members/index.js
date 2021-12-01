import React from 'react'
import Layout from '@theme/Layout'
import styles from './styles.module.scss'

function Hello() {
  return (
    <Layout title="Hello">
      <div className={styles.main}>
        <h1>New Members</h1>
      </div>
    </Layout>
  )
}

export default Hello
