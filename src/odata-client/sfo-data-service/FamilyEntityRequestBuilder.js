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
var FamilyEntity_1 = require("./FamilyEntity");
/**
 * Request builder class for operations supported on the [[FamilyEntity]] entity.
 */
var FamilyEntityRequestBuilder = /** @class */ (function (_super) {
    __extends(FamilyEntityRequestBuilder, _super);
    function FamilyEntityRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `FamilyEntity` entity based on its keys.
     * @param externalCode Key property. See [[FamilyEntity.externalCode]].
     * @returns A request builder for creating requests to retrieve one `FamilyEntity` entity based on its keys.
     */
    FamilyEntityRequestBuilder.prototype.getByKey = function (externalCode) {
        return new core_1.GetByKeyRequestBuilder(FamilyEntity_1.FamilyEntity, { externalCode: externalCode });
    };
    /**
     * Returns a request builder for querying all `FamilyEntity` entities.
     * @returns A request builder for creating requests to retrieve all `FamilyEntity` entities.
     */
    FamilyEntityRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(FamilyEntity_1.FamilyEntity);
    };
    /**
     * Returns a request builder for creating a `FamilyEntity` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `FamilyEntity`.
     */
    FamilyEntityRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(FamilyEntity_1.FamilyEntity, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `FamilyEntity`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `FamilyEntity`.
     */
    FamilyEntityRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(FamilyEntity_1.FamilyEntity, entity);
    };
    FamilyEntityRequestBuilder.prototype.delete = function (externalCodeOrEntity) {
        return new core_1.DeleteRequestBuilder(FamilyEntity_1.FamilyEntity, externalCodeOrEntity instanceof FamilyEntity_1.FamilyEntity ? externalCodeOrEntity : { externalCode: externalCodeOrEntity });
    };
    return FamilyEntityRequestBuilder;
}(core_1.RequestBuilder));
exports.FamilyEntityRequestBuilder = FamilyEntityRequestBuilder;
//# sourceMappingURL=FamilyEntityRequestBuilder.js.map