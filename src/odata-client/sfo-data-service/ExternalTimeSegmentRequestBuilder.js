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
var ExternalTimeSegment_1 = require("./ExternalTimeSegment");
/**
 * Request builder class for operations supported on the [[ExternalTimeSegment]] entity.
 */
var ExternalTimeSegmentRequestBuilder = /** @class */ (function (_super) {
    __extends(ExternalTimeSegmentRequestBuilder, _super);
    function ExternalTimeSegmentRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `ExternalTimeSegment` entity based on its keys.
     * @param externalTimeRecordExternalCode Key property. See [[ExternalTimeSegment.externalTimeRecordExternalCode]].
     * @param externalCode Key property. See [[ExternalTimeSegment.externalCode]].
     * @returns A request builder for creating requests to retrieve one `ExternalTimeSegment` entity based on its keys.
     */
    ExternalTimeSegmentRequestBuilder.prototype.getByKey = function (externalTimeRecordExternalCode, externalCode) {
        return new core_1.GetByKeyRequestBuilder(ExternalTimeSegment_1.ExternalTimeSegment, {
            ExternalTimeRecord_externalCode: externalTimeRecordExternalCode,
            externalCode: externalCode
        });
    };
    /**
     * Returns a request builder for querying all `ExternalTimeSegment` entities.
     * @returns A request builder for creating requests to retrieve all `ExternalTimeSegment` entities.
     */
    ExternalTimeSegmentRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(ExternalTimeSegment_1.ExternalTimeSegment);
    };
    /**
     * Returns a request builder for creating a `ExternalTimeSegment` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ExternalTimeSegment`.
     */
    ExternalTimeSegmentRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(ExternalTimeSegment_1.ExternalTimeSegment, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `ExternalTimeSegment`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ExternalTimeSegment`.
     */
    ExternalTimeSegmentRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(ExternalTimeSegment_1.ExternalTimeSegment, entity);
    };
    ExternalTimeSegmentRequestBuilder.prototype.delete = function (externalTimeRecordExternalCodeOrEntity, externalCode) {
        return new core_1.DeleteRequestBuilder(ExternalTimeSegment_1.ExternalTimeSegment, externalTimeRecordExternalCodeOrEntity instanceof ExternalTimeSegment_1.ExternalTimeSegment ? externalTimeRecordExternalCodeOrEntity : {
            ExternalTimeRecord_externalCode: externalTimeRecordExternalCodeOrEntity,
            externalCode: externalCode
        });
    };
    return ExternalTimeSegmentRequestBuilder;
}(core_1.RequestBuilder));
exports.ExternalTimeSegmentRequestBuilder = ExternalTimeSegmentRequestBuilder;
//# sourceMappingURL=ExternalTimeSegmentRequestBuilder.js.map