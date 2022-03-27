type TPath =
  | '/access/register'
  | '/access/login'
  | '/access/refresh'
  | '/access/change-password'
  | '/access/logout'
  | '/info/info-profile'
  | '/info/info-group'
  | '/group/create'
  | '/group/join'
  | '/group/leave'
  | '/group/add100'
  | '/group/add500'
  | '/group/kick'
  | '/group/change-password'
  | '/group/search-by-name'
  | '/group/search-by-email'
  | '/fs/download-file'
  | '/fs/upload-file'
  | '/fs/browse-folder'
  | '/fs/create-folder'
  | '/fs/rename-file-folder'
  | '/fs/delete-file-folder';

type TMethods = 'GET' | 'POST' | 'PUT' | 'DELETE';

interface IRequest {
  path?: TPath | string;
  headers?: {};
  data?: {};
  extra?: {};
}

export type { TPath, TMethods, IRequest };
