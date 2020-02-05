import request from '@/utils/request';

/**
 * AEW ApplicationForm API
 */

export function ListApplicationForms(pid) {
  return request({
    url: '/projects/' + pid + '/applicationForms',
    method: 'get',
  });
}

export function CreateApplicationForm(pid, data) {
  return request({
    url: '/projects/' + pid + '/applicationForms',
    method: 'post',
    data,
  });
}

export function GetApplicationForm(pid, id) {
  return request({
    url: '/projects/' + pid + '/applicationForms/' + id,
    method: 'get',
  });
}

export function UpdateApplicationForm(pid, id, data) {
  return request({
    url: '/projects/' + pid + '/applicationForms/' + id,
    method: 'put',
    data,
  });
}

export function DeleteApplicationForm(pid, id) {
  return request({
    url: '/projects/' + pid + '/applicationForms/' + id,
    method: 'delete',
  });
}
