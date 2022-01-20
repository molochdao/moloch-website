import React from "react";
import styles from "./Newsletter.module.scss";
export default function Newsletter(props) {
  return (
    <section className={styles.newsletter}>
      <div className="container  moloch-padding--xl">
        <div className="row">
          <div className="col">
            <h2 className="red">
              Of Course There’s a Newsletter; You’re Welcome.
            </h2>
            <div className="text">
              Join the official MolochDAO newsletter to get notified about
              upcoming grant funding, recent projects and member events.
            </div>

            <div className="form">
              <form
                action="https://molochdao.us6.list-manage.com/subscribe/post?u=6a2d1b4767bae8cb22c1b8bd9&amp;id=f9117b00f3"
                method="post"
                target="_blank"
              >
                <input
                  type="email"
                  name="EMAIL"
                  id="EMAIL"
                  placeholder="me@example.com"
                />
                <button className="button button--primary">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
