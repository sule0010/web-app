function GetPluginSettings()
{
	return {
		"name":			"ajaxPost",
		"id":			"ajaxPost",
		"version":		"1.0",
		"description":	"Request and receive other web pages.  Note: based on the Scrirra Plugin AJAX.",
		"author":		"Joe7",
		"help url":		"http://www.scirra.com/manual/107/ajax",
		"category":		"Web",
		"type":			"object",			// not in layout
		"rotatable":	false,
		"flags":		pf_singleglobal
	};
};

//////////////////////////////////////////////////////////////
// Conditions
AddStringParam("Tag", "A tag, which can be anything you like, to distinguish between different AJAX requests.", "\"\"");
AddCondition(0,	cf_trigger, "On completed", "AJAX", "On <b>{0}</b> completed", "Triggered when an AJAX request completes successfully.", "OnComplete");

AddStringParam("Tag", "A tag, which can be anything you like, to distinguish between different AJAX requests.", "\"\"");
AddCondition(1,	cf_trigger, "On error", "AJAX", "On <b>{0}</b> error", "Triggered when an AJAX request fails.", "OnError");

//////////////////////////////////////////////////////////////
// Actions
AddStringParam("Tag", "A tag, which can be anything you like, to distinguish between different AJAX requests.", "\"\"");
AddStringParam("URL", "The URL to request.  Note: most browsers prevent cross-domain requests.", "\"http://\"");
AddAction(0, 0, "Request", "AJAX", "Request {1} (tag <i>{0}</i>)", "Request a URL and retrieve its contents.", "Request");

AddStringParam("Data:", "The data.");			// Joe7
AddAction(1, 0, "The data to send.", "postData", "POST:{0}", "Send POST-data.", "sendData");

//////////////////////////////////////////////////////////////
// Expressions
AddExpression(0, ef_return_string, "Get last data", "ajaxPost", "lastData", "Get the data returned by the last successful request.");

ACESDone();

// Property grid properties for this plugin
var property_list = [
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
	return new IDEInstance(instance, this);
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
}

// Called by the IDE after all initialization on this instance has been completed
IDEInstance.prototype.OnCreate = function()
{
}

// Called by the IDE after a property has been changed
IDEInstance.prototype.OnPropertyChanged = function(property_name)
{
}
	
// Called by the IDE to draw this instance in the editor
IDEInstance.prototype.Draw = function(renderer)
{
}

// Called by the IDE when the renderer has been released (ie. editor closed)
// All handles to renderer-created resources (fonts, textures etc) must be dropped.
// Don't worry about releasing them - the renderer will free them - just null out references.
IDEInstance.prototype.OnRendererReleased = function()
{
}
