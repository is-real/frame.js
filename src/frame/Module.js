define(
	[],
	function () {

		return function Module ( data ) {

			if ( data === undefined ) data = {};

			this.name = '';
			this.parameters = data.parameters !== undefined ? data.parameters : {};

			this.init = data.init !== undefined ? data.init : function ( parameters ) {};
			this.load = data.load !== undefined ? data.load : function ( callback ) {};
			this.start = data.start !== undefined ? data.start : function ( value ) {};
			this.update = data.update !== undefined ? data.update : function ( value ) {};
		};
	}
);