define(
	[
		'frame/Curves',
		'frame/Module',
		'frame/ModuleParameter',
		'frame/Timeline',
		'frame/TimelineElement'
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