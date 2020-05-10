/*
 * @Description:
 * @Date: 2020-05-06 22:21:00
 * @Author: Jsmond2016
 * @Copyright: Copyright (c) 2020
 */

import {
  RECEIVE_TOPICS,
  RECEIVE_USER,
  RECEIVE_ARTICLE,
  CHANGE_LOADING
} from './mutation-types'

export default {
  [RECEIVE_TOPICS] (state, {
    topics
  }) {
    state.topics = topics
  },
  [RECEIVE_USER] (state, {
    userinfo
  }) {
    state.userinfo = userinfo
  },
  [RECEIVE_ARTICLE] (state, {
    article
  }) {
    state.article = article
  },
  [CHANGE_LOADING] (state, {isLoading}) {
    state.isLoading = isLoading
  }
}
