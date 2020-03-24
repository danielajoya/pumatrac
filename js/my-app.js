// Initialize your app
var myApp = new Framework7({
	root:'#app',
	theme: 'md', //ios, md, auto
    modalTitle: 'App Coffee', 	//title for modals
	panel: {
    	swipe: 'left',
  	},
	cache:false,
	pushState:false,
	swipeBackPage:true,
	material: true,
	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
        {
		path: '/indoor/',
    	url: 'indoor.html',
    	name: 'indoor',
  		},
        {
		path: '/info/',
    	url: 'info.html',
    	name: 'info',
  		},
        {
		path: '/profile/',
    	url: 'profile.html',
    	name: 'profile',
  		}
	]
});

// Export selectors engine
var $$ = Dom7;





 

