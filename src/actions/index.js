export const SET_IMAGE_INDEX = "SET_IMAGE_INDEX";
export const ITERATE_IMAGE_INDEX = "ITERATE_IMAGE_INDEX";

export const setImageIndex = (number) => ({
  type: SET_IMAGE_INDEX,
  payload: number,
});

export const iterateImageIndex = (direction) => ({
  type: SET_IMAGE_INDEX,
  payload: direction,
});
