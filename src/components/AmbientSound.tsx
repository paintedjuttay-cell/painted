import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface AmbientSoundProps {
  isEnabled: boolean;
  onToggle: () => void;
}

const AmbientSound: React.FC<AmbientSoundProps> = ({ isEnabled, onToggle }) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isEnabled) {
        audioRef.current.play().catch(console.error);
      } else {
        audioRef.current.pause();
      }
    }
  }, [isEnabled]);

  return (
    <div className="ambient-sound-container">
      <audio
        ref={audioRef}
        loop
        src="/ambient-paint-sounds.mp3" // Add your ambient sound file here
        preload="metadata"
      />
      
      <Button
        variant="ghost"
        size="icon"
        onClick={onToggle}
        className="text-muted-foreground hover:text-foreground transition-all duration-300"
        title={isEnabled ? "Disable ambient sound" : "Enable ambient sound"}
      >
        {isEnabled ? (
          <Volume2 className="h-4 w-4 animate-pulse" />
        ) : (
          <VolumeX className="h-4 w-4" />
        )}
      </Button>
    </div>
  );
};

export default AmbientSound;