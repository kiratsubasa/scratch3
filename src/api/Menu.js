import request from '@/utils/request';

/**
 * AEW Menu API
 */

export function ListMenus(pid) {
  return request({
    url: '/projects/' + pid + '/menus',
    method: 'get',
  });
}

export function CreateMenu(pid, data) {
  return request({
    url: '/projects/' + pid + '/menus',
    method: 'post',
    data,
  });
}

export function GetMenu(pid, id) {
  return request({
    url: '/projects/' + pid + '/menus/' + id,
    method: 'get',
  });
}

export function UpdateMenu(pid, id, data) {
  return request({
    url: '/projects/' + pid + '/menus/' + id,
    method: 'put',
    data,
  });
}

export function DeleteMenu(pid, id) {
  return request({
    url: '/projects/' + pid + '/menus/' + id,
    method: 'delete',
  });
}
