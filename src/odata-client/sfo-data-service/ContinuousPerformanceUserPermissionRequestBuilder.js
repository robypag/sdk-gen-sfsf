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
var ContinuousPerformanceUserPermission_1 = require("./ContinuousPerformanceUserPermission");
/**
 * Request builder class for operations supported on the [[ContinuousPerformanceUserPermission]] entity.
 */
var ContinuousPerformanceUserPermissionRequestBuilder = /** @class */ (function (_super) {
    __extends(ContinuousPerformanceUserPermissionRequestBuilder, _super);
    function ContinuousPerformanceUserPermissionRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `ContinuousPerformanceUserPermission` entity based on its keys.
     * @param permStringValue Key property. See [[ContinuousPerformanceUserPermission.permStringValue]].
     * @param permType Key property. See [[ContinuousPerformanceUserPermission.permType]].
     * @param targetUserId Key property. See [[ContinuousPerformanceUserPermission.targetUserId]].
     * @returns A request builder for creating requests to retrieve one `ContinuousPerformanceUserPermission` entity based on its keys.
     */
    ContinuousPerformanceUserPermissionRequestBuilder.prototype.getByKey = function (permStringValue, permType, targetUserId) {
        return new core_1.GetByKeyRequestBuilder(ContinuousPerformanceUserPermission_1.ContinuousPerformanceUserPermission, {
            permStringValue: permStringValue,
            permType: permType,
            targetUserId: targetUserId
        });
    };
    /**
     * Returns a request builder for querying all `ContinuousPerformanceUserPermission` entities.
     * @returns A request builder for creating requests to retrieve all `ContinuousPerformanceUserPermission` entities.
     */
    ContinuousPerformanceUserPermissionRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(ContinuousPerformanceUserPermission_1.ContinuousPerformanceUserPermission);
    };
    return ContinuousPerformanceUserPermissionRequestBuilder;
}(core_1.RequestBuilder));
exports.ContinuousPerformanceUserPermissionRequestBuilder = ContinuousPerformanceUserPermissionRequestBuilder;
//# sourceMappingURL=ContinuousPerformanceUserPermissionRequestBuilder.js.map