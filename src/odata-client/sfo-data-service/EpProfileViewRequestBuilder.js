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
var EpProfileView_1 = require("./EpProfileView");
/**
 * Request builder class for operations supported on the [[EpProfileView]] entity.
 */
var EpProfileViewRequestBuilder = /** @class */ (function (_super) {
    __extends(EpProfileViewRequestBuilder, _super);
    function EpProfileViewRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `EpProfileView` entity based on its keys.
     * @param dashboardId Key property. See [[EpProfileView.dashboardId]].
     * @param userId Key property. See [[EpProfileView.userId]].
     * @returns A request builder for creating requests to retrieve one `EpProfileView` entity based on its keys.
     */
    EpProfileViewRequestBuilder.prototype.getByKey = function (dashboardId, userId) {
        return new core_1.GetByKeyRequestBuilder(EpProfileView_1.EpProfileView, {
            dashboardId: dashboardId,
            userId: userId
        });
    };
    /**
     * Returns a request builder for querying all `EpProfileView` entities.
     * @returns A request builder for creating requests to retrieve all `EpProfileView` entities.
     */
    EpProfileViewRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(EpProfileView_1.EpProfileView);
    };
    return EpProfileViewRequestBuilder;
}(core_1.RequestBuilder));
exports.EpProfileViewRequestBuilder = EpProfileViewRequestBuilder;
//# sourceMappingURL=EpProfileViewRequestBuilder.js.map