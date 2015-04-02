'use strict';

module.exports = (function() {
  return !!('ontouchstart' in window) || !!('onmsgesturechange' in window);
}());
