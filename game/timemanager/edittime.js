/* ************************************************************************ 
	Time Manager v1.08
	Scirra Construct 2 plugin (http://www.scirra.com)
	Created by Mikael Nilsson
	
	Time Manager is a plugin that helps you calculate and display time as a counter, with or without a time limit, or as a countdown. 
	You can display the time in different ways like in hours, minutes, seconds and/or milliseconds. 
	You can reset your time instance, pause it and resume it whenever you wish to!
	You can also change the length of time, by changing a minute equals 90 seconds, or a hour equals 120 minutes!
	This plugin is distributed in the hope that it will be useful, without any warranty or garantuees.
	
	v1.08
		- FIX:		Fixed issue that may have resetted some counters that shouldn't be resetted when adding new counters to the plugin.	
		- FUNCTION: Added "Time counter with start value" function. This function allows the user to add a start value, so that the counter will start counting at this given value, instead of
					starting at 0 (zero) as default.
		- FUNCTION:	Added "ConvertNumberToMMSSMM" function to the expressions.
	v1.07
		- FUNCTION:	Added a == (equal to) parameter to the "Check counter value"-function. 
					This function release is a test to see if its working as intended. 
					The problem with using == as a condition, is that its practically impossible to exactly get a situation where the values are eqaul, due to the time calculation
					is calculated in milliseconds, and therefor the values are very high. And since the FPS and update doesnt run once per millisecond, a equal condition might never be true,
					because the update might have taken 1 millisecond too long to be a match. 
					Therefor I have added that if a time value is higher than the previous time at the update, and lower than the current time during the update, its considered equal.
					This needs to be tested properly before it can be accepted into the final code.
		- FUNCTION:	Added" <= less/equal to and >= bigger/equal to, to the "Check counter value"-function.
		- FUNCTION:	Added "RemoveSingleCounter"-function. This function removes a single counter from the Time Manager. I added this to get the option to remove
					unwanted timers that would only take up a spot in the Time Manager list and, in larger amount, more time to calculate active counters.
	
	v1.06
		- FUNCTION:	Added "CheckCounterValue"-function. The function does a check if, depending on the choice from the user, if the counter value is more, less or not equal
					to a set value. The function returns true if the check equals to the check set by the user, false otherwise.
		- FUNCTION:	Added functions to convert a NUMBER into a Time Manager string. These functions can be used without a existing Time Manager counter:
					ConvertNumberToHHMMSSMM
					ConvertNumberToHMMSSMM
					ConvertNumberToHMSSMM
					ConvertNumberToHMSMM
					ConvertNumberToHHMMSS
					ConvertNumberToHMMSS
					ConvertNumberToHMSS
					ConvertNumberToHMS
			
	v1.05
		- UPDATE:	"IsCounterRunning?"-function considers a counter, that is flagged as paused, still to be running.
					"IsCounterPaused?"-function only checks if the counter is flagged as paused, regardless if its stopped or not. 
					However, if using the stop action, the pause flag will be as false, i.e. "not paused".
		- FIX:		Countdown and limited Counter now properly stops adding/subtracting when reached its "goal" time.
		- FUNCTION:	Added "Is counter stopped?"-function. The function returns true if the counter is currently stopped and does not run.
					This function does not take into account if the counter is paused, or not.
		- UPDATE:	Updated the text in the information field for all expressions. It should now be clearer what each individual expression returns.
		- FUNCTION:	Added new action functions. These functions changes the variable to which the counter uses to retrieve its value. 
					These functions lets the user to change this base value to a prefered value. 
					So, if you wishes that seconds counts up to 120, and that equals 1 minute, then you access "Change second base value"-function and set the value to 120.
					if you wishes that minutes counts up to 90, and that equals is 1 hour, then you access "Change minute base value"-function and set the value to 90.
					"Change minute base value", changes the base minute value. Default value is 60.
					"Change second base value", changes the base second value. Default value is 60.
					"Change millisecond base value", changes the base millisecond value. Default value is 1000.
		- FUNCTION:	Added some new expression functions:
					HMMSSMM, displays a single "0" for hours under the value 10.
					HMSSMM, displays a single "0" for hours and minutes under the value 10.
					HMSMM, displays a single "0" for hours, minutes and seconds under the value 10.
					SingleSecond, displays a single "0" for seconds under the value 10.
		- CHANGE:	Expression "HHMMSSMM" (earlier GetStringHMSMTimeValue) now reverted back to display double "00" when hours is under 10, instead of earlier single "0".
					There is a new expression added to display a single "0" for hours. See "HMMSSMM"-expression for more information.
		- CHANGE:	Expression names are changed:
					GetStringHMSMTimeValue 	-> HHMMSSMM
					GetStringHMSTimeValue	-> HHMMSS
					GetStringMSMTimeValue	-> MMSSMM
					GetStringMSTimeValue	-> MMSS
					GetStringSMTimeValue	-> SSMM
					GetStringSTimeValue		-> Seconds
					GetStringMTimeValue		-> Milliseconds
					
	v1.04
		- CHANGE:	Changed the expression value for Hours. Instead of showing double "00" when hours is under 10, now will Hours only display a single "0".	
		
	v1.03
		- CHANGE: 	"Restart counter" is moved from category "Time counter options" to "Time counter activity". In the old category the function is flagged as "af_deprecated", but
					still usable to maintain backward compability, but the function is only accessable from the new category.
		- CHANGE: 	"Pause counter" is moved from category "Time counter options" to "Time counter activity". In the old category the function is flagged as "af_deprecated", but
					still usable to maintain backward compability, but the function is only accessable from the new category.
		- FUNCTION:	"Start" function that starts a stopped counter, under category "Time counter activity".
		- FUNCTION: "Stop" function that stops a counter, under category "Time counter activity".
		- CHANGE:	"Is counter finished?" will only return true, if the counter is running. If the counter is stopped or paused, this function will always return false.
		- CHANGE:	Added a Start/Stop state option to all counters:
			Started, the counter will start its count directly. Started option is set as default.
			Stopped, the counter doesnt count until its manually activated.
		- UPDATE: 	Code and functions are updated and made faster, less memory demanding and more structured.
		- FUNCTION:	"Destroy Time Manager instances function" removes all created counter instances and clears the Time Manager list.

	v1.02
		- FUNCTION: "Pause counter" function that has two options: 
			Pause, that stops a counter without resetting its values.
			Resume, that resumes a paused counter from where it was paused.
		- FUNCTION: Reset function that resets the counter to its pre-set values.
		- FUNCTION: "Is counter paused?" function that checks if the counter is paused.
		- FUNCTION: "Is counter running?" function that checks if the counter is running.
		
	v1.01
		- FIX: Counter functions now scales with the timescale variable in Construct.
		- ADDED: Added a display expression. Now it can also display the time in a string as:
			Hours:Minutes:Seconds
			Minutes:Seconds

	v1.0
		- FUNCTION: "Time countdown" function which counts from a given time (given in milliseconds) until 0 (zero).
		- FUNCTION: "Limited time counter" function which counts up to a given time (given in milliseconds).
		- FUNCTION: "Time counter" Counter function which counts up until stopped.
		- ADDED: Display the time in a string as:
			Hours:Minutes:Seconds:Milliseconds
			Minutes:Seconds:Milliseconds
			Seconds:Milliseconds
			Milliseconds
			Seconds
		- ADDED: Display the time as a NUMBER
		- FUNCTION: "Is counter finished?" function that returns true when the timer has reached its time (zero or given time).
************************************************************************ */

