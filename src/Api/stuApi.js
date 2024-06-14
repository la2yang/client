import request from './request'

export function getStuInfo() {
  return request({
    url: '/student',
    method: 'Get',
  })
}

/**
 *
 * @returns
 */
export function getClassInfo() {
  return request({
    url: '/classes',
    method: 'Get',
  })
}
