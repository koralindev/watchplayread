export interface GenreKinopoisk {
  genre: string;
}

export interface MovieKinopoisk {
  genres: GenreKinopoisk[];
  kinopoiskId: number;
  nameRu: string;
  posterUrlPreview: string;
  type: string;
  ratingImdb?: number;
  ratingKinopoisk?: number;
}

export interface MovieTMDB {
  genre_ids: number[];
  id: number;
  media_type: "tv" | "movie";
  original_title?: string;
  original_name?: string;
  title?: string;
  name?: string;
  poster_path: string;
  vote_average: number;
}

export interface MoviesResTMDB {
  page: number;
  results: MovieTMDB[];
  total_pages: number;
  total_results: number;
}

export interface MoviesResKinopoisk {
  items: MovieKinopoisk[];
  total: number;
  totalPages: number;
}

export interface GenreTMDB {
  id: number;
  name: string;
}

export interface MovieTMBD {
  genres: GenreTMDB[];
  id: number;
  original_title?: string;
  title?: string;
  original_name?: string;
  name?: string;
}
