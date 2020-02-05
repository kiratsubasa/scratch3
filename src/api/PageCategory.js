import request from '@/utils/request';

/**
 * AEW PageCategory API
 */

export function ListPageCategories(pid) {
  return request({
    url: '/projects/' + pid + '/pageCategories',
    method: 'get',
  });
}

export function CreatePageCategorie(pid, data) {
  return request({
    url: '/projects/' + pid + '/pageCategories',
    method: 'post',
    data,
  });
}

export function GetPageCategorie(pid, id) {
  return request({
    url: '/projects/' + pid + '/pageCategories/' + id,
    method: 'get',
  });
}

export function UpdatePageCategorie(pid, id, data) {
  return request({
    url: '/projects/' + pid + '/pageCategories/' + id,
    method: 'put',
    data,
  });
}

export function DeletePageCategorie(pid, id) {
  return request({
    url: '/projects/' + pid + '/pageCategories/' + id,
    method: 'delete',
  });
}

export function ListPageOfCategorie(pid, id) {
  return request({
    url: '/projects/' + pid + '/pageCategories/' + id + '/pages',
    method: 'get',
  });
}
