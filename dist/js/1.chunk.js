webpackJsonp([1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {(function(){
		//加载模块CSS
		__webpack_require__(12);
		//加载模板
		var html=__webpack_require__(14);
		
		module.exports=function(text){
			$('body').append(html);
			$('.dialog>span').last().text(text);
		};
		
	})();



	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(13);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./dialog.css", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./dialog.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".dialog{\r\n\tmargin-bottom: 20px;\r\n\tpadding:30px;\r\n\tcolor: #FF9900;\r\n\tborder: 1px solid #FF9900;\r\n}\r\n", ""]);

	// exports


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<div class=\"dialog\">\n\t<span></span>\n\t<img src=\"" + __webpack_require__(15) + "\" />\n</div>\r\n";

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "./img/f903e75e14c494cbd6eeba1dc1480dbb.jpg";

/***/ }
]);