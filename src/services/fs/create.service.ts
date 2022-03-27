import { b64Encode } from '../../helpers/core';
import { getBearerHeader, prepareURI } from '../../helpers/services';
import { axiosApiBase, handleRequest } from '../request-base';

const reqFsCreate = ({ groupId, path, filename }) =>
  handleRequest(axiosApiBase.put)({
    path: prepareURI('/fs/create-folder', `${groupId}-${b64Encode(path)}-${b64Encode(filename)}`),
    headers: {
      ...getBearerHeader(),
    },
    data: {},
  });

export { reqFsCreate };
