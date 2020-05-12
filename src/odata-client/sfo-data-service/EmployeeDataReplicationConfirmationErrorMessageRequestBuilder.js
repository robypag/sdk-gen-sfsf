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
var EmployeeDataReplicationConfirmationErrorMessage_1 = require("./EmployeeDataReplicationConfirmationErrorMessage");
/**
 * Request builder class for operations supported on the [[EmployeeDataReplicationConfirmationErrorMessage]] entity.
 */
var EmployeeDataReplicationConfirmationErrorMessageRequestBuilder = /** @class */ (function (_super) {
    __extends(EmployeeDataReplicationConfirmationErrorMessageRequestBuilder, _super);
    function EmployeeDataReplicationConfirmationErrorMessageRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `EmployeeDataReplicationConfirmationErrorMessage` entity based on its keys.
     * @param employeeDataReplicationConfirmationExternalCode Key property. See [[EmployeeDataReplicationConfirmationErrorMessage.employeeDataReplicationConfirmationExternalCode]].
     * @param externalCode Key property. See [[EmployeeDataReplicationConfirmationErrorMessage.externalCode]].
     * @returns A request builder for creating requests to retrieve one `EmployeeDataReplicationConfirmationErrorMessage` entity based on its keys.
     */
    EmployeeDataReplicationConfirmationErrorMessageRequestBuilder.prototype.getByKey = function (employeeDataReplicationConfirmationExternalCode, externalCode) {
        return new core_1.GetByKeyRequestBuilder(EmployeeDataReplicationConfirmationErrorMessage_1.EmployeeDataReplicationConfirmationErrorMessage, {
            EmployeeDataReplicationConfirmation_externalCode: employeeDataReplicationConfirmationExternalCode,
            externalCode: externalCode
        });
    };
    /**
     * Returns a request builder for querying all `EmployeeDataReplicationConfirmationErrorMessage` entities.
     * @returns A request builder for creating requests to retrieve all `EmployeeDataReplicationConfirmationErrorMessage` entities.
     */
    EmployeeDataReplicationConfirmationErrorMessageRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(EmployeeDataReplicationConfirmationErrorMessage_1.EmployeeDataReplicationConfirmationErrorMessage);
    };
    /**
     * Returns a request builder for creating a `EmployeeDataReplicationConfirmationErrorMessage` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `EmployeeDataReplicationConfirmationErrorMessage`.
     */
    EmployeeDataReplicationConfirmationErrorMessageRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(EmployeeDataReplicationConfirmationErrorMessage_1.EmployeeDataReplicationConfirmationErrorMessage, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `EmployeeDataReplicationConfirmationErrorMessage`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `EmployeeDataReplicationConfirmationErrorMessage`.
     */
    EmployeeDataReplicationConfirmationErrorMessageRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(EmployeeDataReplicationConfirmationErrorMessage_1.EmployeeDataReplicationConfirmationErrorMessage, entity);
    };
    return EmployeeDataReplicationConfirmationErrorMessageRequestBuilder;
}(core_1.RequestBuilder));
exports.EmployeeDataReplicationConfirmationErrorMessageRequestBuilder = EmployeeDataReplicationConfirmationErrorMessageRequestBuilder;
//# sourceMappingURL=EmployeeDataReplicationConfirmationErrorMessageRequestBuilder.js.map