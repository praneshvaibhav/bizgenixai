/** Observe the element itself, including clipping by mobile scroll containers. */
export function observeVisibility(element: Element, onChange: (visible: boolean) => void) {
  let intersects = false;
  let previous: boolean | undefined;
  let disposed = false;
  const update = () => {
    const visible = intersects && !document.hidden;
    if (!disposed && visible !== previous) {
      previous = visible;
      onChange(visible);
    }
  };
  const observer = typeof IntersectionObserver === 'undefined' ? null : new IntersectionObserver(entries => {
    const entry = entries.find(item => item.target === element);
    if (!entry) return;
    intersects = entry.isIntersecting && entry.intersectionRatio >= .12;
    update();
  }, { threshold: [0, .12], rootMargin: '0px 0px -24px 0px' });
  observer?.observe(element);
  const fallback = observer ? 0 : requestAnimationFrame(() => { intersects = true; update(); });
  document.addEventListener('visibilitychange', update);
  return () => {
    disposed = true;
    observer?.disconnect();
    cancelAnimationFrame(fallback);
    document.removeEventListener('visibilitychange', update);
  };
}
