angular.module('gameServices',['ngResource'])
.factory("Game",function ($resource){
	
	return {
		getGameObj: function(){
			var game={};
			store.get('wolf_game',function(data) {
				game=data;
			});
			return game;





		}
	}


});