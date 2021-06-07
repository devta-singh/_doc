var searchPage = {
    batchSize: 20,
    endIndex: 0,
    query: null,
    facetedkey: [],
    facetedvalue: [],
    sortby: 'relevancy',

    init: function () {
        queryly.QuerylyKey = '62d9c40063044c14';

        var sPageURL = window.location.search.substring(1);
        var sURLVariables = sPageURL.split('&');
        for (var i = 0; i < sURLVariables.length; i++) {
            var sParameterName = sURLVariables[i].split('=');
            if (sParameterName[0].toLowerCase() == 'query') {
                searchPage.query = sParameterName[1] + ' ';
                break;
            }
        }
       
        if (searchPage.query != '' && searchPage.query != null) {
            searchPage.renderSytle();
            searchPage.dofacetedsearch(0, '', '');
        }
    },

    renderSytle: function () {
        var style = document.createElement('style');
        var stylehtml = '#faceteddata {float: left; padding: 0px; padding-top:0px; font-size: 15px; margin-right: -10px;width: 220px;line-height:30px; overflow: hidden;} .queryly_item_row img {width: 200px!important;} .queryly_item_row {min-height: 100px;max-height: 180px!important;} .queryly_item_title {overflow: hidden;} .queryly_item_description {color: #5f5f5f; font-size: 14px;font-weight: 400;   overflow: hidden; line-height: 21px; } #resultdata {margin-left: 250px;margin-bottom: 60px;}';
        stylehtml = stylehtml + '.selectedFilterItem a {font-weight:800} .queryly_item_title {margin-top:6px;margin-bottom:6px;font-family: Arial,Helvetica,sans-serif;font-size:18px;line-height:22px;font-weight:600;}; @media (max-width: 780px) {.filterbar {display:none;} section {width:100%!important;padding:0px!important;} #resultdata{margin-left:0px!important;} .queryly_item_title {font-size:14px!important;font-weight:normal;}  } ';
        stylehtml = stylehtml + ' @media (max-width: 780px) {.queryly_item_description {display: none;} .queryly_item_title {font-size: 14px!important;font-weight: normal; } .queryly_item_row { min-height: 50px;} .queryly_item_row img { width: 140px; } #faceteddata { display: none;} #resultdata { margin-left: 0px; } .filterbar { display: none; }}';
        style.innerHTML = stylehtml;
        document.getElementById('queryly_advanced_container').parentNode.insertBefore(style, document.getElementById('queryly_advanced_container'));
    },

    //This render the faceted object into html. In the current rss feed, creator and pubdate are used in the facet.
    renderFaceted: function (faceted, filters) {
        var html = '<style>.queryly_item_title {font-size:14px;} .queryly_item_description {font-size:14px;} .queryly_advanced_item_imagecontainer {margin-right: 20px; padding-bottom: 0px;  height: 120px;width: 210px; overflow: hidden;  background-size: cover; background-position: 50% 50%; position: relative;}} </style><style> @media (max-width: 768px) {.queryly_advanced_item_imagecontainer {width: 160px; height: 100px; margin-right: 15px;} } </style><div style="margin-top:10px;" ><a style="color:black;cursor:pointer" onclick="searchPage.dofacetedsearch(0,\'\',\'\');return false;">Eliminar Filtros</a></div>';

        html = html + '<div id="pubDate_filter"><div style="margin-top:10px;margin-bottom:10px;background:#f68e01 ;color:white;padding:6px;font-weight" >Fecha</div>';
        //build the filters for publication date, data are grouped into buckets. for example, 168 means "published in the past 168 hours"
        var dates = faceted.pubDate;
        for (var i = 0; i < dates.length; i++) {
            var datename = '';
            if (dates[i].key == '24') {
                datename = "HOY";
            }
            else if (dates[i].key == '168') {
                datename = "ÚLTIMA SEMANA";
            }
            else if (dates[i].key == '720') {
                datename = "ÚLTIMO MES";
            }
            else if (dates[i].key == '8760') {
                datename = "ÚLTIMO AÑO";
            }

            if (datename != '') {
                html = html + '<div class="filter_item" data-filter-value="' + dates[i].key + '"><a style="cursor:pointer;color:black;" onclick="searchPage.dofacetedsearch(0,\'pubDate\',\'' + encodeURIComponent(dates[i].key) + '\')";return false;">' + datename + ' (' + dates[i].value + ')</a></div>';
            }
        }
        html = html + '</div>';

        html = html + '<div id="section_filter"><div style="margin-top:10px;margin-bottom:10px;background:#f68e01 ;color:white;padding:6px;font-weight" >Sección</div>';
        var sections = faceted.section;
        for (var i = 0; i < sections.length; i++) {
            var name = sections[i].key;
            if (name == "") { continue; }
            html = html + '<div class="filter_item" data-filter-value="' + sections[i].key + '"><a style="cursor:pointer;color:black;" onclick="searchPage.dofacetedsearch(0,\'section\',\'' + sections[i].key.replace(/'/g, "\\'") + '\')";return false;">' + sections[i].key + ' (' + sections[i].value + ')</a></div>';
        }
        html = html + '</div>';

        html = html + '<div id="creator_filter"><div style="margin-top:10px;margin-bottom:10px;background:#f68e01 ;color:white;padding:6px;font-weight" >Autor</div>';
        var creators = faceted.creator;
        for (var i = 0; i < creators.length; i++) {
            var name = creators[i].key;
            if (name == "") { continue; }
            html = html + '<div class="filter_item" data-filter-value="' + creators[i].key + '"><a style="cursor:pointer;color:black;" onclick="searchPage.dofacetedsearch(0,\'creator\',\'' + creators[i].key.replace(/'/g, "\\'") + '\')";return false;">' + creators[i].key.replace("Submitted by ", "").replace("By ", "") + ' (' + creators[i].value + ')</a></div>';
        }
        html = html + '</div>';

        document.getElementById('faceteddata').innerHTML = (html);

        try {
            if (typeof filters != 'undefined') {
                if (filters.length == 0) {
                    var filter_items = document.querySelectorAll('.filter_item');
                    for (var j = 0; j < filter_items.length; j++) {
                        filter_items[j].classList.remove("selectedFilterItem");
                    }
                }
                else {
                    for (var i = 0; i < filters.length; i++) {
                        var val = filters[i].value;
                        var filter_items = document.querySelector('#' + filters[i].key + '_filter').querySelectorAll('.filter_item');
                        for (var j = 0; j < filter_items.length; j++) {
                            if (filter_items[j].getAttribute("data-filter-value").toLowerCase() == val) {
                                filter_items[j].classList.add("selectedFilterItem");
                            }
                            else {
                                filter_items[j].classList.remove("selectedFilterItem");
                            }
                        }

                    }
                }

            }
        }
        catch (e) {}
    },

    SwitchSort: function () {
        searchPage.sortby = document.querySelector('#sortby').value;

        document.getElementById('resultdata').innerHTML = '';

        //assemble the rest api.
        var url = "//api.queryly.com/json.aspx?queryly_key=" + queryly.QuerylyKey + "&query=" + searchPage.query + "&endindex=0&batchsize=" + searchPage.batchSize + "&callback=searchPage.resultcallback&showfaceted=true&extendeddatafields=creator,imageresizer&timezoneoffset=" + (new Date(0)).getTimezoneOffset();

        if (searchPage.sortby != 'relevancy') {
            url = url + "&sort=date";
        }

        var keys = '';
        var values = '';
        for (var i = 0; i < searchPage.facetedkey.length; i++) {
            keys = keys + searchPage.facetedkey[i] + "|";
            values = values + searchPage.facetedvalue[i] + "|";
            url = url + "&facetedkey=" + encodeURIComponent(keys) + "&facetedvalue=" + encodeURIComponent(values);
        }

        searchPage.loadScript(url, function (data, textStatus, jqxhr) {
            window.scrollTo(0, 0);
        });
    },

    advanced_searchbox_keydown: function (e) {
        var keyCode = e.keyCode || e.which;
        if (keyCode == 13) {
            searchPage.redirectsearch();
        }
    },

    resultcallback: function (results) {
        //retrieve metadata
        var total = results.metadata.total;
        searchPage.endIndex = results.metadata.endindex;

        //if there is faceted data in results object, render it.
        if (results.faceted != null && results.faceted != undefined) {
            this.renderFaceted(results.faceted, results.metadata.filters);
        }

        var html = "<div style = 'margin-bottom: 12px; border-bottom: 1px solid #ccc;padding-bottom:10px;margin-top:12px;' > <div style='font-size:20px;font-family:Arial,Helvetica,sans-serif;font-weight:bold;color:#111;padding-bottom:16px;'>Mostrando " + results.metadata.total + " resultados para <b>\"" + results.metadata.query.trim() + "\"</b></div></div> ";
        //loop through each result.
        html = html + "<div class='filterbar' style='float: right;font-weight:bold;margin-top: -62px;'>Ordenar por: <select id='sortby' onchange='searchPage.SwitchSort()'; style='padding: 5px!important;background:white; '><option " + (searchPage.sortby == "date" ? "" : "selected") + " value='relevancy'>RELEVANCIA</option><option " + (searchPage.sortby == "date" ? "selected" : "") + " value='date'>NUEVO</option></select></div>";

        if (results.items.length == 0) {
            html = html + "<div style='margin: 50px;text-align: center;font-size: 30px;color: #444;'>No se han encontrado resultados. Por favor, busque una palabra clave diferente.</div>";
            document.getElementById('resultdata').innerHTML = html;
            return;
        }

        for (var i = 0; i < results.items.length; i++) {
            var item = results.items[i];
            html = html + searchPage.renderitem(item);
        }

        //var pagerhtml = '';
        if (total > searchPage.endIndex) {
            html = html + '<a style="float:right;font-family: Arial,Helvetica,sans-serif;font-size: 17px;color: #f68e01;font-weight: 600;" class="next_btn" onclick="searchPage.turnpage(' + searchPage.endIndex + ');return false;" href="#">Siguiente</a>';
        }
        if (searchPage.endIndex > searchPage.batchSize) {
            var prev = Math.max(0, searchPage.endIndex - 2 * searchPage.batchSize);
            html = html + '<a style="float:left;font-family: Arial;font-size: 17px;color: #f68e01;font-weight: 600;" class="prev_btn" onclick="searchPage.turnpage(' + prev + ');return false;" href="#" >Anterior</a>';
        }
        document.getElementById('resultdata').innerHTML = html;
        window.scrollTo(0, 0);
    },

    renderitem: function (item) {

        var trackcall = 'onmousedown = "queryly.util.trackClick(\'' + item.link + '\',\'' + searchPage.query + '\');"';
        if (item.isad == 1) {
            trackcall = 'onmousedown = "queryly.util.trackAdClick(' + item._id + ')"';
        }

        item.image = item.image.replace("http://", "https://");
        var html = '<div class="queryly_item_row" style="max-height:180px;position:relative;overflow:hidden;margin-bottom:10px;font-size:10px;border-bottom:1px solid #ccc;padding-bottom:12px;width:100%;"><a ' + trackcall + ' href="' + item.link + '" style="text-decoration:none;color:#333">';
        if (item.image == '') {
            item.image = 'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/TQQSHE5PMVH3ZIUUNUAMYFJIP4.jpeg';
        }
        else if (typeof item.imageresizer != 'undefined' && item.imageresizer != '') {
            try {
                var imageresizerurl = item.imageresizer.split('|')[0];
                if (imageresizerurl.startsWith("/resizer/")){                   
                    item.image = "https://www.infobae.com/new-resizer" + imageresizerurl.substring(8);
                }
                else {
                    var url = new URL(imageresizerurl);
                    item.image = "https://www.infobae.com/new-resizer" + url.pathname;
                }
               
            }
            catch (e) {}
            
        }

        //html = html + '<img style="padding:6px;padding-right:12px;float:left;max-width:200px;" onerror="this.parentNode.removeChild(this);" src="' + item.image + '" />';
        html = html + '<div class="queryly_advanced_item_imagecontainer" style="float:left;background-image: url(\'' + item.image + '\'),url(\'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/TQQSHE5PMVH3ZIUUNUAMYFJIP4.jpeg\');background-size:cover;background-color:#aaa;"></div>';
        html = html + '<div style="margin-top:0px;"><div class="queryly_item_title" style="font-size:14px!important;font-weight:bold;">' + item.title.replace(/(([^\s]+\s\s*){15})(.*)/, "$1...") + '</div ></div >';

        var datebyline = '';
        if (typeof item.pubdate != "undefined") {
            datebyline = (new Date(item.pubdate)).toLocaleDateString('es-ES', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' });
        }

        if (typeof item.creator != 'undefined' && item.creator != '') {
            datebyline = datebyline + " / By " + item.creator.replace("Submitted by ", "").replace("By ", "");
        }

        html = html + '<div  class="queryly_item_description"><div style="margin-bottom:12px;color:#555;font-size:12px;">' + datebyline + "</div>" + item.description.replace("\"", "").replace("'", "").replace(/(([^\s]+\s\s*){20})(.*)/, "$1...") + '</div>';
        html = html + '</a></div>';

        return html;
    },

    turnpage: function (index) {
        // queryly.jquery('#resultdata').html('');
        document.getElementById('resultdata').innerHTML = '';

        var keys = '';
        var values = '';
        for (var i = 0; i < searchPage.facetedkey.length; i++) {
            keys = keys + searchPage.facetedkey[i] + "|";
            values = values + searchPage.facetedvalue[i] + "|";
        }
        var url = "//api.queryly.com/json.aspx?queryly_key=" + queryly.QuerylyKey + "&query=" + searchPage.query + "&endindex=" + index + "&batchsize=" + searchPage.batchSize + "&callback=searchPage.resultcallback&showfaceted=true&extendeddatafields=creator,imageresizer&timezoneoffset=" + (new Date(0)).getTimezoneOffset();

        if (searchPage.facetedkey.length > 0) {
            url = url + "&facetedkey=" + encodeURIComponent(keys) + "&facetedvalue=" + encodeURIComponent(values);
        }

        //making the search call to Queryly server
        searchPage.loadScript(url, function (data, textStatus, jqxhr) {
            window.scrollTo(0, 0);
        });


    },

    //similar with dosearch method, but with faceted turned on. It passes in the current facet selection if any.
    dofacetedsearch: function (index, key, value) {
        document.getElementById('resultdata').innerHTML = '';

        //assemble the rest api.
        var url = "//api.queryly.com/json.aspx?queryly_key=" + queryly.QuerylyKey + "&query=" + searchPage.query + "&endindex=" + index + "&batchsize=" + searchPage.batchSize + "&callback=searchPage.resultcallback&showfaceted=true&extendeddatafields=creator,imageresizer&timezoneoffset=" + (new Date(0)).getTimezoneOffset();

        if (key != '') {
            if (searchPage.facetedkey.indexOf(key) >= 0) {
                var i = searchPage.facetedkey.indexOf(key);
                searchPage.facetedvalue[i] = value;
            }
            else {
                searchPage.facetedkey.push(key);
                searchPage.facetedvalue.push(value);
            }

            var keys = '';
            var values = '';
            for (var i = 0; i < searchPage.facetedkey.length; i++) {
                keys = keys + searchPage.facetedkey[i] + "|";
                values = values + searchPage.facetedvalue[i] + "|";
            }

            url = url + "&facetedkey=" + encodeURIComponent(keys) + "&facetedvalue=" + encodeURIComponent(values);
        }
        else {
            searchPage.facetedkey = [];
            searchPage.facetedvalue = [];
        }

        //making the search call to Queryly server
        searchPage.loadScript(url, function (data, textStatus, jqxhr) {
            window.scrollTo(0, 0);
        });
    },

    loadScript: function (src, callback) {
        var script = document.createElement('script');
        var loaded = false;
        script.setAttribute('src', src);
        if (callback) {
            script.onreadystatechange = script.onload = function () {
                if (!loaded) {
                    callback();
                }
                loaded = true;
            };
        }
        document.head.appendChild(script);
    }
}
searchPage.init();
