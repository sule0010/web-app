// ECMAScript 5 strict mode
"use strict";

assert2(cr, "cr namespace not created");
assert2(cr.plugins_, "cr.plugins_ not created");

/////////////////////////////////////
// Plugin class
cr.plugins_.ajaxPost = function(runtime)
{
	this.runtime = runtime;
};

(function ()
{
	var pluginProto = cr.plugins_.ajaxPost.prototype;
		
	/////////////////////////////////////
	// Object type class
	pluginProto.Type = function(plugin)
	{
		this.plugin = plugin;
		this.runtime = plugin.runtime;
	};

	var typeProto = pluginProto.Type.prototype;

	typeProto.onCreate = function()
	{
	};

	/////////////////////////////////////
	// Instance class
	pluginProto.Instance = function(type)
	{
		this.type = type;
		this.runtime = type.runtime;
		
		this.lastData = "";
		this.curTag = "";
		this.dataToSend= ""; // Joe7
	};
	
	var instanceProto = pluginProto.Instance.prototype;

	instanceProto.onCreate = function()
	{
	};

	//////////////////////////////////////
	// Conditions
	pluginProto.cnds = {};
	var cnds = pluginProto.cnds;

	cnds.OnComplete = function (tag)
	{
		return tag.toLowerCase() === this.curTag.toLowerCase();
	};
	
	cnds.OnError = function (tag)
	{
		return tag.toLowerCase() === this.curTag.toLowerCase();
	};

	//////////////////////////////////////
	// Actions
	pluginProto.acts = {};
	var acts = pluginProto.acts;

	acts.sendData = function (data) //Joe7
	{
		this.dataToSend= data;
	},
	
	acts.Request = function (tag_, url_)
	{
		// Create a context object with the tag name and a reference back to this
		var context_obj = { tag: tag_, inst: this };
		
		// Make the request
		jQuery.ajax({
			type: "POST", 			// Joe7
			data: this.dataToSend,	// Joe7
			context: context_obj,
			dataType: "text",
			url: url_,
			success: function(data) {
				this.inst.lastData = data;
				this.inst.curTag = this.tag;
				this.inst.runtime.trigger(cr.plugins_.ajaxPost.prototype.cnds.OnComplete, this.inst);
			},
			error: function() {
				this.inst.curTag = this.tag;
				this.inst.runtime.trigger(cr.plugins_.ajaxPost.prototype.cnds.OnError, this.inst);
			}
		});
	};

	//////////////////////////////////////
	// Expressions
	pluginProto.exps = {};
	var exps = pluginProto.exps;

	exps.lastData = function (ret)
	{
		ret.set_string(this.lastData);
	}	
}());