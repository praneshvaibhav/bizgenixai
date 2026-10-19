
import styles from "./WhatIsBizgenixAI.module.css";

export default function WhatIsBizgenixAI() {
  return (
    <section
      id="about-bizgenix"
      className={`${styles.section} section`}
      aria-labelledby="about-bizgenix-title"
    >
      <div className={styles.content}>
        <p className={styles.eyebrow}>
          ABOUT BIZGENIX AI
        </p>

        <h2 id="about-bizgenix-title">
          What Is Bizgenix AI?
        </h2>

        <p className={styles.description}>
          Bizgenix AI helps businesses in India automate
          sales, customer service, HR, finance, and daily
          operations with AI agents, workflow automation,
          CRM systems, voice AI, and WhatsApp automation.
        </p>

        <p className={styles.description}>
          We build tailored AI solutions that streamline
          workflows and integrate with existing business
          systems.
        </p>

        <a href="/products" className={styles.link}>
          Explore Our AI Solutions
          <span aria-hidden="true">→</span>
        </a>
      </div>

      <div className={styles.visual} aria-hidden="true">
        <div className={styles.visualCard}>
          <span className={styles.icon}>✳</span>
          <p>AI-Powered</p>
          <h3>Smarter Business Operations</h3>

          <div className={styles.tags}>
            <span>AI Agents</span>
            <span>Automation</span>
            <span>Integrations</span>
          </div>
        </div>
      </div>
    </section>
  );
}
