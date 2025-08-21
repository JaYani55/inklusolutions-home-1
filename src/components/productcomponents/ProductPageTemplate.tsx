// src/components/product/ProductPageTemplate.tsx
'use client'; // <-- Markiert diese Komponente als Client Component, da wir DOM-Interaktion simulieren könnten.
               // Später, wenn dein Template interaktive Teile hat (Slider etc.), ist dies nötig.
               // Auch für Hooks wie useState/useEffect, die ein Template haben kann.

import React from 'react';
import { Product } from '@/types/product'; // Importiere dein Product-Interface

interface ProductPageTemplateProps {
  product: Product; // Erwartet ein Produkt-Objekt als Prop
}

/**
 * Dies ist ein generischer Platzhalter für dein späteres Produkt-Seiten-Template.
 * Es nimmt alle Produktdaten entgegen und rendert sie minimalistisch.
 * Den tatsächlichen Inhalt dieser Komponente wirst du später mit dem
 * final ausgewählten React-Template deiner Kollegen füllen und anpassen.
 */
const ProductPageTemplate: React.FC<ProductPageTemplateProps> = ({ product }) => {
  // Hier kannst du später das Design des von deinen Kollegen gewählten Templates umsetzen.
  // Aktuell zeigen wir nur die Daten, um die Funktionalität zu prüfen.

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 max-w-4xl mx-auto my-8">
      <h2 className="text-3xl font-bold mb-4 text-blue-600 dark:text-blue-400">{product.name}</h2>
      
      {product.price && (
        <p className="text-2xl font-semibold mb-4">
          {product.price.toFixed(2)} {product.currency || '€'}
        </p>
      )}

      <h3 className="text-xl font-semibold mb-2">Kurze Beschreibung:</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-6">{product.description}</p>

      {product.longDescription && (
        <>
          <h3 className="text-xl font-semibold mb-2">Detaillierte Informationen:</h3>
          <div
            className="prose dark:prose-invert max-w-none text-gray-800 dark:text-gray-200"
            dangerouslySetInnerHTML={{ __html: product.longDescription }}
          />
        </>
      )}

      {product.images && product.images.length > 0 && (
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Produktbilder:</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {product.images.map((image, index) => (
              // HINWEIS: Hier würdest du später next/image verwenden,
              // aber für diesen Platzhalter reicht ein img-Tag erstmal
              <div key={index} className="w-full h-32 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center overflow-hidden">
                <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      )}

      {product.features && product.features.length > 0 && (
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Wichtige Merkmale:</h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
            {product.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-12 p-4 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 border-l-4 border-yellow-500 rounded">
        <p>
          **Template-Platzhalter:** Der Inhalt dieser Seite wird später durch das endgültige Produkt-Template ersetzt.
          Alle Daten werden dynamisch übergeben.
        </p>
      </div>
    </div>
  );
};

export default ProductPageTemplate;