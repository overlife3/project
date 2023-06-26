export const SET_LOADING_INFORMANT = "SET_LOADING_INFORMANT";
export const SET_ERROR_INFORMANT = "SET_ERROR_INFORMANT";

export const setLoadingInformant = (bool) => {
  return {
    type: SET_LOADING_INFORMANT,
    payload: bool,
  };
};
export const setErrorInformant = (err) => {
  return {
    type: SET_ERROR_INFORMANT,
    payload: err,
  };
};
