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
                var oTable = this.byId("table0");
                var oItem = this.byId("item0");
                var sQuery = oEvent.getParameter("query");
// ptn3 start
                var oBinding = this.getView().byId("table0");
                var oFilter2;
                oFilter2 = new sap.ui.model.Filter("CompanyName", "EQ", sQuery); 
                oTable.getBinding("rows").filter([oFilter2]);
// ptn3 end
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