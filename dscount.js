function dscount(string, a,b) {
	var regexp = new RegExp(`${a}(?=${b})`, 'igm');
	var result = string.match(regexp);
	if(result == null) {
		return 0
	}
	return result.length;
}
