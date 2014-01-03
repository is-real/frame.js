define(
	[],
	function () {

		return function Timeline() {

			var curves = [];
			var elements = [];
			var active = [];

			var next = 0, prevtime = 0;

			return {

				curves: curves,
				elements: elements,

				add: function ( element ) {

					elements.push( element );
					this.sort();

				},

				remove: function ( element ) {

					var i = elements.indexOf( element );

					if ( i !== -1 ) {

						elements.splice( i, 1 );

					}

				},

				sort: function () {

					elements.sort( function ( a, b ) { return a.start - b.start; } );

				},

				update: function ( time ) {


					if ( time < prevtime ) {

						this.reset();

					}

					// add to active

					var element = null;

					while ( elements[ next ] ) {

						element = elements[ next ];

						if ( element.start > time ) {

							break;

						}

						if ( element.end > time ) {

							active.push( element );
							element.module.start( element.parameters );

						}

						next ++;

					}

					// remove from active

					var i = 0;

					while ( active[ i ] ) {

						element = active[ i ];

						if ( element.end < time ) {

							active.splice( i, 1 );
							continue;

						}

						i ++;

					}

					// update curves

					for ( i = 0, l = curves.length; i < l; i ++ ) {

						curves[ i ].update( time );

					}

					// render

					active.sort( function ( a, b ) { return a.layer - b.layer; } );

					for ( i = 0, l = active.length; i < l; i ++ ) {

						element = active[ i ];
						element.module.update( element.parameters, ( time - element.start ) / ( element.end - element.start ) );

					}

					prevtime = time;

				},

				reset: function () {

					while ( active.length ) active.pop();
					next = 0;

				}
			};
		};
	}
);