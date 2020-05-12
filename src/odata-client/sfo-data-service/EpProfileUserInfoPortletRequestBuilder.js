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
var EpProfileUserInfoPortlet_1 = require("./EpProfileUserInfoPortlet");
/**
 * Request builder class for operations supported on the [[EpProfileUserInfoPortlet]] entity.
 */
var EpProfileUserInfoPortletRequestBuilder = /** @class */ (function (_super) {
    __extends(EpProfileUserInfoPortletRequestBuilder, _super);
    function EpProfileUserInfoPortletRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `EpProfileUserInfoPortlet` entity based on its keys.
     * @param dashboardId Key property. See [[EpProfileUserInfoPortlet.dashboardId]].
     * @param portletId Key property. See [[EpProfileUserInfoPortlet.portletId]].
     * @param userId Key property. See [[EpProfileUserInfoPortlet.userId]].
     * @returns A request builder for creating requests to retrieve one `EpProfileUserInfoPortlet` entity based on its keys.
     */
    EpProfileUserInfoPortletRequestBuilder.prototype.getByKey = function (dashboardId, portletId, userId) {
        return new core_1.GetByKeyRequestBuilder(EpProfileUserInfoPortlet_1.EpProfileUserInfoPortlet, {
            dashboardId: dashboardId,
            portletId: portletId,
            userId: userId
        });
    };
    /**
     * Returns a request builder for querying all `EpProfileUserInfoPortlet` entities.
     * @returns A request builder for creating requests to retrieve all `EpProfileUserInfoPortlet` entities.
     */
    EpProfileUserInfoPortletRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(EpProfileUserInfoPortlet_1.EpProfileUserInfoPortlet);
    };
    return EpProfileUserInfoPortletRequestBuilder;
}(core_1.RequestBuilder));
exports.EpProfileUserInfoPortletRequestBuilder = EpProfileUserInfoPortletRequestBuilder;
//# sourceMappingURL=EpProfileUserInfoPortletRequestBuilder.js.map