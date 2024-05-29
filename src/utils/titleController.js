var routeTitle = "";
var siteTitle = "";

function setTitle(){
    if(!routeTitle || !siteTitle){
        document.title = "十年磨一剑";
    }else if(routeTitle || !siteTitle) {
        document.title = routeTitle;
    }else if(!routeTitle || siteTitle){
        document.title = siteTitle;
    }else{
        document.title = `${siteTitle} - ${routeTitle}`;
    }
}

export default {
    setRouteTitle(title){
        routeTitle = title;
        setTitle();
    },
    setSiteTitle(title){
        siteTitle = title;
        setTitle();
    }
}
