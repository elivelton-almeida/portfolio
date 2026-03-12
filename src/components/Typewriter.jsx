import { useState, useEffect } from "react";

export default function Typewriter({
  words = [],
  typingSpeed = 80,
  deletingSpeed = 40,
  delay = 2000,
  loop = true
}) {

  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {

    const currentWord = words[wordIndex];

    const timeout = setTimeout(() => {

      if (!isDeleting) {

        setText(currentWord.substring(0, text.length + 1));

        if (text === currentWord) {

          if (loop) {
            setTimeout(() => setIsDeleting(true), delay);
          }

        }

      } else {

        setText(currentWord.substring(0, text.length - 1));

        if (text === "") {

          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);

        }

      }

    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);

  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, delay, loop]);

  return (
    <span>
      {text}
      <span className="ml-1 animate-pulse">|</span>
    </span>
  );
}