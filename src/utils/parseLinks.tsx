import type { ReactNode } from 'react';

export function parseLinks(text: string): ReactNode[] {
  const urlRegex = /(https?:\/\/[^\s]+|www\.[^\s]+|[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}\/[^\s]*)/g;
  const parts = text.split(urlRegex);

  return parts.map((part, index) => {
    if (urlRegex.test(part)) {
      const href = part.startsWith('http') ? part : `https://${part}`;
      return (
        <a
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 underline underline-offset-2 hover:text-blue-300 transition-colors"
        >
          {part}
        </a>
      );
    }
    return part;
  });
}
