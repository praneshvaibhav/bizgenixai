'use client';

import { useState } from 'react';
import Image from 'next/image';
import { courses, enquire } from './content';
import styles from './page.module.css';

const levels = ['All courses', 'Beginner', 'Intermediate', 'Executive'] as const;
export default function CourseCatalog() {
  const [level, setLevel] = useState<string>('All courses');
  const [search, setSearch] = useState('');
  const visible = courses.filter(course => (level === 'All courses' || course.level.includes(level)) && `${course.title} ${course.category} ${course.outcome}`.toLowerCase().includes(search.trim().toLowerCase()));
  return <>
    <div className={styles.catalogControls}>
      <div className={styles.filters} role="group" aria-label="Filter courses by level">{levels.map(item => <button key={item} type="button" aria-pressed={level === item} onClick={() => setLevel(item)}>{item}</button>)}</div>
      <label className={styles.search}><span aria-hidden="true">⌕</span><span className={styles.srOnly}>Search courses</span><input type="search" placeholder="Find your next skill..." value={search} onChange={event => setSearch(event.target.value)} aria-controls="course-results" /></label>
    </div>
    <p className={styles.resultCount} role="status" aria-live="polite">{visible.length} {visible.length === 1 ? 'course' : 'courses'} to explore</p>
    <div className={styles.courseGrid} id="course-results">{visible.map(course => <article className={styles.courseCard} key={course.id} id={course.id}>
      <div className={styles.courseArtwork}>
        <Image className={styles.courseImage} src={course.image} alt={course.imageAlt} style={{ objectPosition: course.imagePosition }} fill sizes="(max-width: 500px) calc(100vw - 36px), (max-width: 1150px) 45vw, 23vw" />
        <span className={styles.courseCategory}>{course.category}</span>
      </div>
      <div className={styles.courseBody}><span className={styles.level}>{course.level}</span><h3>{course.title}</h3><p>{course.outcome}</p><a href={enquire(course.title)} target="_blank" rel="noopener noreferrer" aria-label={`Enquire about ${course.title}`}>Enquire about this course <span aria-hidden="true">↗</span></a></div>
    </article>)}</div>
    {visible.length === 0 && <div className={styles.empty}><h3>No courses match your search.</h3><p>Try another topic or explore all learning levels.</p><button type="button" onClick={() => { setSearch(''); setLevel('All courses'); }}>Show all courses <span aria-hidden="true">→</span></button></div>}
  </>;
}
