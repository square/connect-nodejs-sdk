/**
 * JavaScript header utils library for the Square Connect v2 API.
 */

module.exports = {
 /** Returns object[matchKey] for a case-insensitive matchKey.
  *
  * Should be used to look up header params, since HTTP/2 requires lowercase
  * headers but some old HTTP/1 services may return any capitalization scheme.
  * 
  * Usage:
  *   responseHeaders = {
  *     sOmE-HeAdEr: 'value'
  *   }
  *   HeaderUtils.caseInsensitiveGet(responseHeaders, 'some-header') // returns 'value'.
  */
  caseInsensitiveGet: function(object, matchKey) {
    const objectKey = Object.keys(object).find(
      key => key.toLowerCase() === matchKey.toLowerCase()
    );

    return object[objectKey];
  }
};
 