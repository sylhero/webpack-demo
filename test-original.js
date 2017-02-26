function testBrowser() {
	if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) !== -1) {
		console.log('Opera');
	} else if (navigator.userAgent.indexOf("Chrome") !== -1) {
		console.log('Chrome');
	} else if (navigator.userAgent.indexOf("Safari") !== -1) {
		console.log('Safari');
	} else if (navigator.userAgent.indexOf("Firefox") !== -1) {
		console.log('Firefox');
	} else if ((navigator.userAgent.indexOf("MSIE") !== -1) || (!!document.documentMode === true)){
		console.log('IE');
	} else {
		console.log('unknown');
	}
}
testBrowser();
