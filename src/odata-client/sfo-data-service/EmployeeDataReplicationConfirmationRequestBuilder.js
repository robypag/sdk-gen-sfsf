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
var EmployeeDataReplicationConfirmation_1 = require("./EmployeeDataReplicationConfirmation");
/**
 * Request builder class for operations supported on the [[EmployeeDataReplicationConfirmation]] entity.
 */
var EmployeeDataReplicationConfirmationRequestBuilder = /** @class */ (function (_super) {
    __extends(EmployeeDataReplicationConfirmationRequestBuilder, _super);
    function EmployeeDataReplicationConfirmationRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `EmployeeDataReplicationConfirmation` entity based on its keys.
     * @param externalCode Key property. See [[EmployeeDataReplicationConfirmation.externalCode]].
     * @returns A request builder for creating requests to retrieve one `EmployeeDataReplicationConfirmation` entity based on its keys.
     */
    EmployeeDataReplicationConfirmationRequestBuilder.prototype.getByKey = function (externalCode) {
        return new core_1.GetByKeyRequestBuilder(EmployeeDataReplicationConfirmation_1.EmployeeDataReplicationConfirmation, { externalCode: externalCode });
    };
    /**
     * Returns a request builder for querying all `EmployeeDataReplicationConfirmation` entities.
     * @returns A request builder for creating requests to retrieve all `EmployeeDataReplicationConfirmation` entities.
     */
    EmployeeDataReplicationConfirmationRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(EmployeeDataReplicationConfirmation_1.EmployeeDataReplicationConfirmation);
    };
    /**
     * Returns a request builder for creating a `EmployeeDataReplicationConfirmation` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `EmployeeDataReplicationConfirmation`.
     */
    EmployeeDataReplicationConfirmationRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(EmployeeDataReplicationConfirmation_1.EmployeeDataReplicationConfirmation, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `EmployeeDataReplicationConfirmation`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `EmployeeDataReplicationConfirmation`.
     */
    EmployeeDataReplicationConfirmationRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(EmployeeDataReplicationConfirmation_1.EmployeeDataReplicationConfirmation, entity);
    };
    return EmployeeDataReplicationConfirmationRequestBuilder;
}(core_1.RequestBuilder));
exports.EmployeeDataReplicationConfirmationRequestBuilder = EmployeeDataReplicationConfirmationRequestBuilder;
//# sourceMappingURL=EmployeeDataReplicationConfirmationRequestBuilder.js.map