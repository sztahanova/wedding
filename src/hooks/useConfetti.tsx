import confetti from "canvas-confetti";
import { useCallback } from "react";

const PARTICLE_COUNT = 200;

export type UseConfettiResult = {
  fireConfetti: () => void;
};

type FireParams = Partial<confetti.Options> & {
  particleRatio: number;
};

const PALETTE_1 = ["#ffd700", "#006400", "#20bf55", "#0b4f6c", "#01baef"];
// const PALETTE_2 = ["#ffd700", "#006400", "#04e762", "#00a1e4", "#dc0073"];
// const PALETTE_3 = ["#ffd700", "#006400", "#de1a1a", "#e8ebf7", "#acbed8"];

export const useConfetti = (): UseConfettiResult => {
  const fire = useCallback(({ particleRatio, ...options }: FireParams) => {
    confetti({
      origin: { y: 0.7 },
      zIndex: 1500,
      ...(options ?? {}),
      particleCount: Math.floor(PARTICLE_COUNT * particleRatio),
      colors: PALETTE_1,
    });
  }, []);

  const fireConfetti = useCallback(() => {
    fire({
      particleRatio: 0.25,
      spread: 26,
      startVelocity: 55,
    });
    fire({
      particleRatio: 0.2,
      spread: 60,
    });
    fire({
      particleRatio: 0.35,
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });
    fire({
      particleRatio: 0.1,
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });
    fire({
      particleRatio: 0.1,
      spread: 120,
      startVelocity: 45,
    });
  }, [fire]);

  return { fireConfetti };
};
