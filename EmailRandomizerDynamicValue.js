var EmailRandomizerDynamicValue = function() {
	
	this.names = [
		"contact",
		"hello",
		"hi",
		"webmaster",
		"postmaster",
	]
	
	this.domains = [
		"gmail.com",
		"yahoo.com",
		"luckymarmot.com",
	]
	
	this.evaluate = function() {
		var iName = Math.floor(Math.random()*this.names.length)
		var iDomain = Math.floor(Math.random()*this.domains.length)
		
		return "" + this.names[iName] + "@" + this.domains[iDomain];
	}
	
	this.title = function() {
		return "Email Randomizer";
	}
}

EmailRandomizerDynamicValue.identifier = "com.luckymarmot.PawExtensions.EmailRandomizerDynamicValue";
EmailRandomizerDynamicValue.title = "Email Randomizer Dynamic Value";
EmailRandomizerDynamicValue.inputs = [

]
registerDynamicValueClass(EmailRandomizerDynamicValue);
