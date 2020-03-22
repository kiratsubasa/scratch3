import request from '@/utils/request';
import { validAlias } from '@/utils/validate';

/**
 * AEW Media API
 */

export function ListMedias(project, page) {
  return request({
    url: 'api/admin/projects/' + validAlias(project) + '/media/folders',
    method: 'get',
    params: page,
  });
}

export function ListMediasWithFolders(project, parent, page) {
  return request({
    url: 'api/admin/projects/' + validAlias(project) + '/media/folders/' + parent,
    method: 'get',
    params: page,
  });
}

export function CreateMediaByPhotoType(project, formData) {
  return request({
    url: 'api/admin/projects/' + validAlias(project) + '/media/photos',
    method: 'post',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    data: formData,
  });
}

export function CreateMediaByVideoType(project, formData) {
  return request({
    url: 'api/admin/projects/' + validAlias(project) + '/media/videos',
    method: 'post',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    data: formData,
  });
}

export function CreateMediaByFileType(project, formData) {
  return request({
    url: 'api/admin/projects/' + validAlias(project) + '/media/files',
    method: 'post',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    data: formData,
  });
}

export function UpdateMedia(project, id, data) {
  return request({
    url: 'api/admin/projects/' + validAlias(project) + '/media/' + id,
    method: 'put',
    data,
  });
}

export function DeleteMedia(project, id) {
  return request({
    url: 'api/admin/projects/' + validAlias(project) + '/media/' + id,
    method: 'delete',
  });
}