function GetPluginSettings()
{
	return {
		"name":			"Time Manager",			// as appears in 'insert object' dialog, can be changed as long as "id" stays the same
		"id":			"CAMFTimeManager",		// this is used to identify this plugin and is saved to the project; never change it
		"version":		"1.08",					// (float in x.y format) Plugin version - C2 shows compatibility warnings based on this
		"description":	"Time Manager is a plugin that helps you calculate and display time as a counter, with or without a time limit, or as a countdown. You can display the time in different ways like in hours, minutes, seconds and/or milliseconds. You can reset your time instance, pause it and resume it whenever you wish to!",
		"author":		"Mikael Nilsson",
		"help url":		"http://dl.dropbox.com/u/52716812/Projects/Plugin/Time%20Manager/1.03/TimeManagerPluginExampleFile_1_05.capx",
		"category":		"General",				// Prefer to re-use existing categories, but you can set anything here
		"type":			"object",				// either "world" (appears in layout and is drawn), else "object"
		"rotatable":	false,					// only used when "type" is "world".  Enables an angle property on the object.
		"flags":		0						// uncomment lines to enable flags...
						| pf_singleglobal		// exists project-wide, e.g. mouse, keyboard.  "type" must be "object".
					//	| pf_texture			// object has a single texture (e.g. tiled background)
					//	| pf_position_aces		// compare/set/get x, y...
					//	| pf_size_aces			// compare/set/get width, height...
					//	| pf_angle_aces			// compare/set/get angle (recommended that "rotatable" be set to true)
					//	| pf_appearance_aces	// compare/set/get visible, opacity...
					//	| pf_tiling				// adjusts image editor features to better suit tiled images (e.g. tiled background)
					//	| pf_animations			// enables the animations system.  See 'Sprite' for usage
					//	| pf_zorder_aces		// move to top, bottom, layer...
	};
};

