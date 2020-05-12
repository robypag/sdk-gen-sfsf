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
var EmployeeDataReplicationElement_1 = require("./EmployeeDataReplicationElement");
/**
 * Request builder class for operations supported on the [[EmployeeDataReplicationElement]] entity.
 */
var EmployeeDataReplicationElementRequestBuilder = /** @class */ (function (_super) {
    __extends(EmployeeDataReplicationElementRequestBuilder, _super);
    function EmployeeDataReplicationElementRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `EmployeeDataReplicationElement` entity based on its keys.
     * @param externalCode Key property. See [[EmployeeDataReplicationElement.externalCode]].
     * @returns A request builder for creating requests to retrieve one `EmployeeDataReplicationElement` entity based on its keys.
     */
    EmployeeDataReplicationElementRequestBuilder.prototype.getByKey = function (externalCode) {
        return new core_1.GetByKeyRequestBuilder(EmployeeDataReplicationElement_1.EmployeeDataReplicationElement, { externalCode: externalCode });
    };
    /**
     * Returns a request builder for querying all `EmployeeDataReplicationElement` entities.
     * @returns A request builder for creating requests to retrieve all `EmployeeDataReplicationElement` entities.
     */
    EmployeeDataReplicationElementRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(EmployeeDataReplicationElement_1.EmployeeDataReplicationElement);
    };
    /**
     * Returns a request builder for creating a `EmployeeDataReplicationElement` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `EmployeeDataReplicationElement`.
     */
    EmployeeDataReplicationElementRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(EmployeeDataReplicationElement_1.EmployeeDataReplicationElement, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `EmployeeDataReplicationElement`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `EmployeeDataReplicationElement`.
     */
    EmployeeDataReplicationElementRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(EmployeeDataReplicationElement_1.EmployeeDataReplicationElement, entity);
    };
    return EmployeeDataReplicationElementRequestBuilder;
}(core_1.RequestBuilder));
exports.EmployeeDataReplicationElementRequestBuilder = EmployeeDataReplicationElementRequestBuilder;
//# sourceMappingURL=EmployeeDataReplicationElementRequestBuilder.js.map