sap.ui.define([
    "sap/ui/core/mvc/Controller",    
    'sap/ui/model/Filter',
	"sap/ui/model/FilterOperator"
],
    function (Controller, Filter, FilterOperator) {
        "use strict";
        return Controller.extend("sap.cp.webapp.controller.List", {
            onInit : function () {
                var oTable = this.byId("table0");
                this._oTable = oTable;
            },
            onCompanyName : function (oEvent) {
                var oTable = this.byId("table0");
                var sQuery = oEvent.getParameter("query");
                var oBinding = this.getView().byId("table0");
                this._oTable = oTable;
                var oEventGetSource = oEvent.getSource();
                var oFilter;
                oFilter = new sap.ui.model.Filter("CompanyName", "EQ", sQuery); 
                oTable.getBinding("items").filter([oFilter]);
                alert("stop");
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