sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    function (Controller) {
        "use strict";

        return Controller.extend("sap.cp.webapp.controller.List", {
            handleListItemPress: function (oEvent) {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                var selectedSalesOrderID = oEvent.getSource().getBindingContext().getProperty("SalesOrderID");
                oRouter.navTo("detail", {
                    SalesOrderID: selectedSalesOrderID
                });
            }
        });
    });