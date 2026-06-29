let audioContext = null;

export function playButtonSound() {
  if (typeof window === "undefined") return;

  if (!audioContext) {
    const AudioCtor = window.AudioContext || window.webkitAudioContext;
    audioContext = new AudioCtor();
  }

  if (audioContext.state === "suspended") {
    audioContext.resume();
  }

  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();

  oscillator.type = "triangle";
  oscillator.frequency.setValueAtTime(720, audioContext.currentTime);
  oscillator.frequency.exponentialRampToValueAtTime(560, audioContext.currentTime + 0.08);

  gainNode.gain.setValueAtTime(0.0001, audioContext.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.025, audioContext.currentTime + 0.01);
  gainNode.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + 0.12);

  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);

  oscillator.start();
  oscillator.stop(audioContext.currentTime + 0.12);
}
