app.factory('suggestions', [function() {
	var demoSuggestions = {
	  posts: [
	    {
	      title: 'Free pizza at club meetings',
	      upvotes: 15,
	      comments: [
	      	{
	      	  body: 'Heartily agree!',
	      	  upvotes: 2
	      	},
	      	{
	      	  body: 'YESSS!!!',
	      	  upvotes: 5
	      	}
	      ]
	    },
	    {
	      title: 'End all club emails with Laffy Taffy jokes',
	      upvotes: 9,
	      comments: []
	    },
	    {
	      title: 'Retrofit water fountain with Gatorade',
	      upvotes: 7,
	      comments: []
	    },
	    {
	      title: 'Sing Bon Jovi\'s "Living on a Prayer" halfway throught meetings',
	      upvotes: 3,
	      comments: []
	    }
	  ]
	}
	return demoSuggestions;
}]);