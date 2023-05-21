/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let stack = []
    const components = path.split("/")
    
    for (const component of components) {
        if (component === "" || component === ".") {
            continue
        }else if(component == "..") {
            stack.pop()
        }else {
            stack.push(component)
        }
    }
    
    const simplifiedPath = "/" + stack.join("/")
    
    return simplifiedPath
};