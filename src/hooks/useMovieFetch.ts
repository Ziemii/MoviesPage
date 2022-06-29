import API from "../API";

import { isPersistedState } from "../helpers";

import { useState, useEffect, useCallback } from "react";

export const useMovieFetch = (movieId: any) => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  var movieTitle:string = '';

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);
        setError(false);

        const movie = await API.fetchMovie(movieId);
        const credits = await API.fetchCredits(movieId);
        movieTitle = movie.title

        const directors = credits.crew.filter(
          (member) => member.job === "Director"
        );

        setState({
          ...movie,
          actors: credits.cast,
          directors,
        });
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };

    const persistedState = isPersistedState(movieTitle);

    if (persistedState) {
      setState(persistedState);
      setLoading(false);
      return;
    }

    fetchMovie();
  }, [movieId]);

  useEffect(() => {
    sessionStorage.setItem(movieTitle, JSON.stringify(state));
  },[movieId, state])



  return { state, loading, error };
};
