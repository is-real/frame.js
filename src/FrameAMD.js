
// framePath: requireJS path to this folder

define(
	[
		'framePath/Curves',
		'framePath/Module',
		'framePath/ModuleParameter',
		'framePath/Timeline',
		'framePath/TimelineElement'
	],
	function ( Curves, Module, ModuleParameter, Timeline, TimelineElement ) {

		return {

			VERSION			: 2,
			Curves			: Curves,
			Module			: Module,
			ModuleParameter	: ModuleParameter,
			Timeline		: Timeline,
			TimelineElement	: TimelineElement,
		};
	}
);