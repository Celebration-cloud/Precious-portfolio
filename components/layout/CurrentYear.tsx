'use client';

export default function CurrentYear() {
  return <time suppressHydrationWarning>{new Date().getFullYear()}</time>;
}
