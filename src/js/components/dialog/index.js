(function(){
	//加载模块CSS
	require('./dialog.css');
	//加载模板
	var html=require('./dialog.html');
	
	module.exports=function(text){
		$('body').append(html);
		$('.dialog>span').last().text(text);
	};
	
})();


