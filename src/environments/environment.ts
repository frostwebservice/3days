
// This file can be replaced during build by using the fileReplacements array.
// ng build --prod replaces environment.ts with environment.prod.ts.
// The list of file replacements can be found in angular.json.

export const environment = {
	production: false,
	api: 'https://memvera.com/api/',
	front: 'http://localhost:4200/',
	domain: {
		server: 'memvera.com',
	},
	"tap_api_production_key": "sk_live_jsh8X5f9PEWORZVJw0lL7ixt",
	"tap_api_testing_key": "sk_test_tw7FVrKdxhm0sQpPaHOoY4qR",
};

/*
	* For easier debugging in development mode, you can import the following file
	* to ignore zone related error stack frames such as zone.run, zoneDelegate.invokeTask.
	*
	* This import should be commented out in production mode because it will have a negative impact
	* on performance if an error is thrown.
	*/
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.