////////////////////////////////////////
// Parameter types:
// AddNumberParam(label, description [, initial_string = "0"])			// a number
// AddStringParam(label, description [, initial_string = "\"\""])		// a string
// AddAnyTypeParam(label, description [, initial_string = "0"])			// accepts either a number or string
// AddCmpParam(label, description)										// combo with equal, not equal, less, etc.
// AddComboParamOption(text)											// (repeat before "AddComboParam" to add combo items)
// AddComboParam(label, description [, initial_selection = 0])			// a dropdown list parameter
// AddObjectParam(label, description)									// a button to click and pick an object type
// AddLayerParam(label, description)									// accepts either a layer number or name (string)
// AddLayoutParam(label, description)									// a dropdown list with all project layouts
// AddKeybParam(label, description)										// a button to click and press a key (returns a VK)
// AddAnimationParam(label, description)								// a string intended to specify an animation name
// AddAudioFileParam(label, description)								// a dropdown list with all imported project audio files

////////////////////////////////////////
// Conditions

// AddCondition(id,					// any positive integer to uniquely identify this condition
//				flags,				// (see docs) cf_none, cf_trigger, cf_fake_trigger, cf_static, cf_not_invertible,
//									// cf_deprecated, cf_incompatible_with_triggers, cf_looping
//				list_name,			// appears in event wizard list
//				category,			// category in event wizard list
//				display_str,		// as appears in event sheet - use {0}, {1} for parameters and also <b></b>, <i></i>
//				description,		// appears in event wizard dialog when selected
//				script_name);		// corresponding runtime function name
				
// example				
AddStringParam("Label", "Enter label for this counter", ""); 
AddCondition(1, cf_none, "Is counter finished?", "Time counter", "Is {0} finished?", "If the counter has reached its designated value, if applicable.", "IsCounterFinished");
AddStringParam("Label", "Enter label for this counter", ""); 
AddCondition(2, cf_none, "Is counter paused?", "Time counter", "Is {0} paused?", "If the counter is currently paused.", "IsCounterPaused");
AddStringParam("Label", "Enter label for this counter", ""); 
AddCondition(4, cf_none, "Is counter running?", "Time counter", "Is {0} running?", "If the counter is currently running.", "IsCounterRunning");
AddStringParam("Label", "Enter label for this counter", ""); 
AddCondition(5, cf_none, "Is counter stopped?", "Time counter", "Is {0} stopped?", "If the counter is currently stopped.", "IsCounterStopped");

AddStringParam("Label", "Enter label for this counter", "");
AddComboParamOption("<");
AddComboParamOption(">");
AddComboParamOption("!=");
AddComboParamOption("==");
AddComboParamOption("<=");
AddComboParamOption(">=");
AddComboParam("Check state", "Choose the type of check you want to make. '<' means smaller than, '>', '!=' means not equal to and '==' means equal to." , 0);
AddNumberParam("Hours", "Enter control value for hours", "0");
AddNumberParam("Minutes", "Enter control value for minutes", "0");
AddNumberParam("Seconds", "Enter control value for seconds", "0");
AddNumberParam("Milliseconds", "Enter control value for milliseconds", "0");
AddCondition(6, cf_none, "Check counter value", "Time counter", "Is {0} {1} {2}:{3}:{4}:{5}?", "Checks the counter value with the options given.", "CheckCounterValue");
////////////////////////////////////////
// Actions

