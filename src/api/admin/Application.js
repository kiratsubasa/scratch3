import request from '@/utils/request';
import { validAlias } from '@/utils/validate';
/**
 * AEW Application API
 */

export function ListApplications(project, id, page) {
  return request({
    url: 'api/admin/projects/' + validAlias(project) + '/applicationForms/' + id + '/applications',
    method: 'get',
    params: page,
  });
}

export function GetApplication(project, id) {
  return request({
    url: 'api/admin/projects/' + validAlias(project) + '/applications/' + id,
    method: 'get',
  });
}

export function DownloadAttachment(project, id) {
  return request({
    url: 'api/admin/projects/' + validAlias(project) + '/applications/' + id + '/attachment',
    method: 'get',
  });
}
