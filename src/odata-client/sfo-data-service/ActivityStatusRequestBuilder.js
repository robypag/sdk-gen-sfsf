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
var ActivityStatus_1 = require("./ActivityStatus");
/**
 * Request builder class for operations supported on the [[ActivityStatus]] entity.
 */
var ActivityStatusRequestBuilder = /** @class */ (function (_super) {
    __extends(ActivityStatusRequestBuilder, _super);
    function ActivityStatusRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `ActivityStatus` entity based on its keys.
     * @param activityStatusId Key property. See [[ActivityStatus.activityStatusId]].
     * @returns A request builder for creating requests to retrieve one `ActivityStatus` entity based on its keys.
     */
    ActivityStatusRequestBuilder.prototype.getByKey = function (activityStatusId) {
        return new core_1.GetByKeyRequestBuilder(ActivityStatus_1.ActivityStatus, { activityStatusId: activityStatusId });
    };
    /**
     * Returns a request builder for querying all `ActivityStatus` entities.
     * @returns A request builder for creating requests to retrieve all `ActivityStatus` entities.
     */
    ActivityStatusRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(ActivityStatus_1.ActivityStatus);
    };
    /**
     * Returns a request builder for creating a `ActivityStatus` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ActivityStatus`.
     */
    ActivityStatusRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(ActivityStatus_1.ActivityStatus, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `ActivityStatus`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ActivityStatus`.
     */
    ActivityStatusRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(ActivityStatus_1.ActivityStatus, entity);
    };
    ActivityStatusRequestBuilder.prototype.delete = function (activityStatusIdOrEntity) {
        return new core_1.DeleteRequestBuilder(ActivityStatus_1.ActivityStatus, activityStatusIdOrEntity instanceof ActivityStatus_1.ActivityStatus ? activityStatusIdOrEntity : { activityStatusId: activityStatusIdOrEntity });
    };
    return ActivityStatusRequestBuilder;
}(core_1.RequestBuilder));
exports.ActivityStatusRequestBuilder = ActivityStatusRequestBuilder;
//# sourceMappingURL=ActivityStatusRequestBuilder.js.map