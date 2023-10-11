import { marshall } from "@aws-sdk/util-dynamodb";
import { Movie } from "./type";

export const generateMovieItem = (movie: Movie) => {
  return {
    PutRequest: {
      Item: marshall(movie),
    },
  };
};

export const generateBatch = (data: Movie[]) => {
  return data.map((e) => {
    return generateMovieItem(e);
  });
};
