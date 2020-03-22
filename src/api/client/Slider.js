import request from '@/utils/request';
import { validAlias } from '@/utils/validate';
/**
 * AEW Slider API
 */

export function GetSliders(project) {
  return request({
    url: 'api/projects/' + validAlias(project) + '/sliders',
    method: 'get',
  });
}
