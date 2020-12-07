sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter"
],
    function (Controller, Filter) {
        "use strict";

        return Controller.extend("sap.cp.webapp.controller.Detail", {
            onInit: function () {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.getRoute("detail").attachMatched(this._onRouteMatched, this);
            },
            _onRouteMatched: function (oEvent) {
                var oArgs, oView;
                oArgs = oEvent.getParameter("arguments");
                oView = this.getView();
                oView.bindElement({                    
                    path: "/SalesOrderSet('" + oArgs.SalesOrderID + "')",          
                    events: {
                        dataRequested: function () {
                            oView.setBusy(true);
                        },
                        dataReceived: function () {
                            oView.setBusy(false);
                        }
                    }
                });

                var list = this.byId("detailList");
                var template = this.byId("listItem");
                var filter = new Filter({
                                path: "SalesOrderID",
                                operator: "EQ",
                                value1: oArgs.SalesOrderID,                    
                            });
                list.bindItems({
                    template: template,
                    path: "/SalesOrderLineItemSet",
                    filters: [filter]
                });

            },
            handleNavButtonPress: function (evt) {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("home");
            }
        });
    });