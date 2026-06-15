import { Passage } from "../types/Passage";

export function getRandomPassage(
  passages: Passage[]
): Passage {
  const randomIndex = Math.floor(
    Math.random() * passages.length
  );

  return passages[randomIndex];
}