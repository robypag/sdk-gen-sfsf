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
var PhysicalReqContent_1 = require("./PhysicalReqContent");
/**
 * Request builder class for operations supported on the [[PhysicalReqContent]] entity.
 */
var PhysicalReqContentRequestBuilder = /** @class */ (function (_super) {
    __extends(PhysicalReqContentRequestBuilder, _super);
    function PhysicalReqContentRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `PhysicalReqContent` entity based on its keys.
     * @param jobProfileExternalCode Key property. See [[PhysicalReqContent.jobProfileExternalCode]].
     * @param externalCode Key property. See [[PhysicalReqContent.externalCode]].
     * @returns A request builder for creating requests to retrieve one `PhysicalReqContent` entity based on its keys.
     */
    PhysicalReqContentRequestBuilder.prototype.getByKey = function (jobProfileExternalCode, externalCode) {
        return new core_1.GetByKeyRequestBuilder(PhysicalReqContent_1.PhysicalReqContent, {
            JobProfile_externalCode: jobProfileExternalCode,
            externalCode: externalCode
        });
    };
    /**
     * Returns a request builder for querying all `PhysicalReqContent` entities.
     * @returns A request builder for creating requests to retrieve all `PhysicalReqContent` entities.
     */
    PhysicalReqContentRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(PhysicalReqContent_1.PhysicalReqContent);
    };
    /**
     * Returns a request builder for creating a `PhysicalReqContent` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PhysicalReqContent`.
     */
    PhysicalReqContentRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(PhysicalReqContent_1.PhysicalReqContent, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `PhysicalReqContent`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PhysicalReqContent`.
     */
    PhysicalReqContentRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(PhysicalReqContent_1.PhysicalReqContent, entity);
    };
    PhysicalReqContentRequestBuilder.prototype.delete = function (jobProfileExternalCodeOrEntity, externalCode) {
        return new core_1.DeleteRequestBuilder(PhysicalReqContent_1.PhysicalReqContent, jobProfileExternalCodeOrEntity instanceof PhysicalReqContent_1.PhysicalReqContent ? jobProfileExternalCodeOrEntity : {
            JobProfile_externalCode: jobProfileExternalCodeOrEntity,
            externalCode: externalCode
        });
    };
    return PhysicalReqContentRequestBuilder;
}(core_1.RequestBuilder));
exports.PhysicalReqContentRequestBuilder = PhysicalReqContentRequestBuilder;
//# sourceMappingURL=PhysicalReqContentRequestBuilder.js.map