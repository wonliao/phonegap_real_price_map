// JavaScript Document
$(document).bind("mobileinit", function () {

	//$.mobile.page.prototype.options.backBtnText = "back";
    $.mobile.page.prototype.options.addBackBtn      = true;
    $.mobile.page.prototype.options.backBtnTheme    = "e";

    // Page
    $.mobile.page.prototype.options.headerTheme = "e";  // Page header only
    $.mobile.page.prototype.options.contentTheme = "e";
    $.mobile.page.prototype.options.footerTheme = "e";

    // Listviews
    $.mobile.listview.prototype.options.headerTheme = "e";  // Header for nested lists
    $.mobile.listview.prototype.options.theme = "e";  // List items / content
    $.mobile.listview.prototype.options.dividerTheme = "e";  // List divider

    $.mobile.listview.prototype.options.splitTheme = "e";
    $.mobile.listview.prototype.options.countTheme = "e";
    $.mobile.listview.prototype.options.filterTheme = "e";
    //$.mobile.listview.prototype.options.filterPlaceholder = "Filter data...";
});