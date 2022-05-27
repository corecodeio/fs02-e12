export default interface Callable {
  number: number;
  call: (zone_code: string, number_to_call: number) => void;
}
