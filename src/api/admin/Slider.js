import request from '@/utils/request';
import { validAlias } from '@/utils/validate';
/**
 * AEW Slider API
 */

export function GetSliders(project) {
  return request({
    url: 'api/admin/projects/' + validAlias(project) + '/sliders',
    method: 'get',
  });
}

export function CreateSliderItem(project, data) {
  return request({
    url: 'api/admin/projects/' + validAlias(project) + '/sliders',
    method: 'post',
    data,
  });
}

export function GetSliderItem(project, id) {
  return request({
    url: 'api/admin/projects/' + validAlias(project) + '/sliders/' + id,
    method: 'get',
  });
}

export function UpdateSliderItem(project, id, data) {
  return request({
    url: 'api/admin/projects/' + validAlias(project) + '/sliders/' + id,
    method: 'put',
    data,
  });
}

export function DeleteSliderItem(project, id) {
  return request({
    url: 'api/admin/projects/' + validAlias(project) + '/sliders/' + id,
    method: 'delete',
  });
}