// AddAction(id,				// any positive integer to uniquely identify this action
//			 flags,				// (see docs) af_none, af_deprecated
//			 list_name,			// appears in event wizard list
//			 category,			// category in event wizard list
//			 display_str,		// as appears in event sheet - use {0}, {1} for parameters and also <b></b>, <i></i>
//			 description,		// appears in event wizard dialog when selected
//			 script_name);		// corresponding runtime function name

// example
AddNumberParam("Countdown time", "Enter time to countdown from (in milliseconds)", "0");
AddStringParam("Label", "Enter label for this counter", ""); 
AddComboParamOption("Started");
AddComboParamOption("Stopped");
AddComboParam("State", "Set state if you want the counter to run from start, or if you want to start it manually later." , 0);
AddAction(0, af_none, "Time countdown", "Time counter", "{1} is counting down from {0} ms and set to {2}", "Time countdown function that starts at a given value and stops at 0 (zero)", "TimeCountDown");
AddStringParam("Label", "Enter label for this counter", ""); 
AddComboParamOption("Started");
AddComboParamOption("Stopped");
AddComboParam("State", "Set state if you want the counter to run from start, or if you want to start it manually later." , 0);
AddAction(1, af_none, "Time counter", "Time counter", "{0} is counting up and set to {1}", "Time count function that keeps counting", "TimeCountUp");
AddNumberParam("Max count time", "Enter time to count to (in milliseconds)", "0");
AddStringParam("Label", "Enter label for this counter", ""); 
AddComboParamOption("Started");
AddComboParamOption("Stopped");
AddComboParam("State", "Set state if you want the counter to run from start, or if you want to start it manually later." , 0);
AddAction(2, af_none, "Limited time counter", "Time counter", "{1} is counting up to {0} ms and set to {2}", "Time count function that counts up to a given value", "TimeCountUpWithLimit");
AddStringParam("Label", "Enter label for this counter", "");
AddComboParamOption("Pause");
AddComboParamOption("Resume");
AddComboParam("State", "Set state if you want to pause the counter, or if you want to resume a already paused counter." , 0);
AddAction(4, af_deprecated, "Pause counter", "Time counter options", "{my} has set {0} to {1}", "Function that pauses or resumes a counter.", "PauseTimeCount");
AddStringParam("Label", "Enter label for this counter", ""); 
AddAction(5, af_deprecated, "Restart counter", "Time counter options", "{my} has resetted {0} to its original value", "Restarts a counter to its orginal given value.", "ResetTimeCount");
AddAction(6, af_none, "Destroy Time Manager instances", "Time counter options", "{my} has destroyed all Time Manager instances", "Removes all Time Manager instances from the system", "DestroyTimeManagerInstances");
AddStringParam("Label", "Enter label for this counter", ""); 
AddAction(7, af_none, "Stop time counter", "Time counter activity", "{my} has stopped {0}", "Time count function that starts a counter. The counter will start from given default value.", "StopTimeCount");
AddStringParam("Label", "Enter label for this counter", ""); 
AddAction(8, af_none, "Start time counter", "Time counter activity", "{my} has started {0}", "Time count function that stops a counter. The counter will be reverted to the given default value.", "StartTimeCount");
AddStringParam("Label", "Enter label for this counter", "");
AddComboParamOption("Pause");
AddComboParamOption("Resume");
AddComboParam("State", "Set state if you want to pause the counter, or if you want to resume a already paused counter." , 0);
AddAction(9, af_none, "Pause counter", "Time counter activity", "{my} has set {0} to {1}", "Function that pauses or resumes a counter.", "PauseTimeCount");
AddStringParam("Label", "Enter label for this counter", ""); 
AddAction(10, af_none, "Reset counter", "Time counter activity", "{my} has resetted {0} to its original value", "Resets a counter to its orginal given value.", "ResetTimeCount");
AddStringParam("Label", "Enter label for this counter", ""); 
AddNumberParam("Base value", "Enter new base value", "60");
AddAction(11, af_none, "Change minute base value", "Time counter options", "{0} has changed minute base value to {1}", "Sets the base value that the counter uses to calculate the minute and hour value.", "SetMinuteBaseValue");
AddStringParam("Label", "Enter label for this counter", ""); 
AddNumberParam("Base value", "Enter new base value", "60");
AddAction(12, af_none, "Change second base value", "Time counter options", "{0} has changed second base value to {1}", "Sets the base value that the counter uses to calculate the second and minute value.", "SetSecondBaseValue");
AddStringParam("Label", "Enter label for this counter", ""); 
AddNumberParam("Base value", "Enter new base value", "1000");
AddAction(13, af_none, "Change millisecond base value", "Time counter options", "{0} has changed millisecond base value to {1}", "Sets the base value that the counter uses to calculate the millisecond and seconds value.", "SetMillisecondBaseValue");
AddStringParam("Label", "Enter label for this counter", ""); 
AddAction(14, af_none, "Destroy single Time Manager instance", "Time counter options", "{0} has been removed", "Removes a single counter from the system.", "RemoveSingleCounter");

