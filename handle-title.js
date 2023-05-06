const check2StringEqual = function(postTitle, paramTitle) {
    postTitle = postTitle.toLowerCase()
    paramTitle = paramTitle.toLowerCase()
    
    const arr = paramTitle.split("-")
    const paramTitleWOHyphen = arr.join(" ");
    if (postTitle === paramTitleWOHyphen) 
        return true;
    else
        return false;
}

module.exports = check2StringEqual
