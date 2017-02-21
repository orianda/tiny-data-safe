/*!
 * tiny-data-safe
 * Store data in safe and prevent them from being accessed without the valid key.
 *
 * @version v1.0.0
 * @link https://github.com/orianda/tiny-data-safe
 * @author Orianda <orianda@paan.de>
 * @license MIT
 */
(function (create) {
  'use strict';

  var Class = create();

  if (typeof module === 'object' && module instanceof Object && module.exports instanceof Object) {
    module.exports = Class;
  } else if (typeof window === 'object' && window instanceof Object) {
    window[Class.name] = Class;
  } else {
    throw new Error('No valid context available.');
  }

})(function () {
  'use strict';

  /**
   * Find index of key
   * @param {Array[]} store
   * @param {Object} key
   * @returns {number}
   */
  function indexOf(store, key) {
    var i, l;
    for (i = 0, l = store.length; i < l; i++) {
      if (store[i][0] === key) {
        return i;
      }
    }
    return -1;
  }

  /**
   * Create data safe instance
   * @constructor
   */
  function TinyDataSafe() {
    var store = [];

    /**
     * Ensure this context was created during new operation
     */
    if (!(this instanceof TinyDataSafe)) {
      return new TinyDataSafe();
    }

    /**
     * Append data to store
     * @param {*} data
     * @returns {Object}
     */
    this.add = function (data) {
      var key = {};
      store.push([key, data]);
      return key;
    };

    /**
     * Create or replace data
     * @param {Object} key
     * @param {*} data
     */
    this.set = function (key, data) {
      var index = indexOf(store, key);
      if (index < 0) {
        store.push([key, data]);
      } else {
        store[index][1] = data;
      }
    };

    /**
     * Get data of key
     * @param {Object} key
     * @returns {*}
     */
    this.get = function (key) {
      var index = indexOf(store, key);
      if (index < 0) {
        return undefined;
      } else {
        return store[index][1];
      }
    };

    /**
     * Removes data of key
     * @param key
     */
    this.rid = function (key) {
      var index = indexOf(store, key);
      if (index >= 0) {
        store.splice(index, 1);
      }
    };
  }

  return TinyDataSafe;
});