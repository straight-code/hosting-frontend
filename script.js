var defaultNav = document.getElementsByClassName("nav-default")[0];
var contents = document.getElementsByClassName("body-content")[0];
var isToggled = false;
var isMobile = [];

function getMobile(bool){
    if(isMobile.length > 1){
        isMobile.pop();
    }
    isMobile.unshift(bool);
}

function hasMobileUpdated(){
    // last element = most recent
    if(isMobile.length >= 2){
        if(isMobile[0] == isMobile[1]){
            return false;
        } else {
            return true;
        }
    } else {
        return false;
    }
}

function toggle(){
    if(isToggled){
        // hide

        defaultNav.style.transform = "translateX(-" + defaultNav.offsetWidth + "px)";
        contents.style.filter = "blur(0px)";
        document.body.style.overflow = "visible";
        isToggled = false;
    } else {
        // show

        defaultNav.style.transform = "translateX(0px)";
        defaultNav.style.display = "inline-block";
        contents.style.filter = "blur(3px)";
        document.body.style.overflow = "hidden";
        isToggled = true;
    }
}

function update(){
    if(window.innerWidth > 956){
        getMobile(false);
    } else {
        getMobile(true);
    }

    if(hasMobileUpdated() == true){
        if(isMobile[0] == true){ //mobile
            isToggled = false;
            defaultNav.style.display = "none";
        } else {
            defaultNav.style.display = "inline-block";
            defaultNav.style.transform = "translateX(0px)";
            contents.style.filter = "blur(0px)";
            document.body.style.overflow = "visible";
        }
    }
}