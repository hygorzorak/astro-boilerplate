import { atom, useAtom } from 'jotai';

const favoritesAtom = atom([]);

export function useStoreFavorites(): [number[], any] {
  const [favorites, setFavorites] = useAtom(favoritesAtom);

  return [favorites, setFavorites];
}
