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
var FamilyCompetencyMappingEntity_1 = require("./FamilyCompetencyMappingEntity");
/**
 * Request builder class for operations supported on the [[FamilyCompetencyMappingEntity]] entity.
 */
var FamilyCompetencyMappingEntityRequestBuilder = /** @class */ (function (_super) {
    __extends(FamilyCompetencyMappingEntityRequestBuilder, _super);
    function FamilyCompetencyMappingEntityRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `FamilyCompetencyMappingEntity` entity based on its keys.
     * @param familyEntityExternalCode Key property. See [[FamilyCompetencyMappingEntity.familyEntityExternalCode]].
     * @param externalCode Key property. See [[FamilyCompetencyMappingEntity.externalCode]].
     * @returns A request builder for creating requests to retrieve one `FamilyCompetencyMappingEntity` entity based on its keys.
     */
    FamilyCompetencyMappingEntityRequestBuilder.prototype.getByKey = function (familyEntityExternalCode, externalCode) {
        return new core_1.GetByKeyRequestBuilder(FamilyCompetencyMappingEntity_1.FamilyCompetencyMappingEntity, {
            FamilyEntity_externalCode: familyEntityExternalCode,
            externalCode: externalCode
        });
    };
    /**
     * Returns a request builder for querying all `FamilyCompetencyMappingEntity` entities.
     * @returns A request builder for creating requests to retrieve all `FamilyCompetencyMappingEntity` entities.
     */
    FamilyCompetencyMappingEntityRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(FamilyCompetencyMappingEntity_1.FamilyCompetencyMappingEntity);
    };
    /**
     * Returns a request builder for creating a `FamilyCompetencyMappingEntity` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `FamilyCompetencyMappingEntity`.
     */
    FamilyCompetencyMappingEntityRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(FamilyCompetencyMappingEntity_1.FamilyCompetencyMappingEntity, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `FamilyCompetencyMappingEntity`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `FamilyCompetencyMappingEntity`.
     */
    FamilyCompetencyMappingEntityRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(FamilyCompetencyMappingEntity_1.FamilyCompetencyMappingEntity, entity);
    };
    FamilyCompetencyMappingEntityRequestBuilder.prototype.delete = function (familyEntityExternalCodeOrEntity, externalCode) {
        return new core_1.DeleteRequestBuilder(FamilyCompetencyMappingEntity_1.FamilyCompetencyMappingEntity, familyEntityExternalCodeOrEntity instanceof FamilyCompetencyMappingEntity_1.FamilyCompetencyMappingEntity ? familyEntityExternalCodeOrEntity : {
            FamilyEntity_externalCode: familyEntityExternalCodeOrEntity,
            externalCode: externalCode
        });
    };
    return FamilyCompetencyMappingEntityRequestBuilder;
}(core_1.RequestBuilder));
exports.FamilyCompetencyMappingEntityRequestBuilder = FamilyCompetencyMappingEntityRequestBuilder;
//# sourceMappingURL=FamilyCompetencyMappingEntityRequestBuilder.js.map