import { connect } from 'react-redux';
import { getCalifications } from '../../js/backend';

import TableAsignatures from './TableAsignatures';

const mapDispatchToProps = (dispatch) => {
  return {
    getCalifications: ({ link, user, password, speciality, names }) => getCalifications({ dispatch, link, user, password, speciality, names }),
  };
};

export default connect(null, mapDispatchToProps)(TableAsignatures);
