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
var ExternalTimeData_1 = require("./ExternalTimeData");
/**
 * Request builder class for operations supported on the [[ExternalTimeData]] entity.
 */
var ExternalTimeDataRequestBuilder = /** @class */ (function (_super) {
    __extends(ExternalTimeDataRequestBuilder, _super);
    function ExternalTimeDataRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `ExternalTimeData` entity based on its keys.
     * @param externalCode Key property. See [[ExternalTimeData.externalCode]].
     * @returns A request builder for creating requests to retrieve one `ExternalTimeData` entity based on its keys.
     */
    ExternalTimeDataRequestBuilder.prototype.getByKey = function (externalCode) {
        return new core_1.GetByKeyRequestBuilder(ExternalTimeData_1.ExternalTimeData, { externalCode: externalCode });
    };
    /**
     * Returns a request builder for querying all `ExternalTimeData` entities.
     * @returns A request builder for creating requests to retrieve all `ExternalTimeData` entities.
     */
    ExternalTimeDataRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(ExternalTimeData_1.ExternalTimeData);
    };
    /**
     * Returns a request builder for creating a `ExternalTimeData` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ExternalTimeData`.
     */
    ExternalTimeDataRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(ExternalTimeData_1.ExternalTimeData, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `ExternalTimeData`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ExternalTimeData`.
     */
    ExternalTimeDataRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(ExternalTimeData_1.ExternalTimeData, entity);
    };
    ExternalTimeDataRequestBuilder.prototype.delete = function (externalCodeOrEntity) {
        return new core_1.DeleteRequestBuilder(ExternalTimeData_1.ExternalTimeData, externalCodeOrEntity instanceof ExternalTimeData_1.ExternalTimeData ? externalCodeOrEntity : { externalCode: externalCodeOrEntity });
    };
    return ExternalTimeDataRequestBuilder;
}(core_1.RequestBuilder));
exports.ExternalTimeDataRequestBuilder = ExternalTimeDataRequestBuilder;
//# sourceMappingURL=ExternalTimeDataRequestBuilder.js.map