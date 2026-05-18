import { useState, useEffect, useRef } from 'react';

export const useTypewriter = (
  words: string[],
  typingSpeedMs: number = 150,
  deletingSpeedMs: number = 100,
  pauseDurationMs: number = 2000
) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Use refs to keep track of current states inside the timeout without causing trigger loops
  const stateRef = useRef({
    wordIndex,
    displayText,
    isDeleting,
    words,
  });

  stateRef.current = {
    wordIndex,
    displayText,
    isDeleting,
    words,
  };

  useEffect(() => {
    let timerId: ReturnType<typeof setTimeout>;

    const handleTick = () => {
      const { wordIndex: currentWordIdx, displayText: currentText, isDeleting: deleting, words: list } = stateRef.current;
      const fullWord = list[currentWordIdx];

      if (!deleting) {
        const nextText = fullWord.substring(0, currentText.length + 1);
        setDisplayText(nextText);

        if (nextText === fullWord) {
          setIsDeleting(true);
          timerId = setTimeout(handleTick, pauseDurationMs);
        } else {
          timerId = setTimeout(handleTick, typingSpeedMs);
        }
      } else {
        const nextText = fullWord.substring(0, currentText.length - 1);
        setDisplayText(nextText);

        if (nextText === '') {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % list.length);
          timerId = setTimeout(handleTick, 500);
        } else {
          timerId = setTimeout(handleTick, deletingSpeedMs);
        }
      }
    };

    timerId = setTimeout(handleTick, typingSpeedMs);

    return () => clearTimeout(timerId);
  }, [typingSpeedMs, deletingSpeedMs, pauseDurationMs]);

  return displayText;
};
