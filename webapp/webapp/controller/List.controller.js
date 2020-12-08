sap.ui.define([
    "sap/ui/core/mvc/Controller",    
    'sap/ui/model/Filter',
	"sap/ui/model/FilterOperator"
],
    function (Controller, Filter, FilterOperator) {
        "use strict";
        return Controller.extend("sap.cp.webapp.controller.List", {
            onCompanyName : function (oEvent) {
                var aFilter = [];
                var sQuery = oEvent.getParameter("query");
                 var filter = new Filter({
                         path: "CompanyName", 
                         operator: "EQ",
                         value1: sQuery
                 });
                // if (sQuery) {
                //     // aFilter.push(new Filter({path: "CompanyName", 
                //     //                         operator: "EQ",
                //     //                         value1: sQuery,
                //     //                         })
                //     //             );
                //     aFilter.push(new Filter("CompanyName", FilterOperator.Contains, sQuery));
                // }
                var oList = this.byId("table0");
                // var oBinding = oList.getBinding("item0");
                // oBinding.filter(aFilter);
                 var oItem = this.byId("item0");
                 oList.bindItems({
                     template: oItem,
                     path: "/SalesOrderSet",
                     filters: [filter]
                 })
            },
            handleListItemPress: function (oEvent) {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                var selectedSalesOrderID = oEvent.getSource().getBindingContext().getProperty("SalesOrderID");
                oRouter.navTo("detail", {
                    SalesOrderID: selectedSalesOrderID
                });
            }
        });
    });