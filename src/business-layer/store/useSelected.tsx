import { atom, useAtom } from 'jotai';

const selectedAtom = atom(0);

export function useSelected(): [number, any] {
  const [selected, setSelected] = useAtom(selectedAtom);

  return [selected, setSelected];
}
