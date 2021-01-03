/*
 * @Description:
 * @Date: 2020-05-06 22:22:16
 * @Author: Jsmond2016
 * @Copyright: Copyright (c) 2020
 */

import { reqArticleData, reqUserData, reqTopicsData } from '../api'
import {
  RECEIVE_TOPICS,
  RECEIVE_USER,
  RECEIVE_ARTICLE,
  CHANGE_LOADING
} from './mutation-types'

export default {

  async getArticleData ({commit}, id) {
    const result = await reqArticleData(id)
    commit(RECEIVE_ARTICLE, { article: result.data })
  },

  async getTopicsData ({commit}, params) {
    // mdrender String 当为 false 时，不渲染。默认为 true，渲染出现的所有 markdown 格式文本
    const { tab = 'all', page = 1, limit = 20, mdrender = false } = params
    const result = await reqTopicsData({
      tab,
      limit,
      page,
      mdrender
    })
    commit(RECEIVE_TOPICS, {topics: result.data})
  },

  async getUserInfo ({commit}, author) {
    const result = await reqUserData(author)
    commit(RECEIVE_USER, {userinfo: result.data})
  },

  changeLoadingStatus ({commit}, isLoading) {
    commit(CHANGE_LOADING, {isLoading})
  }
}
