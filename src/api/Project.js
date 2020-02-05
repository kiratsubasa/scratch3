import request from '@/utils/request';

/**
 * AEW Project API
 */

export function ListProjects() {
  return request({
    url: '/projects',
    method: 'get',
  });
}

export function CreateProjects(data) {
  return request({
    url: '/projects',
    method: 'post',
    data,
  });
}

export function GetProject(pid) {
  return request({
    url: '/projects/' + pid,
    method: 'get',
  });
}

export function UpdateProject(pid, data) {
  return request({
    url: '/projects/' + pid,
    method: 'put',
    data,
  });
}

export function DeleteProject(pid) {
  return request({
    url: '/projects/' + pid,
    method: 'delete',
  });
}
