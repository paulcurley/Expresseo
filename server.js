var page = require('webpage').create();
var system = require('system');


page.open(system.args[1], function (status) {
    //Page is loaded!
});

page.onLoadFinished = function(status) {
    var p = page.evaluate(function () {
        
        var scripts = document.getElementsByTagName('script');
        var i = scripts.length;
        while (i--) {
            scripts[i].parentNode.removeChild(scripts[i]);
        }
        return  html = document.getElementsByTagName('html')[0].innerHTML;
                
    });
    console.log(p);
    phantom.exit();
};
