type Song = {
  id: number;
  related: number[];
  song: {
    album: { title: string; year: number };
    artist: string;
    files: { audio: string; coverArt: string; poster: string };
    title: string;
  };
};
