import {
  PortableText,
  type PortableTextComponents,
  type PortableTextBlock,
} from "next-sanity";
import Link from "next/link";

export default function CustomPortableText({
  className,
  value,
}: {
  className?: string;
  value: PortableTextBlock[];
}) {
  const components: PortableTextComponents = {
    block: {
      h1: ({ children }) => (
        <h1 className="text-4xl font-bold text-teal-400 mb-4">{children}</h1>
      ),
      h2: ({ children }) => (
        <h2 className="text-3xl font-semibold text-teal-400 mb-4">{children}</h2>
      ),
      h3: ({ children }) => (
        <h3 className="text-2xl font-medium text-teal-400 mb-4">{children}</h3>
      ),
      normal: ({ children }) => (
        <p className="text-white text-lg leading-relaxed mb-4">{children}</p>
      ),
      blockquote: ({ children }) => (
        <blockquote className="italic text-gray-400 border-l-4 border-teal-400 pl-4 my-4">
          {children}
        </blockquote>
      ),
    },
    marks: {
      em: ({ children }) => (
        <em className="text-teal-400 italic">{children}</em>
      ),
      link: ({ children, value }) => (
        <Link
          href={value?.href}
          rel="noopener noreferrer"
          className="text-white underline hover:text-blue-300"
        >
          {children}
        </Link>
      ),
    },
  };

  return (
    <div className={["prose", className].filter(Boolean).join(" ")}>
      <PortableText components={components} value={value} />
    </div>
  );
}