AddStringParam("Label", "Enter label for this counter", ""); 
AddComboParamOption("Started");
AddComboParamOption("Stopped");
AddComboParam("State", "Set state if you want the counter to run from start, or if you want to start it manually later." , 0);
AddNumberParam("Start value", "Enter start value (in milliseconds).", "1000");
AddAction(15, af_none, "Time counter with start value", "Time counter", "{0} is counting up from {2} and set to {1}", "Time count function that starts at a given value and then keeps counting", "TimeCountUpWithStartValue");

////////////////////////////////////////
// Expressions

// AddExpression(id,			// any positive integer to uniquely identify this expression
//				 flags,			// (see docs) ef_none, ef_deprecated, ef_return_number, ef_return_string,
//								// ef_return_any, ef_variadic_parameters (one return flag must be specified)
//				 list_name,		// currently ignored, but set as if appeared in event wizard
//				 category,		// category in expressions panel
//				 exp_name,		// the expression name after the dot, e.g. "foo" for "myobject.foo" - also the runtime function name
//				 description);	// description in expressions panel

// example
AddStringParam("Label", "Enter label for this counter", ""); 
AddExpression(1, ef_deprecated|ef_return_string, "Get current time", "Time counter", "GetStringHMSMTimeValue", "Get the Hour/Minute/Second/Millisecond time value as a string for a time counter");
AddStringParam("Label", "Enter label for this counter", ""); 
AddExpression(8, ef_deprecated|ef_return_string, "Get current time", "Time counter", "GetStringHMSTimeValue", "Get the Hour/Minute/Second time value as a string for a time counter");
AddStringParam("Label", "Enter label for this counter", ""); 
AddExpression(2, ef_deprecated|ef_return_string, "Get current time", "Time counter", "GetStringMSMTimeValue", "Get the Minute/Second/Millisecond time value as a string for a time counter");
AddStringParam("Label", "Enter label for this counter", ""); 
AddExpression(7, ef_deprecated|ef_return_string, "Get current time", "Time counter", "GetStringMSTimeValue", "Get the Minute/Second time value as a string for a time counter");
AddStringParam("Label", "Enter label for this counter", ""); 
AddExpression(3, ef_deprecated|ef_return_string, "Get current time", "Time counter", "GetStringSMTimeValue", "Get the Second/Millisecond time value as a string for a time counter");
AddStringParam("Label", "Enter label for this counter", ""); 
AddExpression(4, ef_deprecated|ef_return_string, "Get current time", "Time counter", "GetStringSTimeValue", "Get the Seconds time value as a string for a time counter");
AddStringParam("Label", "Enter label for this counter", ""); 
AddExpression(5, ef_deprecated|ef_return_string, "Get current time", "Time counter", "GetStringMTimeValue", "Get the Milliseconds time value as a string for a time counter");

