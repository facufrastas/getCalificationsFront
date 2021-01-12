import Axios from "axios";
import { GET_CALIFICATIONS, GET_CALIFICATIONS_SUCCESS, GET_CALIFICATIONS_ERROR, CLEAR_CALIFICATIONS, GET_ASIGNATURES, GET_ASIGNATURES_SUCCESS, GET_ASIGNATURES_ERROR } from "../../redux/actions";

export const wakeUpServer = async () => {
  try {
    await Axios.get("https://getcalificationsback.herokuapp.com/");
  } catch (err) {
    console.log(err);
  }
};

export const getAsignatures = async ({ dispatch, user, password, speciality }) => {
  try {
    dispatch({ type: GET_ASIGNATURES });
    // const response = await Axios.get(`http://localhost:3000/asignatures/?user=${user}&speciality=${speciality}`, { headers: { password: password } });
    const response = await Axios.get(`https://getcalificationsback.herokuapp.com/asignatures/?user=${user}&speciality=${speciality}`, { headers: { password: password } });
    dispatch({ type: GET_ASIGNATURES_SUCCESS, data: response.data });
  } catch (err) {
    dispatch({ type: GET_ASIGNATURES_ERROR });
  }
};

export const getCalifications = async ({ dispatch, link, user, password, speciality, names }) => {
  try {
    dispatch({ type: GET_CALIFICATIONS });
    const fullLink = `https://www.frc.utn.edu.ar/academico3/${link}`;
    // const response = await Axios.get(`http://localhost:3000/califications/?link=${fullLink.replace(/&/g, 'ñ')}&user=${user}&speciality=${speciality}`, { headers: { password: password, names: names } });
    const response = await Axios.get(`https://getcalificationsback.herokuapp.com/califications/?link=${fullLink.replace(/&/g, "ñ")}&user=${user}&speciality=${speciality}`, { headers: { password: password, names: names } });
    dispatch({ type: GET_CALIFICATIONS_SUCCESS, data: response.data });
  } catch (err) {
    dispatch({ type: GET_CALIFICATIONS_ERROR });
  }
};

export const clearCalifications = (dispatch) => {
  dispatch({ type: CLEAR_CALIFICATIONS });
};
