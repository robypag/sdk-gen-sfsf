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
var ExternalTimeRecord_1 = require("./ExternalTimeRecord");
/**
 * Request builder class for operations supported on the [[ExternalTimeRecord]] entity.
 */
var ExternalTimeRecordRequestBuilder = /** @class */ (function (_super) {
    __extends(ExternalTimeRecordRequestBuilder, _super);
    function ExternalTimeRecordRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `ExternalTimeRecord` entity based on its keys.
     * @param externalCode Key property. See [[ExternalTimeRecord.externalCode]].
     * @returns A request builder for creating requests to retrieve one `ExternalTimeRecord` entity based on its keys.
     */
    ExternalTimeRecordRequestBuilder.prototype.getByKey = function (externalCode) {
        return new core_1.GetByKeyRequestBuilder(ExternalTimeRecord_1.ExternalTimeRecord, { externalCode: externalCode });
    };
    /**
     * Returns a request builder for querying all `ExternalTimeRecord` entities.
     * @returns A request builder for creating requests to retrieve all `ExternalTimeRecord` entities.
     */
    ExternalTimeRecordRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(ExternalTimeRecord_1.ExternalTimeRecord);
    };
    /**
     * Returns a request builder for creating a `ExternalTimeRecord` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ExternalTimeRecord`.
     */
    ExternalTimeRecordRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(ExternalTimeRecord_1.ExternalTimeRecord, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `ExternalTimeRecord`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ExternalTimeRecord`.
     */
    ExternalTimeRecordRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(ExternalTimeRecord_1.ExternalTimeRecord, entity);
    };
    ExternalTimeRecordRequestBuilder.prototype.delete = function (externalCodeOrEntity) {
        return new core_1.DeleteRequestBuilder(ExternalTimeRecord_1.ExternalTimeRecord, externalCodeOrEntity instanceof ExternalTimeRecord_1.ExternalTimeRecord ? externalCodeOrEntity : { externalCode: externalCodeOrEntity });
    };
    return ExternalTimeRecordRequestBuilder;
}(core_1.RequestBuilder));
exports.ExternalTimeRecordRequestBuilder = ExternalTimeRecordRequestBuilder;
//# sourceMappingURL=ExternalTimeRecordRequestBuilder.js.map