const common = require('./test-common');
function testBrowser() {
	if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) !== -1) {
		common.writeBrowser('Your Browser is Opera');

	} else if (navigator.userAgent.indexOf("Chrome") !== -1) {
		common.writeBrowser('Your Browser is Chrome');

	} else if (navigator.userAgent.indexOf("Safari") !== -1) {
		common.writeBrowser('Your Browser is Safari');

	} else if (navigator.userAgent.indexOf("Firefox") !== -1) {
		common.writeBrowser('Your Browser is Firefox');

	} else if ((navigator.userAgent.indexOf("MSIE") !== -1) || (!!document.documentMode === true)) {
		common.writeBrowser('Your Browser is IE');

	} else {
		common.writeBrowser('Your Browser is unknown');
	}
}
common.writeHelloWorld();

testBrowser();
