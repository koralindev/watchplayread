export interface MovieTMDB {
  genre_ids: number[];
  id: number;
  original_title: string;
  title: string;
  poster_path: string;
  vote_average: number;
  genres?: string[];
}
export interface GenreTMDB {
  id: number;
  name: string;
}

// export interface MoviesResTMDB {
//   page: number;
//   results: MovieTMDB[];
//   total_pages: number;
//   total_results: number;
// }

// export interface MoviesResKinopoisk {
//   items: MovieKinopoisk[];
//   total: number;
//   totalPages: number;
// }

// export interface GenreKinopoisk {
//   genre: string;
// }

// export interface MovieKinopoisk {
//   genres: GenreKinopoisk[];
//   kinopoiskId: number;
//   nameRu: string;
//   posterUrlPreview: string;
//   type: string;
//   ratingImdb?: number;
//   ratingKinopoisk?: number;
// }
