'use client';

import { useEffect, useRef, useState } from 'react';
import { observeVisibility } from './observeVisibility';

export function useAnimationViewport() {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState({ visible: false, entered: false });
  useEffect(() => {
    if (!ref.current) return;
    return observeVisibility(ref.current, visible => {
      setState(previous => ({ visible, entered: previous.entered || visible }));
    });
  }, []);
  return { ref, ...state };
}
