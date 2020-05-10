/*
 * @Description: 查询请求
 * @Date: 2020-05-06 22:26:25
 * @Author: Jsmond2016
 * @Copyright: Copyright (c) 2020
 */

import ajax from './ajax'

const baseUrl = 'https://cnodejs.org/api/v1'

export const reqArticleData = (searchId = '') => ajax(`${baseUrl}/topic/${searchId}`)

export const reqTopicsData = (searchParams = {}) => ajax(`${baseUrl}/topics`, searchParams)

export const reqUserData = (author = '') => ajax(`${baseUrl}/user/${author}`)
