'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, User } from 'lucide-react';
import Image from 'next/image';
import { TrainerProfile } from '@/types/product';

interface TrainerComponentProps {
  productName: string;
}

const TrainerComponent: React.FC<TrainerComponentProps> = ({ productName }) => {
  const [trainers, setTrainers] = useState<TrainerProfile[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Auto-scroll every 20 seconds
  useEffect(() => {
    if (trainers.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % trainers.length);
      }, 20000);

      return () => clearInterval(interval);
    }
  }, [trainers.length]);

  // Fetch trainer data
  useEffect(() => {
    const fetchTrainers = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://api.inklu-connect.app/trainer_profile', {
          headers: {
            'accept': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch trainer data');
        }

        const data: TrainerProfile[] = await response.json();
        
        // Filter trainers based on product name and active status
        const filteredTrainers = data.filter(trainer => {
          const isActive = trainer.Status === 'Aktiv';
          const isOnWebsite = trainer["Auf Webseite"] === true;
          const hasProductAccess = trainer.Produktfreigabe?.some(product => 
            product.toLowerCase().includes(productName.toLowerCase()) ||
            productName.toLowerCase().includes(product.toLowerCase())
          );
          
          return isActive && isOnWebsite && hasProductAccess;
        });

        setTrainers(filteredTrainers);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchTrainers();
  }, [productName]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + trainers.length) % trainers.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % trainers.length);
  };

  if (loading) {
    return (
      <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Lade Trainer-Profile...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="text-center text-red-600">
            <p>Fehler beim Laden der Trainer-Profile: {error}</p>
          </div>
        </div>
      </section>
    );
  }

  if (trainers.length === 0) {
    return null; // Don't render anything if no trainers found
  }

  const currentTrainer = trainers[currentIndex];

  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ihre Expert:innen
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Lernen Sie von erfahrenen Trainer:innen mit authentischen Perspektiven
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="md:flex">
              {/* Image Section */}
              <div className="md:w-1/3 bg-gray-100 flex items-center justify-center p-8">
                <div className="relative w-48 h-48 rounded-full overflow-hidden">
                  {currentTrainer.Bild && currentTrainer.Bild.length > 0 ? (
                    <Image
                      src={currentTrainer.Bild[0]}
                      alt={`${currentTrainer.Vorname} ${currentTrainer.Nachname}`}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center rounded-full border-4 border-gray-300">
                      <User className="w-16 h-16 text-gray-400" />
                    </div>
                  )}
                </div>
              </div>

              {/* Content Section */}
              <div className="md:w-2/3 p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {currentTrainer.Vorname} {currentTrainer.Nachname}
                  </h3>
                </div>

                <div className="text-gray-600 leading-relaxed">
                  <p className="text-sm">
                    {currentTrainer.Beschreibung}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          {trainers.length > 1 && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors duration-200"
                aria-label="Vorheriger Trainer"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>

              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors duration-200"
                aria-label="Nächster Trainer"
              >
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button>
            </>
          )}

          {/* Dots Indicator */}
          {trainers.length > 1 && (
            <div className="flex justify-center mt-6 space-x-2">
              {trainers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentIndex
                      ? 'bg-blue-600'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Trainer ${index + 1} anzeigen`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Trainer Counter */}
        {trainers.length > 1 && (
          <div className="text-center mt-4">
            <p className="text-sm text-gray-500">
              {currentIndex + 1} von {trainers.length} Expert:innen
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default TrainerComponent;