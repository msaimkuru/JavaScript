/*
 * NOTE:
 * Browser causes a CORS ERROR which returns the error message below:
 * "Access to fetch at 'https://postman-echo.com/get?foo1=bar1&foo2=bar2' from origin 'null' 
 *  has been blocked by CORS policy: No 'Access-Control-Allow-Origin' 
 *  header is present on the requested resource."
 *
 *  Not to get this error I had to open the browser by disabling web security by the command below:
 *  open -n -a /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --args --user-data-dir="/tmp/chrome_dev_test" --disable-web-security
 */
function get() {
fetch('https://postman-echo.com/get?foo1=bar1&foo2=bar2')
.then(response =>{
    return response.json();
}).then(data =>{
    console.log(data);
    document.getElementById("jsontxt").textContent = JSON.stringify(data, undefined, 2);
})
}

get();