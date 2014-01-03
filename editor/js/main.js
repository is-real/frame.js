var framePath = ( function () {

		var scripts = document.getElementsByTagName('script'),
			path	= '';
		for ( var i = 0, l = scripts.length; i < l; i++ ) {

			if ( scripts[ i ].src.indexOf( 'require.js' ) !== -1 ) {
				path = scripts[ i ].getAttribute( 'data-frame-path' );
				break;
			}
		}

		return path;

	} )();

var examplesPath = ( function () {

		var scripts = document.getElementsByTagName('script'),
			path	= '';
		for ( var i = 0, l = scripts.length; i < l; i++ ) {

			if ( scripts[ i ].src.indexOf( 'require.js' ) !== -1 ) {
				path = scripts[ i ].getAttribute( 'data-examples-path' );
				break;
			}
		}

		return path;

	} )();

require.config( {

	baseUrl	: 'js',
	paths	: {

		'examplesPath'	: '../' + examplesPath,
		'framePath'		: '../' + framePath + '/frame',
		'frame'			: '../' + framePath +'/FrameAMD',
		'libsPath'		: 'libs',
		'signals'		: 'libs/signals.min'
	},
	shim	: {}
} );

require(
	[
		'frame'
	],
	function ( FRAME ) {

		// TODO: when everything gets ported to AMD, we should not need to make it
		// a window object, in the meantime:
		window.FRAME = FRAME;



		var editor = new Editor();
		var signals = editor.signals;

		var properties = new Properties( editor ).setId( 'properties' );
		document.body.appendChild( properties.dom );

		var viewport = new Viewport( editor ).setId( 'viewport' );
		document.body.appendChild( viewport.dom );

		var timeline = new Timeline( editor ).setId( 'timeline' );
		document.body.appendChild( timeline.dom );

		var menubar = new Menubar( editor ).setId( 'menubar' );
		document.body.appendChild( menubar.dom );

		var json = {
			"config":{
				"width":1280,
				"height":720,
				"path":"../examples/obsidian/",
				"audio":"files/obsidian.ogg"
			},
			"modules":{
				"WebGLRendererModule":"js/modules/WebGLRendererModule.js",
				"ColorModule":"js/modules/ColorModule.js",
				"TextModule":"js/modules/TextModule.js",
				"SceneModule":"js/modules/SceneModule.js",
				"Scene2Module":"js/modules/Scene2Module.js",
				"Scene2bModule":"js/modules/Scene2bModule.js",
				"Scene3Module":"js/modules/Scene3Module.js",
				"Scene4Module":"js/modules/Scene4Module.js",
				"Scene5Module":"js/modules/Scene5Module.js",
				"Scene6Module":"js/modules/Scene6Module.js",
				"Scene6bModule":"js/modules/Scene6bModule.js",
				"Scene7Module":"js/modules/Scene7Module.js"
			},
			"curves":[
				["linear",[0,0.9,4.3125,0]],
				["linear",[13.10237494155758,0.75,13.209243333664636,0]],
				["linear",[13.222523546148029,0.75,13.320538463266152,0]],
				["linear",[13.33381867574956,0.75,13.453967280340017,0]],
				["linear",[13.524806843061466,0.75,13.644955447651922,0]],
				["linear",[13.647662866830075,0.75,13.767811471420531,0]],
				["linear",[13.820206681001373,0.75,13.94035528559183,0]],
				["linear",[13.93287025565171,0.75,14.053018860242167,0]],
				["linear",[82.27357633279475,0.9,83.49363893376405,0]],
				["saw",0.869,0.6,1,0]
			],
			"timeline":[
				[0,0,247,"WebGLRendererModule",{"dom":null}],
				[1,0,14.052395209580844,"SceneModule",{"startPosition":[100,100,100],"endPosition":[-100,100,100]}],
				[3,0,4.3125,"ColorModule",{"color":12312063,"opacity":"$0"}],
				[2,4.3125,8.261979594939186,"TextModule",{"text":"xplsv","startPosition":[0,0,18],"endPosition":[0,0,15]}],
				[2,10.304385479837494,14.056710007672898,"TextModule",{"text":"presents","startPosition":[0,0,18],"endPosition":[0,0,15]}],
				[3,13.10237494155758,13.209243333664636,"ColorModule",{"color":12312063,"opacity":"$1"}],
				[3,13.222523546148029,13.320538463266152,"ColorModule",{"color":12312063,"opacity":"$2"}],
				[3,13.33381867574956,13.453967280340017,"ColorModule",{"color":12312063,"opacity":"$3"}],
				[3,13.524806843061466,13.644955447651922,"ColorModule",{"color":12312063,"opacity":"$4"}],
				[3,13.647662866830075,13.767811471420531,"ColorModule",{"color":12312063,"opacity":"$5"}],
				[3,13.820206681001373,13.94035528559183,"ColorModule",{"color":12312063,"opacity":"$6"}],
				[3,13.93287025565171,14.053018860242167,"ColorModule",{"color":12312063,"opacity":"$7"}],
				[1,14.052395209580844,28.042290419161688,"Scene2Module",{"startPosition":[-20,-20,30],"endPosition":[0,0,2030],"startPositionTarget":[-50,0,0],"endPositionTarget":[25,0,2000],"lightIntensity":"$9"}],
				[1,28.042290419161688,41.84468562874253,"Scene2bModule",{"startPosition":[400,0,-100],"endPosition":[50,0,2100],"startPositionTarget":[0,0,0],"endPositionTarget":[0,0,2000],"lightIntensity":"$9"}],
				[1,41.84468562874253,55.647080838323376,"Scene2Module",{"startPosition":[50,-50,300],"endPosition":[-50,-25,1700],"startPositionTarget":[0,0,-50],"endPositionTarget":[0,0,2050],"lightIntensity":"$9"}],
				[1,55.647080838323376,69.44947604790423,"Scene2bModule",{"startPosition":[50,0,100],"endPosition":[150,0,2100],"startPositionTarget":[0,0,-50],"endPositionTarget":[0,0,2050],"lightIntensity":"$9"}],
				[1,69.44947604790423,82.27260323341517,"Scene2Module",{"startPosition":[-100,-100,1100],"endPosition":[-50,0,2100],"startPositionTarget":[0,0,500],"endPositionTarget":[0,0,2000],"lightIntensity":"$9"}],
				[3,82.27357633279475,83.49363893376405,"ColorModule",{"color":12312063,"opacity":"$8"}],
				[1,83.49302603717142,111.45731305212999,"Scene3Module",{"startPosition":[-600,0,0],"endPosition":[-600,0,0]}],
				[2,83.4942100076729,86.99777831660283,"TextModule",{"text":"coding / mr.doob x three.js","startPosition":[0,0,40],"endPosition":[0,0,35]}],
				[2,87.04752956038395,90.4018441379706,"TextModule",{"text":"direction / trace","startPosition":[0,0,40],"endPosition":[0,0,35]}],
				[2,90.45159538175169,93.88053682500997,"TextModule",{"text":"music / om unit x lorn","startPosition":[0,0,40],"endPosition":[0,0,35]}],
				[2,93.93028806879107,97.40898075583046,"TextModule",{"text":"for euskal 2013","startPosition":[0,0,40],"endPosition":[0,0,35]}],
				[2,97.40898075583046,111.45371117871889,"TextModule",{"text":"OBSIDIAN","startPosition":[0,0,20],"endPosition":[0,0,7]}],
				[1,111.45731305212999,125.32785006708855,"Scene4Module",{"startPosition":[0,0,200],"endPosition":[0,0,700]}],
				[1,125.32785006708855,139.1983870820471,"Scene4Module",{"startPosition":[0,50,50],"endPosition":[300,-100,600]}],
				[1,139.1983870820471,153.06892409700566,"Scene5Module",{"startPosition":[50,-500,500],"endPosition":[0,50,1500]}],
				[1,153.06892409700566,166.93946111196422,"Scene6bModule",{"startPosition":[700,30,-500],"endPosition":[200,-100,1800]}],
				[1,166.93946111196422,180.80999812692278,"Scene6Module",{"startPosition":[100,0,300],"endPosition":[-1000,0,2200]}],
				[1,180.81446111196422,236.55999812692278,"Scene7Module",{"startPosition":[0,0,50],"endPosition":[0,50,2000],"startPositionTarget":[0,0,0],"endPositionTarget":[0,500,0]}]
			]
		};

		// load modules

		var modules = {};
		var loaded = 0, total = 0;

		for ( var key in json.modules ) {

			( function ( name, file ) {

				// console.log( 'Loading:', name );

				var request = new XMLHttpRequest();
				request.addEventListener( 'load', function ( event ) {

					loaded ++;

					console.log( 'Loaded (' + loaded + '/' + total + '):', name );

					modules[ name ] = eval( event.target.responseText )( json.config );
					modules[ name ].name = name;

					if ( loaded === total ) {

						init();

					}

				}, false );
				request.open( 'GET', file, true );
				request.send( null );

				total ++;

			} )( key, json.config.path + json.modules[ key ] )

		}

		require( ['examplesPath/obsidian/js/modules/ColorModuleAMD'], function ( ColorModule ) {

			var moduleColor = new ColorModule( json.config );
			console.log( 'module loaded via RequireJS', moduleColor );
		} );

		// curves

		var curves = [];

		for ( var i = 0, l = json.curves.length; i < l; i ++ ) {

			var data = json.curves[ i ];

			var curve;

			switch ( data[ 0 ] ) {
				case 'linear':
					curve = new FRAME.Curves.Linear( data[ 1 ] );
					break;
				case 'sin':
					curve = new FRAME.Curves.Sin();
					break;
				case 'saw':
					curve = new FRAME.Curves.Saw( data[ 1 ], data[ 2 ], data[ 3 ], data[ 4 ] );
					break;
			}

			editor.addCurve( curve );
			curves.push( curve );

		}

		// init timeline

		var init = function () {

			for ( var i = 0, l = json.timeline.length; i < l; i ++ ) {

				var data = json.timeline[ i ];

				var layer = data[ 0 ];
				var start = data[ 1 ];
				var end = data[ 2 ];
				var moduleName = data[ 3 ];
				var parameters = data[ 4 ];

				var module;

				if ( modules[ moduleName ] === undefined ) {

					console.log( 'FRAME: Missing module: ' + moduleName );
					continue;

				} else {

					module = modules[ moduleName ];

				}

				// parameters

				if ( parameters === undefined ) parameters = {};

				for ( var key in module.parameters ) {

					// set defaults

					if ( parameters[ key ] === undefined ) {

						parameters[ key ] = module.parameters[ key ].value;

					}

				}

				for ( var key in parameters ) {

					if ( module.parameters[ key ] === undefined ) {

						console.log( 'FRAME: [' + moduleName + '] doesn\'t have parameter "' + key + '"' );
						delete parameters[ key ];
						continue;

					}

					var parameter = parameters[ key ];

					if ( typeof( parameter ) === 'string' && parameter.charAt( 0 ) === '$' ) {

						var id = parseInt( parameter.substr( 1 ) );

						( function ( curve ) {

							Object.defineProperty( parameters, key, {

								get: function() {

									return curve.value;

								}

							});

						} )( curves[ id ] )

					}

				}

				if ( parameters.dom !== undefined ) {

					parameters.dom = viewport.dom;

				}

				var element = new FRAME.TimelineElement( moduleName, layer, start, end, module, parameters );

				editor.add( element );

			}

			var hash = location.hash.substr( 1 );
			signals.setTime.dispatch( hash !== '' ? hash : 0 );

		};

		//

		var time = 0;
		var audio = document.createElement( 'audio' );
		audio.addEventListener( 'durationchange', function ( event ) {

			editor.signals.durationChanged.dispatch( audio.duration );

		} );
		audio.src = json.config.path + json.config.audio;
		document.body.appendChild( audio );

		signals.play.add( function () {

			if ( audio.paused === true ) {

				audio.currentTime = time;
				audio.play();
				animate();

			} else {

				audio.pause();

			}

		} );

		signals.setTime.add( function ( value ) {

			time = Math.max( 0, value );

			if ( audio.duration > 0 ) audio.currentTime = time;

			location.hash = time;

			signals.timeChanged.dispatch( time );

		} );

		document.addEventListener( 'keydown', function ( event ) {

			switch ( event.keyCode ) {

				case 8: // prevent browser back
					event.preventDefault();
					break;
				case 32:
					signals.play.dispatch();
					break;
				case 37:
					event.preventDefault();
					signals.setTime.dispatch( time - 1 );
					break;
				case 39:
					event.preventDefault();
					signals.setTime.dispatch( time + 1 );
					break;
				case 38:
					event.preventDefault();
					audio.playbackRate = audio.playbackRate + 0.1;
					signals.playbackRateChanged.dispatch( audio.playbackRate );
					break;
				case 40:
					event.preventDefault();
					audio.playbackRate = audio.playbackRate - 0.1;
					signals.playbackRateChanged.dispatch( audio.playbackRate );
					break;

			}

		} );

		var animate = function () {

			if ( audio.paused === false ) {

				requestAnimationFrame( animate );

			}

			time = audio.currentTime;
			signals.timeChanged.dispatch( time );

		};

	}
);