// this code accesses the Node.js process.versions object and runs a basic replaceText helper function to insert the version numbers into the HTML document. To script to renderer process, pass in the path to preload script to the webPreferences.preload option in existing BrowserWindow constructor.

window.addEventListener("DOMContentLoaded", () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector);
    if (element) element.innerText = text;
  };
  for (const dependency of ["chrome", "node", "electron"]) {
    replaceText(`${dependency}-version`, process.versions[dependency]);
  }
});
