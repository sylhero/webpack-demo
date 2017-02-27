function writeHelloWorld() {
    document.write("Hello World!");
    document.write("<br />");
}

function writeBrowser(browser) {
    document.write(browser);
    document.write("<br />");
}
module.exports = {
    writeBrowser: writeBrowser,
    writeHelloWorld: writeHelloWorld
};
