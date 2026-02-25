export interface Genre {
  genre: string;
}

export interface Movie {
  genres: Genre[];
  kinopoiskId: number;
  nameRu: string;
  posterUrlPreview: string;
  type: string;
  ratingImdb?: number;
  ratingKinopoisk?: number;
}

export interface MoviesResponse {
  items: Movie[];
  total: number;
  totalPages: number;
}
