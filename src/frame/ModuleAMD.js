define(
	[],
	function () {

		return function Module ( data ) {

			var module = function () {

				this.name = '';
				this.parameters = {};

			};

			module.prototype.init = function ( parameters ) {};

			module.prototype.load = function ( callback ) {};

			module.prototype.start = function ( callback ) {};

			module.prototype.update = function ( callback ) {};

			return module;
		};
	}
);