import request from '@/utils/request';

/**
 * AEW Template API
 */

export function ListTemplates() {
  return request({
    url: '/admin/templates',
    method: 'get',
  });
}
