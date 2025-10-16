// src/components/shared/ContentRenderer.tsx
// Dies ist eine Client Component, weil sie z.B. Videos oder Interaktionen rendern könnte.
'use client';

import React from 'react';
import Image from 'next/image';

// Importiere die ContentBlock-Typen
// Angenommen, du hast sie in src/types/content.d.ts gespeichert
import { ContentBlock, TextBlock, ImageBlock, QuoteBlock, ListBlock, VideoBlock, BaseBlock } from '@/types/content';

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
            // Je nach Format des Textblocks unterschiedliche Tags rendern
            switch (textBlock.format) {
              case 'heading1': return <h1 key={key} className="text-4xl font-bold">{textBlock.content}</h1>;
              case 'heading2': return <h2 key={key} className="text-3xl font-bold">{textBlock.content}</h2>;
              case 'heading3': return <h3 key={key} className="text-2xl font-bold">{textBlock.content}</h3>;
              case 'bold': return <p key={key} className="font-bold">{textBlock.content}</p>;
              case 'italic': return <p key={key} className="italic">{textBlock.content}</p>;
              default: return <p key={key} className="text-lg leading-relaxed">{textBlock.content}</p>;
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
                <p className="text-xl">"{quoteBlock.text}"</p>
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
            // Einfaches Embedding für YouTube/Vimeo
            let embedUrl = '';
            if (videoBlock.provider === 'youtube') {
              const videoId = videoBlock.src.split('v=')[1]?.split('&')[0] || videoBlock.src.split('/').pop();
              embedUrl = `https://www.youtube.com/embed/${videoId}`;
            } else if (videoBlock.provider === 'vimeo') {
              const videoId = videoBlock.src.split('/').pop();
              embedUrl = `https://player.vimeo.com/video/${videoId}`;
            } else {
                embedUrl = videoBlock.src; // Fallback für andere Anbieter
            }

            if (!embedUrl) return null; // Falls keine gültige Embed-URL gefunden wurde

            return (
                <div key={key} className="my-6 aspect-video w-full overflow-hidden rounded-lg shadow-md">
                    <iframe
                        className="w-full h-full"
                        src={embedUrl}
                        title={videoBlock.caption || `Video from ${videoBlock.provider}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                    {videoBlock.caption && <figcaption className="mt-2 text-sm text-center text-gray-500">{videoBlock.caption}</figcaption>}
                </div>
            )

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