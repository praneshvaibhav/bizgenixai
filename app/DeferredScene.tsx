'use client';

import { Component, useEffect, useRef, useState, type ComponentType, type ReactNode } from 'react';

const loaders = {
  particles: () => import('./ParticleMorph'),
  credibility: () => import('./CredibilityObject'),
};

class SceneBoundary extends Component<{ children: ReactNode; fallback: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() { return this.state.failed ? this.props.fallback : this.props.children; }
}

/** Load optional WebGL code only when its scene is visible and the browser is idle. */
export default function DeferredScene({ kind }: { kind: keyof typeof loaders }) {
  const ref = useRef<HTMLDivElement>(null);
  const [Scene, setScene] = useState<ComponentType | null>(null);
  const className = kind === 'particles' ? 'particleMorph' : 'credibilityObject';

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    let disposed = false;
    let scheduled = false;
    let cancelIdle = () => {};
    const load = () => {
      if (scheduled) return;
      scheduled = true;
      const run = () => {
        if (disposed) return;
        void loaders[kind]().then(module => {
          if (!disposed) setScene(() => module.default);
        }).catch(() => { /* Preserve the decoration if an optional scene cannot load. */ });
      };
      if ('requestIdleCallback' in window) {
        const id = window.requestIdleCallback(run, { timeout: 1500 });
        cancelIdle = () => window.cancelIdleCallback(id);
      } else {
        const id = setTimeout(run, 200);
        cancelIdle = () => clearTimeout(id);
      }
    };
    const observer = typeof IntersectionObserver === 'undefined' ? null : new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        observer?.disconnect();
        load();
      }
    });
    if (observer) observer.observe(element);
    else load();
    return () => { disposed = true; observer?.disconnect(); cancelIdle(); };
  }, [kind]);

  const fallback = <div ref={ref} className={className} aria-hidden="true"><div className="scenePlaceholder" /></div>;
  return Scene ? <SceneBoundary fallback={fallback}><Scene /></SceneBoundary> : fallback;
}
