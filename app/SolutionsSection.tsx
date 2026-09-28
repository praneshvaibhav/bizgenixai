import Image from 'next/image';
import styles from './SolutionsSection.module.css';

const testimonials = [
  {
    name: 'Kaushk Savla',
    company: 'MYKRAFT Apparels',
    service: 'Garment workflow automation',
    image: '/client-profiles/kaushk-savla.webp',
    quote: 'In garments, one delayed handoff affects everything after it. We wanted the routine updates and follow-ups to happen on their own, without changing how the floor team works. Now I don’t need to call five people just to know where an order is.',
  },
  {
    name: 'Ashok Sanghvi',
    company: 'Mahavir Traders',
    service: 'Inventory management system',
    image: '/client-profiles/ashok-sanghvi.webp',
    quote: 'Stock was never one clean answer. Someone had one sheet, the godown had another number, and we would confirm it again before committing to a customer. The inventory system has given us one place to check what came in, what moved and what is actually available.',
  },
  {
    name: 'Bhavya',
    company: 'VS Associate',
    service: 'AI debt recovery voice agent',
    image: '/client-profiles/bhavya.webp',
    quote: 'Debt-recovery calls are repetitive, but they still need to sound respectful. The voice agent handles the first follow-up, notes the customer’s response and records a promised payment date. My team steps in when a real conversation is needed instead of spending the day dialling numbers.',
  },
  {
    name: 'Chintan Shah',
    company: 'Linq Corporate Solutions',
    service: 'AI sales call analysis',
    image: '/client-profiles/chintan-shah.webp',
    quote: 'We were reviewing only a handful of sales calls because listening manually takes too long. The AI now transcribes every call, checks it against our script and gives the agent a clear score. Coaching conversations are far more useful now.',
  },
  {
    name: 'Dhaval Ukani',
    company: 'Aavkar Corporation',
    service: 'Email, WhatsApp & cheque automation',
    image: '/client-profiles/dhaval-ukani.webp',
    quote: 'My follow-ups were split between email, WhatsApp and a separate cheque list, so it was easy to miss something on a busy day. Now important emails are sorted, WhatsApp messages go out on time and cheque reminders run before the deposit date. I only get involved when the system flags an exception.',
  },
  {
    name: 'Prachetan Bansal',
    company: 'Spectrum Dyes and Chemical Private Limited',
    service: 'Industry knowledge RAG model',
    image: '/client-profiles/prachetan-bansal.webp',
    quote: 'We have years of industry knowledge, but it was sitting across product sheets, test reports and old documents. With the RAG model, the team can ask a technical question in plain language and see an answer grounded in our own material. The source is right there, so we can verify it before replying.',
  },
  {
    name: 'Varun Shrivastava',
    company: 'Kailash Veda Infra',
    service: 'Project coordination system',
    image: '/client-profiles/varun-shrivastava.webp',
    quote: 'On a live project, “I thought someone else was handling it” is an expensive sentence. We now have one place for responsibilities, progress and pending decisions. The site team and office team are finally looking at the same picture.',
  },
];

function TestimonialCard({ testimonial, featured = false }: { testimonial: typeof testimonials[number]; featured?: boolean }) {
  return (
    <figure className={`${styles.card} ${featured ? styles.featured : ''}`}>
      <div className={styles.cardHeader}>
        <span className={styles.service}>
          <small>Solution type</small>
          <strong>{testimonial.service}</strong>
        </span>
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
