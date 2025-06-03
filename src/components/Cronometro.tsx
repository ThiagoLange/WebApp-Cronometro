import React, { useState, useEffect } from 'react';
import './Cronometro.css';

const Cronometro: React.FC = () => {
  const [timeInSeconds, setTimeInSeconds] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  useEffect(() => {
    let intervalId: number | undefined;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTimeInSeconds(prevTime => prevTime + 1);
      }, 1000);
    }

    // Função de limpeza para o useEffect
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isRunning]); // Dependência: re-executa o efeito quando isRunning muda

  const handleStart = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTimeInSeconds(0);
  };

  // Formata o tempo para exibição (HH:MM:SS ou MM:SS)
  const formatTime = (totalSeconds: number): string => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const paddedMinutes = String(minutes).padStart(2, '0');
    const paddedSeconds = String(seconds).padStart(2, '0');

    if (hours > 0) {
      const paddedHours = String(hours).padStart(2, '0');
      return `${paddedHours}:${paddedMinutes}:${paddedSeconds}`;
    }
    return `${paddedMinutes}:${paddedSeconds}`;
  };

  return (
    <div className="cronometro-container">
      <div className="time-display">{formatTime(timeInSeconds)}</div>
      <div className="buttons">
        {!isRunning ? (
          <button onClick={handleStart}>
            {timeInSeconds > 0 ? 'Continuar' : 'Iniciar'}
          </button>
        ) : (
          <button onClick={handlePause}>Pausar</button>
        )}
        <button onClick={handleReset} disabled={timeInSeconds === 0 && !isRunning}>
          Zerar
        </button>
      </div>
    </div>
  );
};

export default Cronometro;