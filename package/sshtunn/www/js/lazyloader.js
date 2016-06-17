var plugInModule = angular.module('plugInModule', []);

plugInModule.config(
	function( $controllerProvider, $provide, $compileProvider, $filterProvider ) {
		console.log( "Config method executed." );

		// Let's keep the older references.
		plugInModule._controller = plugInModule.controller;
		plugInModule._service = plugInModule.service;
		plugInModule._factory = plugInModule.factory;
		plugInModule._value = plugInModule.value;
		plugInModule._directive = plugInModule.directive;
		plugInModule._filter = plugInModule.filter;

		// Provider-based controller.
		plugInModule.controller = function( name, constructor ) {
			$controllerProvider.register( name, constructor );
			return( this );
		};

		// Provider-based service.
		plugInModule.service = function( name, constructor ) {
			$provide.service( name, constructor );
			return( this );
		};

		// Provider-based factory.
		plugInModule.factory = function( name, factory ) {
			$provide.factory( name, factory );
			return( this );
		};

		// Provider-based value.
		plugInModule.value = function( name, value ) {
			$provide.value( name, value );
			return( this );
		};

		// Provider-based directive.
		plugInModule.directive = function( name, factory ) {
			$compileProvider.directive( name, factory );
			return( this );
		};

		// Provider-based filter.
		plugInModule.filter = function( name, constructor ) {
			$filterProvider.register( name, constructor );
			return( this );
		};
	}
);

