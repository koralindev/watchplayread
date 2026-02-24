export interface MoviePoster {
  url: string;
  previewUrl?: string;
}

export interface MovieRating {
  kp?: number;
  imdb?: number;
}

export interface NameGenre {
  name: string;
}

export interface Movie {
  id: number;
  name: string;
  poster?: MoviePoster;
  rating?: MovieRating;
  genres?: NameGenre[];
  type: string;
}

export interface MoviesResponse {
  docs: Movie[];
  next: string;
  prev: null | string;
}
