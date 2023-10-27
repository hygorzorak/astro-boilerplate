import { atom, useAtom } from 'jotai';

const favoritesAtom = atom([]);

export function useFavorites(): [number[], any] {
  const [favorites, setFavorites] = useAtom(favoritesAtom);

  return [favorites, setFavorites];
}
