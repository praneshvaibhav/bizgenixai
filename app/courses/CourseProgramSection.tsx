'use client';

import { createElement, useEffect, useRef } from 'react';
import CountUp from '../CountUp';
import styles from './CourseProgramSection.module.css';
import PriceCountdown from './PriceCountdown';

const enrollmentUrl = 'https://rzp.io/rzp/Q47luheE';
const contactUrl = '/contact#contact-form';

const highlights = [
  { from: 12, label: 'weeks, live' },
  { from: 6, label: 'levels to mastery' },
  { from: 4, to: 5, label: 'agents you build' },
  { from: 1, to: 2, label: 'live applications' },
];

const benefits = [
  {
    icon: '01',
    title: 'Build a complete web app',
    detail: 'Work through frontend, backend, database, domain and hosting until your idea becomes a live application.',
    outcome: 'Build, brief or sell with technical confidence.',
  },
  {
    icon: '02',
    title: 'Design useful AI agents',
    detail: 'Connect context, tools, triggers, memory and human checkpoints into practical systems for real work.',
    outcome: 'Create more time, capacity and consistency.',
  },
  {
    icon: '03',
    title: 'Apply AI across business',
    detail: 'Use AI across growth, finance, operations, HR, legal and customer-facing workflows—not inside one isolated tool.',
    outcome: 'Connect AI capability directly to outcomes.',
  },
];

const phases = [
  {
    phase: 'Phase 01', weeks: 'Weeks 1–3', title: 'Foundations',
    promise: 'Turn AI from a chatbot into a trained specialist for your work.',
    modules: ['Prompting and the three AI powerhouses—Claude, ChatGPT and Gemini', 'Context engineering, Projects, research and recurring reports', 'Claude Cowork and Artifacts—hand AI complete jobs, not isolated questions'],
    build: 'A reusable prompt system and your first working AI agent.',
  },
  {
    phase: 'Phase 02', weeks: 'Weeks 4–5', title: 'AI for growth',
    promise: 'Build a marketing and follow-up engine that does not depend on mood or memory.',
    modules: ['AI Skills, ideal-customer research and your brand-voice system', 'A month of useful content in one focused sitting', 'Lead journeys, WhatsApp follow-ups and your conversion funnel map'],
    build: 'A repeatable content engine and follow-up workflow.',
  },
  {
    phase: 'Phase 03', weeks: 'Weeks 6–8', title: 'Build',
    promise: 'Ship real software and agents—without waiting for a developer or agency.',
    modules: ['Claude Code and vibe coding: describe → build → test → improve', 'Deploy a real application with a live link', 'Agentic AI with triggers, tools and memory using n8n, Make and MCP'],
    build: 'A live business app and an agent that can take controlled action.',
  },
  {
    phase: 'Phase 04', weeks: 'Weeks 9–12', title: 'Master & monetise',
    promise: 'Apply AI across the back office and package your capability into value.',
    modules: ['Finance and accounts: GST, MIS, collections and safe financial workflows', 'Operations, HR and legal: SOPs, inventory, vendors, hiring and contracts', 'Strategy, DPDP, data safety, monetisation, capstone and Demo Day'],
    build: 'Your capstone, 12-month roadmap and a sellable AI capability.',
  },
];

const inclusions = [
  'Live weekly implementation sessions',
  'Recordings, notes, prompts and transcripts',
  'Homework review and monthly open Q&A',
  'WhatsApp support group and 1,000+ community',
  'Prompt vault, templates, workbooks and updates',
  'Capstone, roadmap and certificate',
];

