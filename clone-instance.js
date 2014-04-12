try{ var base = window; }catch( error ){ var base = exports; }
( function module( base ){
	define( "cloneInstance",
		[
			"pickObjectProperty"
		],
		function contruct( ){
			var blueprintParameterPattern = /function\s+.+?\((.+?)\)/;

			var cloneInstance = function cloneInstance( instance ){
				/*
					We have to ensure that the instance's constructor
						is a verified class.

					A verified class contains a name that is not
						either "Object" or "Array".

					Other classes should be tested here.

					TODO: Test for Date, RegExp and other native classes.
				*/
				if( typeof instance != "object"
					|| instance.constructor.name === "Object"
					|| instance.constructor.name === "Array" )
				{
					throw new Error( "invalid instance" );
				}

				var blueprint = instance.constructor;

				//Let's extract the parameters from this constructor.
				var parameterList = blueprint.toString( ).match( blueprintParameterPattern )[ 1 ];
				parameterList = parameterList.replace( /\s+/g, "" ).split( "," );

				

				var clonedInstance = new blueprint.call

			};

			base.cloneInstance = cloneInstance;
		} );
} )( base );