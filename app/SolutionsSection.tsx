import Image from 'next/image';
import styles from './SolutionsSection.module.css';

const testimonials = [
  {
    name: 'Kaushk Savla',
    company: 'MYKRAFT Apparels',
    image: '/client-profiles/kaushk-savla.webp',
    quote: 'Bizgenix helped us connect day-to-day operations with a clearer view of orders and priorities. The team spends less time chasing updates and more time moving the business forward.',
  },
  {
    name: 'Ashok Sanghvi',
    company: 'Mahavir Traders',
    image: '/client-profiles/ashok-sanghvi.webp',
    quote: 'As our work expanded, manual tracking became difficult. The new workflow gives us clearer ownership, better visibility and a simpler way to stay on top of every important action.',
  },
  {
    name: 'Bhavya',
    company: 'VS Associate',
    image: '/client-profiles/bhavya.webp',
    quote: 'The solution fits the way our team actually works. It reduces repetitive effort and keeps client communication, responsibilities and day-to-day tasks better organised.',
  },
  {
    name: 'Chintan Shah',
    company: 'Linq Corporate Solutions',
    image: '/client-profiles/chintan-shah.webp',
    quote: 'We now have a more connected view of work across the business. The system helps our team collaborate better, act faster and spend less time searching for updates.',
  },
  {
    name: 'Dhaval Ukani',
    company: 'Aavkar Corporation',
    image: '/client-profiles/dhaval-ukani.webp',
    quote: 'From routine coordination to management visibility, the solution has made our process more consistent. We can follow progress clearly and respond without unnecessary delays.',
  },
  {
    name: 'Prachetan Bansal',
    company: 'Spectrum Dyes and Chemical Private Limited',
    image: '/client-profiles/prachetan-bansal.webp',
    quote: 'Bizgenix translated a complex requirement into a practical system. It brings the right information together and supports faster, clearer and more informed decisions.',
  },
  {
    name: 'Varun Shrivastava',
    company: 'Kailash Veda Infra',
    image: '/client-profiles/varun-shrivastava.webp',
    quote: 'The solution gives our team a dependable way to coordinate projects, track responsibilities and keep important information visible. Decisions are faster because everyone works from the same picture.',
  },
];

function TestimonialCard({ testimonial, featured = false }: { testimonial: typeof testimonials[number]; featured?: boolean }) {
  return (
    <figure className={`${styles.card} ${featured ? styles.featured : ''}`}>
      <div className={styles.cardHeader}>
        <span className={styles.service}>Client experience</span>
      </div>
      <span className={styles.quoteMark} aria-hidden="true">“</span>
      <blockquote><p>{testimonial.quote}</p></blockquote>
      <figcaption className={styles.client}>
        <span className={styles.avatar} aria-hidden="true"><Image src={testimonial.image} alt="" fill sizes="52px" /></span>
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