export default function CourseProgramSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoFrameRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<HTMLElement & { play?: () => Promise<void> | void; pause?: () => void; state?: string }>(null);
  const resumeVideoRef = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;
    const update = () => {
      frame = 0;
      if (motion.matches) return;
      const rect = section.getBoundingClientRect();
      const range = Math.max(1, rect.height - window.innerHeight);
      const progress = Math.max(0, Math.min(1, -rect.top / range));
      section.style.setProperty('--course-progress', String(progress));
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    const reveals = Array.from(section.querySelectorAll<HTMLElement>('[data-course-reveal]'));
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) entry.target.setAttribute('data-visible', 'true'); });
    }, { threshold: 0.14, rootMargin: '0px 0px -6% 0px' });
    reveals.forEach(item => observer.observe(item));
    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, []);

  useEffect(() => {
    const scripts = [
      ['wistia-player-script', 'https://fast.wistia.com/player.js'],
      ['wistia-course-media-script', 'https://fast.wistia.com/embed/13jaftc84o.js'],
    ] as const;
    scripts.forEach(([id, src]) => {
      if (document.getElementById(id)) return;
      const script = document.createElement('script');
      script.id = id;
      script.src = src;
      script.async = true;
      script.type = src.includes('/embed/') ? 'module' : 'text/javascript';
      document.head.appendChild(script);
    });

    const frame = videoFrameRef.current;
    if (!frame || !('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(([entry]) => {
      const player = playerRef.current;
      if (!player) return;
      if (!entry.isIntersecting) {
        if (player.state === 'playing') {
          resumeVideoRef.current = true;
          player.pause?.();
        }
        return;
      }
      if (resumeVideoRef.current) {
        resumeVideoRef.current = false;
        const playback = player.play?.();
        if (playback && 'catch' in playback) playback.catch(() => { resumeVideoRef.current = true; });
      }
    }, { threshold: 0.2 });
    observer.observe(frame);
    return () => observer.disconnect();
  }, []);

  return <section className={styles.program} id="featured-courses" ref={sectionRef} aria-labelledby="course-section-title">
    <div className={styles.orb} aria-hidden="true" />
    <div className={styles.container}>
      <h2 className={styles.sectionTitle} id="course-section-title" data-learning-reveal>Course</h2>

      <div className={styles.intro} data-course-reveal>
        <p className={styles.eyebrow}><span /> AI IMPLEMENTATION PROGRAM</p>
        <h3>Don’t just learn AI.<br /><em>Build with it.</em></h3>
        <p className={styles.lede}>In 12 live weeks, move from prompting and context to AI agents, automations and deployed web applications—even without a technical background.</p>
      </div>

      <div className={styles.visualStage} data-course-reveal>
        <div className={styles.videoChrome}>
          <div className={styles.videoTop}><span>LIVE IMPLEMENTATION</span><span>LEARN → BUILD → IMPLEMENT</span></div>
          <div className={styles.videoFrame} ref={videoFrameRef}>
            {createElement('wistia-player', {
              ref: playerRef,
              'media-id': '13jaftc84o',
              aspect: '1.7777777778',
              'player-color': '5AAA6C',
              'play-pause-control': 'true',
              'volume-control': 'true',
              'fullscreen-control': 'true',
              'settings-control': 'true',
              'aria-label': 'Scale With AI program experience — press play to watch with sound',
            })}
            <div className={styles.videoShade} aria-hidden="true" />
            <div className={styles.videoCaption}><span>Built live</span><strong>Applied to real work.</strong></div>
          </div>
        </div>
      </div>

      <dl className={styles.metrics} aria-label="Program highlights" data-course-reveal>
        {highlights.map(item => <div key={item.label}><dd><CountUp value={item.from} suffix="" />{item.to && <><span aria-hidden="true">–</span><CountUp value={item.to} suffix="" /></>}</dd><dt>{item.label}</dt></div>)}
      </dl>

      <div className={styles.valueIntro} data-course-reveal>
        <p className={styles.eyebrow}><span /> WHAT CHANGES</p>
        <h3>Learn AI. Build with AI.<br /><em>Implement AI.</em></h3>
      </div>
      <div className={styles.benefitGrid}>
        {benefits.map(benefit => <article className={styles.benefitCard} key={benefit.icon} data-course-reveal>
          <div className={styles.cardIndex}>{benefit.icon}</div>
          <h4>{benefit.title}</h4>
          <p>{benefit.detail}</p>
          <strong>{benefit.outcome}</strong>
        </article>)}
      </div>

      <div className={styles.curriculum} data-course-reveal>
        <div className={styles.curriculumHeading}>
          <div><p className={styles.eyebrow}><span /> THE 12-WEEK JOURNEY</p><h3>Four phases.<br /><em>One transformed way of working.</em></h3></div>
          <p>Every phase ends in something you can use. Open a phase to see exactly what you learn and what you build.</p>
        </div>
        <div className={styles.timeline}>
          {phases.map((item, index) => <details className={styles.phase} key={item.phase} open={index === 0}>
            <summary><span className={styles.phaseNumber}>0{index + 1}</span><span className={styles.phaseMeta}>{item.phase}<small>{item.weeks}</small></span><span className={styles.phaseTitle}>{item.title}<small>{item.promise}</small></span><span className={styles.toggle} aria-hidden="true">+</span></summary>
            <div className={styles.phaseContent}><div><small>YOU WILL COVER</small><ul>{item.modules.map(module => <li key={module}>{module}</li>)}</ul></div><div className={styles.build}><small>YOU WILL BUILD</small><strong>{item.build}</strong></div></div>
          </details>)}
        </div>
      </div>

      <div className={styles.priceLayout} id="course-investment" data-course-reveal>
        <div className={styles.priceCopy}>
          <p className={styles.eyebrow}><span /> THE VALUE DECISION</p>
          <h3>Build a capability<br /><em>you keep using.</em></h3>
          <p>Get 25+ hours of guided live building, 12 months of portal access and updates, monthly open Q&A, and a full vault of prompts, agents, guides and automation templates.</p>
          <div className={styles.accessPath}><span>Learn</span><i>→</i><span>Build</span><i>→</i><strong>Implement</strong></div>
        </div>
        <article className={styles.priceCard}>
          <span className={styles.priceBadge}>APPLICATIONS OPEN NOW</span>
          <p>Scale With AI · 12-week live program</p>
          <s>₹30,000–₹35,000 member investment</s>
          <div className={styles.price}><sup>₹</sup><PriceCountdown /></div>
          <p className={styles.priceDetail}>Same live program · 12 months access · practical implementation</p>
          <p className={styles.perWeek}>Less than <strong>₹1,250 per week</strong> across the journey</p>
          <ul>{inclusions.map(item => <li key={item}><span aria-hidden="true">✓</span>{item}</li>)}</ul>
          <a className={styles.priceCta} href={enrollmentUrl} target="_blank" rel="noopener noreferrer">Pay ₹14,999 & enroll now <span aria-hidden="true">↗</span></a>
          <a className={styles.priceQuestion} href={contactUrl}>Have a question first? Contact the team →</a>
          <small>First-two-session fit protection applies; confirm terms with the team before enrolment.</small>
        </article>
      </div>
    </div>
  </section>;
}
