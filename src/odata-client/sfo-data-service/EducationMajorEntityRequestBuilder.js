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
var EducationMajorEntity_1 = require("./EducationMajorEntity");
/**
 * Request builder class for operations supported on the [[EducationMajorEntity]] entity.
 */
var EducationMajorEntityRequestBuilder = /** @class */ (function (_super) {
    __extends(EducationMajorEntityRequestBuilder, _super);
    function EducationMajorEntityRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `EducationMajorEntity` entity based on its keys.
     * @param externalCode Key property. See [[EducationMajorEntity.externalCode]].
     * @returns A request builder for creating requests to retrieve one `EducationMajorEntity` entity based on its keys.
     */
    EducationMajorEntityRequestBuilder.prototype.getByKey = function (externalCode) {
        return new core_1.GetByKeyRequestBuilder(EducationMajorEntity_1.EducationMajorEntity, { externalCode: externalCode });
    };
    /**
     * Returns a request builder for querying all `EducationMajorEntity` entities.
     * @returns A request builder for creating requests to retrieve all `EducationMajorEntity` entities.
     */
    EducationMajorEntityRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(EducationMajorEntity_1.EducationMajorEntity);
    };
    /**
     * Returns a request builder for creating a `EducationMajorEntity` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `EducationMajorEntity`.
     */
    EducationMajorEntityRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(EducationMajorEntity_1.EducationMajorEntity, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `EducationMajorEntity`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `EducationMajorEntity`.
     */
    EducationMajorEntityRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(EducationMajorEntity_1.EducationMajorEntity, entity);
    };
    EducationMajorEntityRequestBuilder.prototype.delete = function (externalCodeOrEntity) {
        return new core_1.DeleteRequestBuilder(EducationMajorEntity_1.EducationMajorEntity, externalCodeOrEntity instanceof EducationMajorEntity_1.EducationMajorEntity ? externalCodeOrEntity : { externalCode: externalCodeOrEntity });
    };
    return EducationMajorEntityRequestBuilder;
}(core_1.RequestBuilder));
exports.EducationMajorEntityRequestBuilder = EducationMajorEntityRequestBuilder;
//# sourceMappingURL=EducationMajorEntityRequestBuilder.js.map