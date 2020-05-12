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
var PhysicalReqEntity_1 = require("./PhysicalReqEntity");
/**
 * Request builder class for operations supported on the [[PhysicalReqEntity]] entity.
 */
var PhysicalReqEntityRequestBuilder = /** @class */ (function (_super) {
    __extends(PhysicalReqEntityRequestBuilder, _super);
    function PhysicalReqEntityRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `PhysicalReqEntity` entity based on its keys.
     * @param externalCode Key property. See [[PhysicalReqEntity.externalCode]].
     * @returns A request builder for creating requests to retrieve one `PhysicalReqEntity` entity based on its keys.
     */
    PhysicalReqEntityRequestBuilder.prototype.getByKey = function (externalCode) {
        return new core_1.GetByKeyRequestBuilder(PhysicalReqEntity_1.PhysicalReqEntity, { externalCode: externalCode });
    };
    /**
     * Returns a request builder for querying all `PhysicalReqEntity` entities.
     * @returns A request builder for creating requests to retrieve all `PhysicalReqEntity` entities.
     */
    PhysicalReqEntityRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(PhysicalReqEntity_1.PhysicalReqEntity);
    };
    /**
     * Returns a request builder for creating a `PhysicalReqEntity` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PhysicalReqEntity`.
     */
    PhysicalReqEntityRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(PhysicalReqEntity_1.PhysicalReqEntity, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `PhysicalReqEntity`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PhysicalReqEntity`.
     */
    PhysicalReqEntityRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(PhysicalReqEntity_1.PhysicalReqEntity, entity);
    };
    PhysicalReqEntityRequestBuilder.prototype.delete = function (externalCodeOrEntity) {
        return new core_1.DeleteRequestBuilder(PhysicalReqEntity_1.PhysicalReqEntity, externalCodeOrEntity instanceof PhysicalReqEntity_1.PhysicalReqEntity ? externalCodeOrEntity : { externalCode: externalCodeOrEntity });
    };
    return PhysicalReqEntityRequestBuilder;
}(core_1.RequestBuilder));
exports.PhysicalReqEntityRequestBuilder = PhysicalReqEntityRequestBuilder;
//# sourceMappingURL=PhysicalReqEntityRequestBuilder.js.map