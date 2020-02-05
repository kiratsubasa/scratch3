import request from '@/utils/request';

/**
 * AEW Articles API
 */

export function ListArticles(pid) {
  return request({
    url: '/projects/' + pid + '/articles',
    method: 'get',
  });
}

export function CreateArticle(pid, data) {
  return request({
    url: '/projects/' + pid + '/articles',
    method: 'post',
    data,
  });
}

export function GetArticle(id) {
  return request({
    url: '/articles/' + id,
    method: 'get',
  });
}

export function UpdateArticle(pid, id, data) {
  return request({
    url: '/projects/' + pid + '/articles/' + id,
    method: 'put',
    data,
  });
}

export function DeleteArticle(pid, id) {
  return request({
    url: '/projects/' + pid + '/articles/' + id,
    method: 'delete',
  });
}
