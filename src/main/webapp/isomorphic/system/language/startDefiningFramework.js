(function(){    isc.definingFramework=true;    function isc_startDefiningFramework(_12){        isc["module_"+_12]=1;        isc.$158i=isc["_"+_12+"$d"]=(isc.timestamp?isc.timestamp():new Date().getTime());        isc.$1342=_12}
    function isc_processCurrentScriptSrc(_6){        if(_6==null)return;        _6=String(_6);        var _1="#module=",            _2=_6.indexOf(_1);        if(_2>=0)isc_startDefiningFramework(_6.substring(_2+_1.length))}
    if(document.currentScript!=null){        isc_processCurrentScriptSrc(document.currentScript.src)}else{        var _3=new Error().stack;        if(_3!=null){            var _4=_3.indexOf(" at ")>=0?" at ":"@";            var _5=_3.lastIndexOf(_4);            if(_5>=0){                var _6=_3.substring(_5+_4.length);                var _7=new RegExp(":\\d+\\s*$");                var _8=_7.exec(_6);                if(_8){                    _6=_6.substring(0,_8.index);                    _8=_7.exec(_6);                    if(_8){                        _6=_6.substring(0,_8.index)}
                }
                isc_processCurrentScriptSrc(_6)}
        }else if(document.documentMode>=8){            var _9=window.onerror;            window.onerror=function(_12,_13,_14){                alert(_13);                isc_processCurrentScriptSrc(_13);                window.onerror=_9;                return true};            window.noSuchMethod()}else{            var _10=document.getElementsByTagName("script");            var _11=_10[_10.length-1];            isc_processCurrentScriptSrc(_11.src)}
    }})();
