'use strict'

class cacheLru {
  
  constructor(request = {}) {
    const { key, value } = request
    this.key = key
    this.value = value
    const M = new Map()
    this.M = M
  }

  /**
   *
   * @param {String} key - key.
   * @param {String || Object} value - value against key.
   * 
   */
  async insertInCache() {
    this.M.set(this.key, this.value)
  }

  /**
   *
   * @param {String} key - key.
   * 
   */
  async purgeCache() {
    this.M = this.M.delete(this.key)
  }
  // async viewCache() {

  // }
}

export default cacheLru