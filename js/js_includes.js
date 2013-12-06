var controllers=['home'];

for (var i=0;i<controllers.length;i++)
{
	head.load('js/controllers/'+controllers[i]+'.js');
}
head.js(
	{zepto: "js/libs/zepto.min.js"},
	{angular:"js/libs/angular.min.js" },
	{ang_resource:'js/libs/angular-resource.min.js'},
	{ang_route: 'js/libs/angular-route.min.js'},
	{parsley: "js/libs/parsley.min.js"},
	{app: "js/app.js"}
);




 head.ready(function () {
   	window.jQuery=Zepto;
 	 head.load( "js/libs/bootstrap.min.js");
                // some callback stuff
});