AddStringParam("Label", "Enter label for this counter", ""); 
AddExpression(6, ef_return_number, "Get current time", "Time counter", "GetTimeValue", "Get the time in milliseconds as a Number");
AddStringParam("Label", "Enter label for this counter", ""); 
AddExpression(9, ef_return_string, "Get current time", "Time counter", "HHMMSSMM", "Get Hour/Minute/Second/Millisecond time value as a string. Adds a '0' in front for values under the value 10.");
AddStringParam("Label", "Enter label for this counter", ""); 
AddExpression(10, ef_return_string, "Get current time", "Time counter", "HHMMSS", "Get Hour/Minute/Second time value as a string. Adds a '0' in front for values under the value 10.");
AddStringParam("Label", "Enter label for this counter", ""); 
AddExpression(11, ef_return_string, "Get current time", "Time counter", "MMSSMM", "Get Minute/Second/Millisecond time value as a string. Adds a '0' in front for values under the value 10.");
AddStringParam("Label", "Enter label for this counter", ""); 
AddExpression(12, ef_return_string, "Get current time", "Time counter", "MMSS", "Get Minute/Second time value as a string. Adds a '0' in front for values under the value 10.");
AddStringParam("Label", "Enter label for this counter", ""); 
AddExpression(13, ef_return_string, "Get current time", "Time counter", "SSMM", "Get Second/Millisecond time value as a string. Adds a '0' in front for values under the value 10.");
AddStringParam("Label", "Enter label for this counter", ""); 
AddExpression(14, ef_return_string, "Get current time", "Time counter", "Seconds", "Get Second time value as a string. Adds a '0' in front for Second under the value 10.");
AddStringParam("Label", "Enter label for this counter", ""); 
AddExpression(19, ef_return_string, "Get current time", "Time counter", "SingleSeconds", "Get Second time value as a string. It DOES NOT add a '0' in front for seconds under the value 10.");
AddStringParam("Label", "Enter label for this counter", ""); 
AddExpression(15, ef_return_string, "Get current time", "Time counter", "Milliseconds", "Get Millisecond time value as a string. Adds extra '0' in front for value under the value 100/10.");
AddStringParam("Label", "Enter label for this counter", ""); 
AddExpression(16, ef_return_string, "Get current time", "Time counter", "HMMSSMM", "Get Hour/Minute/Second/Millisecond time value as a string. It DOES NOT add a '0' in front for Hour under the value 10.");
AddStringParam("Label", "Enter label for this counter", ""); 
AddExpression(17, ef_return_string, "Get current time", "Time counter", "HMSSMM", "Get Hour/Minute/Second/Millisecond time value as a string. It DOES NOT add a '0' in front for Hour/Minute under the value 10.");
AddStringParam("Label", "Enter label for this counter", ""); 
AddExpression(18, ef_return_string, "Get current time", "Time counter", "HMSMM", "Get Hour/Minute/Second/Millisecond time value as a string. It DOES NOT add a '0' in front for Hour/Minute/Second under the value 10.");
AddNumberParam("TimeValue", "Enter time value you wish to convert", "1000");
AddExpression(20, ef_return_string, "Get current time", "Time counter Convert", "ConvertNumberToHHMMSSMM", "Get Hour/Minute/Second/Millisecond time value as a string. It adds a '0' in front for Hour/Minute/Second/Milliseconds under the value 10.");
AddNumberParam("TimeValue", "Enter time value you wish to convert", "1000");
AddExpression(21, ef_return_string, "Get current time", "Time counter Convert", "ConvertNumberToHMMSSMM", "Get Hour/Minute/Second/Millisecond time value as a string. It adds a '0' in front for Minute/Second/Milliseconds under the value 10.");
AddNumberParam("TimeValue", "Enter time value you wish to convert", "1000");
AddExpression(22, ef_return_string, "Get current time", "Time counter Convert", "ConvertNumberToHMSSMM", "Get Hour/Minute/Second/Millisecond time value as a string. It adds a '0' in front for Second/Milliseconds under the value 10.");
AddNumberParam("TimeValue", "Enter time value you wish to convert", "1000");
AddExpression(23, ef_return_string, "Get current time", "Time counter Convert", "ConvertNumberToHMSMM", "Get Hour/Minute/Second/Millisecond time value as a string. It DOES NOT add a '0' in front for Milliseconds under the value 10.");
AddNumberParam("TimeValue", "Enter time value you wish to convert", "1000");
AddExpression(24, ef_return_string, "Get current time", "Time counter Convert", "ConvertNumberToHHMMSS", "Get Hour/Minute/Second time value as a string. It adds a '0' in front for Hour/Minute/Second under the value 10.");
AddNumberParam("TimeValue", "Enter time value you wish to convert", "1000");
AddExpression(25, ef_return_string, "Get current time", "Time counter Convert", "ConvertNumberToHMMSS", "Get Hour/Minute/Second time value as a string. It adds a '0' in front for Minute/Second under the value 10.");
AddNumberParam("TimeValue", "Enter time value you wish to convert", "1000");
AddExpression(26, ef_return_string, "Get current time", "Time counter Convert", "ConvertNumberToHMSS", "Get Hour/Minute/Second time value as a string. It DOES NOT add a '0' in front for Second under the value 10.");
AddNumberParam("TimeValue", "Enter time value you wish to convert", "1000");
AddExpression(27, ef_return_string, "Get current time", "Time counter Convert", "ConvertNumberToHMS", "Get Hour/Minute/Second time value as a string. It DOES NOT add a '0' in front for Hour/Minute/Second under the value 10.");
AddNumberParam("TimeValue", "Enter time value you wish to convert", "1000");
AddExpression(28, ef_return_string, "Get current time", "Time counter Convert", "ConvertNumberToMMSSMM", "Get Minute/Second/Millisecond time value as a string. It adds a '0' in front for Minute/Second/Milliseconds under the value 10.");











