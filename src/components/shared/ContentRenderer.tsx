// src/components/shared/ContentRenderer.tsx
// Dies ist eine Client Component, weil sie z.B. Videos oder Interaktionen rendern könnte.
'use client';

import React from 'react';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';

// Importiere die ContentBlock-Typen
// Angenommen, du hast sie in src/types/content.d.ts gespeichert
import { ContentBlock, TextBlock, HeadingBlock, ImageBlock, QuoteBlock, ListBlock, VideoBlock, BaseBlock } from '@/types/content';

interface ContentRendererProps {
  content: ContentBlock[]; // Das Array der Inhaltsblöcke
  className?: string;     // Optionale CSS-Klassen für den Wrapper
}

const ContentRenderer: React.FC<ContentRendererProps> = ({ content, className }) => {
  if (!content || content.length === 0) {
    return null; // Nichts rendern, wenn kein Inhalt vorhanden ist
  }

  return (
    <div className={className || "space-y-4"}> {/* Standard-Abstand zwischen Blöcken */}
      {content.map((block, index) => {
        // Jeder Block braucht einen eindeutigen Key für React
        const key = block.id || `${block.type}-${index}`;

        switch (block.type) {
          case 'text':
            const textBlock = block as TextBlock;
            // Render text with markdown support
            return (
              <div key={key} className="prose prose-lg max-w-none text-foreground/80">
                <ReactMarkdown
                  components={{
                    p: ({ children }) => <p className="text-lg leading-relaxed mb-4">{children}</p>,
                    strong: ({ children }) => <strong className="font-bold text-foreground">{children}</strong>,
                    em: ({ children }) => <em className="italic">{children}</em>,
                    a: ({ href, children }) => (
                      <a href={href} className="text-primary hover:text-primary/80 underline" target="_blank" rel="noopener noreferrer">
                        {children}
                      </a>
                    ),
                  }}
                >
                  {textBlock.content}
                </ReactMarkdown>
              </div>
            );

          case 'heading':
            const headingBlock = block as HeadingBlock;
            // Render headings based on their level
            switch (headingBlock.level) {
              case 'heading1': return <h1 key={key} className="text-4xl lg:text-5xl font-bold mb-4 text-foreground">{headingBlock.content}</h1>;
              case 'heading2': return <h2 key={key} className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">{headingBlock.content}</h2>;
              case 'heading3': return <h3 key={key} className="text-2xl lg:text-3xl font-bold mb-3 text-foreground">{headingBlock.content}</h3>;
              case 'heading4': return <h4 key={key} className="text-xl lg:text-2xl font-bold mb-3 text-foreground">{headingBlock.content}</h4>;
              case 'heading5': return <h5 key={key} className="text-lg lg:text-xl font-bold mb-2 text-foreground">{headingBlock.content}</h5>;
              case 'heading6': return <h6 key={key} className="text-base lg:text-lg font-bold mb-2 text-foreground">{headingBlock.content}</h6>;
              default: return <h2 key={key} className="text-3xl font-bold mb-4 text-foreground">{headingBlock.content}</h2>;
            }

          case 'image':
            const imageBlock = block as ImageBlock;
            return (
              <figure key={key} className="my-6">
                <div className="relative w-full" style={{ height: imageBlock.height || 'auto', aspectRatio: (imageBlock.width && imageBlock.height) ? `${imageBlock.width}/${imageBlock.height}` : 'auto' }}>
                  <Image
                    src={imageBlock.src}
                    alt={imageBlock.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="rounded-lg object-cover shadow-md"
                  />
                </div>
                {imageBlock.caption && <figcaption className="mt-2 text-sm text-center text-gray-500">{imageBlock.caption}</figcaption>}
              </figure>
            );

          case 'quote':
            const quoteBlock = block as QuoteBlock;
            return (
              <blockquote key={key} className="my-6 p-4 border-l-4 border-primary italic text-foreground/80">
                <p className="text-xl">&quot;{quoteBlock.text}&quot;</p>
                {quoteBlock.author && <footer className="mt-2 text-sm text-gray-600">-- {quoteBlock.author}</footer>}
              </blockquote>
            );

          case 'list':
            const listBlock = block as ListBlock;
            const ListTag = listBlock.style === 'ordered' ? 'ol' : 'ul';
            return (
              <ListTag key={key} className={`my-4 space-y-2 ${listBlock.style === 'ordered' ? 'list-decimal' : 'list-disc'} list-inside text-foreground/80`}>
                {listBlock.items.map((item, itemIndex) => (
                  <li key={`${key}-${itemIndex}`}>{item}</li>
                ))}
              </ListTag>
            );
          
          case 'video':
            const videoBlock = block as VideoBlock;
            let embedUrl = '';
            
            if (videoBlock.provider === 'youtube') {
              const videoId = videoBlock.src.split('v=')[1]?.split('&')[0] || videoBlock.src.split('/').pop();
              embedUrl = `https://www.youtube.com/embed/${videoId}`;
            } else if (videoBlock.provider === 'vimeo') {
              if (videoBlock.src.includes('player.vimeo.com')) {
                embedUrl = videoBlock.src;
              } else {
                const videoId = videoBlock.src.split('/').pop()?.split('?')[0];
                embedUrl = `https://player.vimeo.com/video/${videoId}`;
              }
            } else {
              embedUrl = videoBlock.src;
            }

            if (!embedUrl) return null;

            return (
              <div key={key} className="my-6 w-full">
                {/* Container mit max-height und zentriertem Inhalt */}
                <div className="w-full flex justify-center items-center lg:max-h-[calc(100vh-120px)]">
                  <div className="w-full aspect-video overflow-hidden rounded-xl shadow-2xl border border-primary/20 lg:max-h-[calc(100vh-120px)]">
                    <iframe
                      className="w-full h-full"
                      src={embedUrl}
                      title={videoBlock.caption || `Video from ${videoBlock.provider}`}
                      frameBorder="0"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
                {videoBlock.caption && (
                  <figcaption className="mt-4 text-center text-base text-foreground/70 font-light">
                    {videoBlock.caption}
                  </figcaption>
                )}
              </div>
            );

          default:
            // TypeScript sollte hier eigentlich nicht hinkommen, wenn ContentBlock[] alle Typen abdeckt,
            // aber es ist eine gute Absicherung für unbekannte Block-Typen aus Datenquellen.
            // Der 'block as BaseBlock' Cast ist hier sicher, da jeder Block BaseBlock implementiert.
            return <p key={key} className="text-red-500">Unbekannter Block-Typ: {(block as BaseBlock).type}</p>;
        }
      })}
    </div>
  );
};

export default ContentRenderer;