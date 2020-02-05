import request from '@/utils/request';

/**
 * AEW ArticleCategory API
 */

export function ListArticleCategories(pid) {
  return request({
    url: '/projects/' + pid + '/articleCategories',
    method: 'get',
  });
}

export function CreateArticleCategorie(pid, data) {
  return request({
    url: '/projects/' + pid + '/articleCategories',
    method: 'post',
    data,
  });
}

export function GetArticleCategorie(pid, id) {
  return request({
    url: '/projects/' + pid + '/articleCategories/' + id,
    method: 'get',
  });
}

export function UpdateArticleCategorie(pid, id, data) {
  return request({
    url: '/projects/' + pid + '/articleCategories/' + id,
    method: 'put',
    data,
  });
}

export function DeleteArticleCategorie(pid, id) {
  return request({
    url: '/projects/' + pid + '/articleCategories/' + id,
    method: 'delete',
  });
}

export function ListArticleOfCategorie(pid, id) {
  return request({
    url: '/projects/' + pid + '/articleCategories/' + id + '/articles',
    method: 'get',
  });
}
