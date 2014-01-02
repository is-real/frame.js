define(
	[],
	function () {

		var id = 0;

		return function ( name, layer, start, end, module, parameters ) {

			this.id = id ++;
			this.name = name;
			this.layer = layer;
			this.start = start;
			this.end = end;
			this.module = module;
			this.parameters = parameters;

			this.module.init( this.parameters );

		};
	}
);