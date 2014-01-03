define(
	[
		'framePath/ModuleAMD',
		'framePath/ModuleParameter'
	],
	function ( Module, ModuleParameter ) {

		var module = function ( config ) {

			Module.call( this );
			this.setup( config );
		};

		module.prototype = new Module();
		module.prototype.constructor = module;

		module.prototype.setup = function ( config ) {

			this.camera		= new THREE.OrthographicCamera( -1, 1, 1, -1, 0, 1 );
			this.scene		= new THREE.Scene();
			this.material	= new THREE.MeshBasicMaterial( { transparent: true } );
			this.mesh		= new THREE.Mesh( new THREE.PlaneGeometry( 2, 2 ), this.material );
			this.renderer	= config.renderer;

			this.scene.add( this.mesh );

			this.parameters = {

				color	: new ModuleParameter.Color( 'Color', 0xffffff ),
				opacity	: new ModuleParameter.Float( 'Opacity', 1, 0, 1 )
			};
		};

		module.prototype.update = function ( callback ) {

			this.material.color.setHex( this.parameters.color );
			this.material.opacity = this.parameters.opacity;

			this.renderer.render( this.scene, this.camera );
		};

		return module;
	}
);