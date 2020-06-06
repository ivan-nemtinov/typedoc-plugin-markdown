export function replace(find, replace, options) {
    var string = options.fn(this);
    return string.replace( find, replace );
}
