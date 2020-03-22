import request from '@/utils/request';

/**
 * AEW Client Application API
 */

export function ListApplications(page) {
  return request({
    url: 'api/applications',
    method: 'get',
    params: page,
  });
}

export function CreateApplication(id) {
  return request({
    url: 'api/applicationForms/' + id + '/applications',
    method: 'post',
  });
}

export function GetApplication(id) {
  return request({
    url: 'api/applications/' + id,
    method: 'get',
  });
}

export function UpdateApplication(id) {
  return request({
    url: 'api/applications/' + id,
    method: 'put',
  });
}

export function DeleteApplication(id) {
  return request({
    url: 'api/applications/' + id,
    method: 'delete',
  });
}

