import type { ComponentPropsWithoutRef } from 'react';

type InternalLinkProps = Omit<ComponentPropsWithoutRef<'a'>, 'href'> & {
  href: string;
};

/**
 * Use native document navigation for links between pages.
 *
 * The Vite/Vinext client router can fail to complete a same-tab transition in
 * some production browsers. A regular anchor keeps every destination
 * usable even when hydration or client-side routing is unavailable.
 */
export default function InternalLink({ href, children, ...props }: InternalLinkProps) {
  return <a href={href} {...props}>{children}</a>;
}
