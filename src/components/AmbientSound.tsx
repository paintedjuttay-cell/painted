
import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AmbientSound = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element for ambient sound
    audioRef.current = new Audio();
    audioRef.current.loop = true;
    audioRef.current.volume = volume;
    
    // You would replace this with actual ambient sound files
    // For now, we'll simulate the functionality
    audioRef.current.addEventListener('loadeddata', () => {
      console.log('Ambient sound loaded');
    });

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleSound = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      // In a real implementation, you'd have actual audio files
      // audioRef.current.src = '/ambient-sounds/paint-studio.mp3';
      // audioRef.current.play();
      setIsPlaying(true);
      console.log('Playing ambient studio sounds...');
    }
  };

  const handleVolumeChange = (newVolume: number) => {
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  return (
    <div className="fixed top-20 right-4 z-40 bg-black/60 backdrop-blur-sm rounded-lg p-3 border border-gray-800">
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleSound}
          className="text-white hover:text-red-500 transition-colors duration-200"
          title={isPlaying ? 'Pause ambient sound' : 'Play ambient sound'}
        >
          {isPlaying ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
        </Button>
        
        {isPlaying && (
          <div className="flex items-center gap-2">
            <Music className="h-3 w-3 text-red-500 animate-pulse" />
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
              className="w-16 h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
              title="Volume"
            />
          </div>
        )}
      </div>
      
      {isPlaying && (
        <div className="text-xs text-gray-400 mt-1 text-center">
          Studio Vibes
        </div>
      )}
    </div>
  );
};

export default AmbientSound;
