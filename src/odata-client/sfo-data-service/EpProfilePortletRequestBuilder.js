"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var EpProfilePortlet_1 = require("./EpProfilePortlet");
/**
 * Request builder class for operations supported on the [[EpProfilePortlet]] entity.
 */
var EpProfilePortletRequestBuilder = /** @class */ (function (_super) {
    __extends(EpProfilePortletRequestBuilder, _super);
    function EpProfilePortletRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `EpProfilePortlet` entity based on its keys.
     * @param dashboardId Key property. See [[EpProfilePortlet.dashboardId]].
     * @param portletId Key property. See [[EpProfilePortlet.portletId]].
     * @param userId Key property. See [[EpProfilePortlet.userId]].
     * @returns A request builder for creating requests to retrieve one `EpProfilePortlet` entity based on its keys.
     */
    EpProfilePortletRequestBuilder.prototype.getByKey = function (dashboardId, portletId, userId) {
        return new core_1.GetByKeyRequestBuilder(EpProfilePortlet_1.EpProfilePortlet, {
            dashboardId: dashboardId,
            portletId: portletId,
            userId: userId
        });
    };
    /**
     * Returns a request builder for querying all `EpProfilePortlet` entities.
     * @returns A request builder for creating requests to retrieve all `EpProfilePortlet` entities.
     */
    EpProfilePortletRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(EpProfilePortlet_1.EpProfilePortlet);
    };
    return EpProfilePortletRequestBuilder;
}(core_1.RequestBuilder));
exports.EpProfilePortletRequestBuilder = EpProfilePortletRequestBuilder;
//# sourceMappingURL=EpProfilePortletRequestBuilder.js.map