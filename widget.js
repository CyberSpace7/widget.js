var SWW = SWW || (function(){
    var _srv = "https://dotcal.com/embed/";
    var _cfg = {}; // private
    return {
        cfg : function(cfg) {
            _cfg = cfg;
        },
        init : function() {
            var wt = '<object type="text/html" height="' + _cfg["cht"] + '" width="100%" data="' + _srv + _cfg["st"] + '?u='  + _cfg["cid"] + '" ><p>Failed</p></object>';
            var el = document.getElementById(_cfg["el"]);
            var pos = _cfg["pos"];
            el.insertAdjacentHTML(pos, wt);
        }
    };
}());