////////////////////////////////////////
ACESDone();

////////////////////////////////////////
// Array of property grid properties for this plugin
// new cr.Property(ept_integer,		name,	initial_value,	description)		// an integer value
// new cr.Property(ept_float,		name,	initial_value,	description)		// a float value
// new cr.Property(ept_text,		name,	initial_value,	description)		// a string
// new cr.Property(ept_color,		name,	initial_value,	description)		// a color dropdown
// new cr.Property(ept_font,		name,	"Arial,-16", 	description)		// a font with the given face name and size
// new cr.Property(ept_combo,		name,	"Item 1",		description, "Item 1|Item 2|Item 3")	// a dropdown list (initial_value is string of initially selected item)
// new cr.Property(ept_link,		name,	link_text,		description, "firstonly")		// has no associated value; simply calls "OnPropertyChanged" on click

var property_list = [
	//new cr.Property(ept_integer, 	"My property",		77,		"An example property.")
	];
	
// Called by IDE when a new object type is to be created
function CreateIDEObjectType()
{
	return new IDEObjectType();
}

// Class representing an object type in the IDE
function IDEObjectType()
{
	assert2(this instanceof arguments.callee, "Constructor called as a function");
}

// Called by IDE when a new object instance of this type is to be created
IDEObjectType.prototype.CreateInstance = function(instance)
{
	return new IDEInstance(instance);
}

// Class representing an individual instance of an object in the IDE
function IDEInstance(instance, type)
{
	assert2(this instanceof arguments.callee, "Constructor called as a function");
	
	// Save the constructor parameters
	this.instance = instance;
	this.type = type;
	
	// Set the default property values from the property table
	this.properties = {};
	
	for (var i = 0; i < property_list.length; i++)
		this.properties[property_list[i].name] = property_list[i].initial_value;
		
	// Plugin-specific variables
	// this.myValue = 0...
}

// Called when inserted via Insert Object Dialog for the first time
IDEInstance.prototype.OnInserted = function()
{
}

// Called when double clicked in layout
IDEInstance.prototype.OnDoubleClicked = function()
{
}

// Called after a property has been changed in the properties bar
IDEInstance.prototype.OnPropertyChanged = function(property_name)
{
}

// For rendered objects to load fonts or textures
IDEInstance.prototype.OnRendererInit = function(renderer)
{
}

// Called to draw self in the editor if a layout object
IDEInstance.prototype.Draw = function(renderer)
{
}

// For rendered objects to release fonts or textures
IDEInstance.prototype.OnRendererReleased = function(renderer)
{
}