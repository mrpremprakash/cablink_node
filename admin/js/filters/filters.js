myDemoApp.filter('ucfirst', function() {
    return function(input) {
        return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
});
myDemoApp.filter('str_pad', function() {
    return function(input, n) {
        if(input === undefined)
            input = "";
        var zeros = "--".repeat(n);
        return (zeros + input)
    };
});