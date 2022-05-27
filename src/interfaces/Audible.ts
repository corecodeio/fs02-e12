export default interface Audible {
  volumen: number;
  play: (song: string) => void;
}
