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
var EducationDegreeEntity_1 = require("./EducationDegreeEntity");
/**
 * Request builder class for operations supported on the [[EducationDegreeEntity]] entity.
 */
var EducationDegreeEntityRequestBuilder = /** @class */ (function (_super) {
    __extends(EducationDegreeEntityRequestBuilder, _super);
    function EducationDegreeEntityRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `EducationDegreeEntity` entity based on its keys.
     * @param externalCode Key property. See [[EducationDegreeEntity.externalCode]].
     * @returns A request builder for creating requests to retrieve one `EducationDegreeEntity` entity based on its keys.
     */
    EducationDegreeEntityRequestBuilder.prototype.getByKey = function (externalCode) {
        return new core_1.GetByKeyRequestBuilder(EducationDegreeEntity_1.EducationDegreeEntity, { externalCode: externalCode });
    };
    /**
     * Returns a request builder for querying all `EducationDegreeEntity` entities.
     * @returns A request builder for creating requests to retrieve all `EducationDegreeEntity` entities.
     */
    EducationDegreeEntityRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(EducationDegreeEntity_1.EducationDegreeEntity);
    };
    /**
     * Returns a request builder for creating a `EducationDegreeEntity` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `EducationDegreeEntity`.
     */
    EducationDegreeEntityRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(EducationDegreeEntity_1.EducationDegreeEntity, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `EducationDegreeEntity`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `EducationDegreeEntity`.
     */
    EducationDegreeEntityRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(EducationDegreeEntity_1.EducationDegreeEntity, entity);
    };
    EducationDegreeEntityRequestBuilder.prototype.delete = function (externalCodeOrEntity) {
        return new core_1.DeleteRequestBuilder(EducationDegreeEntity_1.EducationDegreeEntity, externalCodeOrEntity instanceof EducationDegreeEntity_1.EducationDegreeEntity ? externalCodeOrEntity : { externalCode: externalCodeOrEntity });
    };
    return EducationDegreeEntityRequestBuilder;
}(core_1.RequestBuilder));
exports.EducationDegreeEntityRequestBuilder = EducationDegreeEntityRequestBuilder;
//# sourceMappingURL=EducationDegreeEntityRequestBuilder.js.map