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
var EmployeeDataReplicationNotification_1 = require("./EmployeeDataReplicationNotification");
/**
 * Request builder class for operations supported on the [[EmployeeDataReplicationNotification]] entity.
 */
var EmployeeDataReplicationNotificationRequestBuilder = /** @class */ (function (_super) {
    __extends(EmployeeDataReplicationNotificationRequestBuilder, _super);
    function EmployeeDataReplicationNotificationRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `EmployeeDataReplicationNotification` entity based on its keys.
     * @param externalCode Key property. See [[EmployeeDataReplicationNotification.externalCode]].
     * @returns A request builder for creating requests to retrieve one `EmployeeDataReplicationNotification` entity based on its keys.
     */
    EmployeeDataReplicationNotificationRequestBuilder.prototype.getByKey = function (externalCode) {
        return new core_1.GetByKeyRequestBuilder(EmployeeDataReplicationNotification_1.EmployeeDataReplicationNotification, { externalCode: externalCode });
    };
    /**
     * Returns a request builder for querying all `EmployeeDataReplicationNotification` entities.
     * @returns A request builder for creating requests to retrieve all `EmployeeDataReplicationNotification` entities.
     */
    EmployeeDataReplicationNotificationRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(EmployeeDataReplicationNotification_1.EmployeeDataReplicationNotification);
    };
    /**
     * Returns a request builder for creating a `EmployeeDataReplicationNotification` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `EmployeeDataReplicationNotification`.
     */
    EmployeeDataReplicationNotificationRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(EmployeeDataReplicationNotification_1.EmployeeDataReplicationNotification, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `EmployeeDataReplicationNotification`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `EmployeeDataReplicationNotification`.
     */
    EmployeeDataReplicationNotificationRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(EmployeeDataReplicationNotification_1.EmployeeDataReplicationNotification, entity);
    };
    return EmployeeDataReplicationNotificationRequestBuilder;
}(core_1.RequestBuilder));
exports.EmployeeDataReplicationNotificationRequestBuilder = EmployeeDataReplicationNotificationRequestBuilder;
//# sourceMappingURL=EmployeeDataReplicationNotificationRequestBuilder.js.map