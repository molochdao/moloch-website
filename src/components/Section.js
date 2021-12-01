import React from 'react'
import clsx from 'clsx'
import styles from './Section.module.scss'
export default function Section(props) {
  return (
    <section className={clsx('padding-vert--xl', styles.section)}>
      <div className="container">
        <div className="row">
          {props.title && <h2>{props.title}</h2>}
          {props.content && <div dangerouslySetInnerHTML={{ __html: props.content }} />}
        </div>
        {props.ctas && (
          <div className="row ctas">
            {props.ctas.map((props, idx) => (
              <a className={clsx('button button--primary', styles.cta)} href={props.link} target={props.external ? '_blank' : ''} key={idx}>
                {props.text}
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
