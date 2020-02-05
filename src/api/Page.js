import request from '@/utils/request';

/**
 * AEW Page API
 */

export function ListPages(pid) {
  return request({
    url: '/projects/' + pid + '/pages',
    method: 'get',
  });
}

export function CreatePage(pid, data) {
  return request({
    url: '/projects/' + pid + '/pages',
    method: 'post',
    data,
  });
}

export function GetPage(pid, id) {
  return request({
    url: '/projects/' + pid + '/pages/' + id,
    method: 'get',
  });
}

export function UpdatePage(pid, id, data) {
  return request({
    url: '/projects/' + pid + '/pages/' + id,
    method: 'put',
    data,
  });
}

export function DeletePage(pid, id) {
  return request({
    url: '/projects/' + pid + '/pages/' + id,
    method: 'delete',
  });
}
