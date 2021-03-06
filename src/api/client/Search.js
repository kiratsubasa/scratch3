import request from '@/utils/request';

/**
 * AEW Search API
 */

export function SearchArticles(data, page) {
  return request({
    url: '/api/search/articles?page='+page,
    method: 'post',
    data,
    // params: page,
  });
}

export function SearchPages(data, page) {
  return request({
    url: '/api/search/pages?page='+page,
    method: 'post',
    data,
    // params: page,
  });
}

export function SearchHumanResources(data, page) {
  return request({
    url: '/api/search/humanResources?page='+page,
    method: 'post',
    data,
    // params: page,
  });
}

export function SearchLessons(data, page) {
  return request({
    url: '/api/search/lessons?page=' + page,
    method: 'post',
    data,
    // params: page,
  });


}

