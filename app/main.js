(function(app){
	document.addEventListener('DomContentLoaded',function(){
		ng.platformBrowseerDynamic
		  .platformBrowseerDynamic()
		  .bootstrapModule(app.AppModule);

	});
})(window.app || (window.app{}));