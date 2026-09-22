import styles from './SolutionsSection.module.css';

const testimonials = [
  {
    name: 'Arvind Sanghvi',
    company: 'Arihant Infomatics',
    initials: 'AS',
    quote: 'Bizgenix brought greater structure and clarity to our everyday work. Information is easier to access, follow-ups are more organised and the team can move forward with confidence.',
  },
  {
    name: 'Ashok Sanghvi',
    company: 'Mahavir Traders',
    initials: 'AS',
    quote: 'As our work expanded, manual tracking became difficult. The new workflow gives us clearer ownership, better visibility and a simpler way to stay on top of every important action.',
  },
  {
    name: 'Bhavya',
    company: 'VS Associate',
    initials: 'B',
    quote: 'The solution fits the way our team actually works. It reduces repetitive effort and keeps client communication, responsibilities and day-to-day tasks better organised.',
  },
  {
    name: 'Chintan Shah',
    company: 'Linq Corporate Solutions',
    initials: 'CS',
    quote: 'We now have a more connected view of work across the business. The system helps our team collaborate better, act faster and spend less time searching for updates.',
  },
  {
    name: 'Dhaval Ukani',
    company: 'Aavkar Corporation',
    initials: 'DU',
    quote: 'From routine coordination to management visibility, the solution has made our process more consistent. We can follow progress clearly and respond without unnecessary delays.',
  },
  {
    name: 'Prachetan Bansal',
    company: 'Spectrum Dyes and Chemical Private Limited',
    initials: 'PB',
    quote: 'Bizgenix translated a complex requirement into a practical system. It brings the right information together and supports faster, clearer and more informed decisions.',
  },
];

function TestimonialCard({ testimonial, featured = false }: { testimonial: typeof testimonials[number]; featured?: boolean }) {
  return (
    <figure className={`${styles.card} ${featured ? styles.featured : ''}`}>
      <div className={styles.cardHeader}>
        <span className={styles.service}>Client experience</span>
        <span className={styles.company}>{testimonial.company}</span>
      </div>
      <span className={styles.quoteMark} aria-hidden="true">“</span>
      <blockquote><p>{testimonial.quote}</p></blockquote>
      <figcaption className={styles.client}>
        <span className={styles.avatar} aria-hidden="true">{testimonial.initials}</span>
        <div><strong>{testimonial.name}</strong><span>{testimonial.company}</span></div>
      </figcaption>
    </figure>
  );
}

export default function SolutionsSection() {
  return (
    <section className={styles.section} id="products" aria-labelledby="solutions-title">
      <div className={styles.inner}>
        <div className={styles.hero}>
          <div className={styles.copy}>
            <h2 id="solutions-title">Solutions our <em>clients trust</em></h2>
            <p>Businesses that trust Bizgenix to make everyday work clearer, faster and more connected.</p>
          </div>
        </div>
        <div className={styles.cards} id="solution-options" role="region" aria-label="Client experiences">
          <div className={styles.track}>
            <div className={styles.group}>
              {testimonials.map((testimonial, index) => <TestimonialCard key={testimonial.name} testimonial={testimonial} featured={index === 1 || index === 4} />)}
            </div>
            <div className={`${styles.group} ${styles.duplicate}`} aria-hidden="true">
              {testimonials.map((testimonial, index) => <TestimonialCard key={`${testimonial.name}-duplicate`} testimonial={testimonial} featured={index === 1 || index === 4} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
