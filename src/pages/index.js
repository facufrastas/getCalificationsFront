import { connect } from "react-redux";
import { wakeUpServer, getAsignatures, clearCalifications } from "../js/backend";

import Home from "./Home";

const mapStateToProps = (state) => ({ califications: state?.califications, asignatures: state?.asignatures, loading: state.loading });

const mapDispatchToProps = (dispatch) => ({
  getAsignatures: ({ user, password, speciality }) => getAsignatures({ dispatch, user, password, speciality }),
  clearCalifications: () => clearCalifications(dispatch),
  wakeUpServer: () => wakeUpServer(),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
