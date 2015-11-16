app.controller('SuggestionController', ['$scope', '$routeParams', 'suggestions', function($scope, $routeParams, suggestions) {
	suggestions.success(function(data) {
		$scope.post = suggestions.posts[$routeParams.id];
		$scope.addComment = function() {
			if(!$scope.post.comment || $scope.post.comment === "") {
				return;
			}
			$scope.post.comment.push({
				body: '',
				upvotes: 0
			});
			$scope.post.comment = '';
		};
		$scope.upVoteComment = function(index) {
			$scope.post.comment[index].upvotes += 1; 
		};
	});
}]);