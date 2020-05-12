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
var FamilySkillMappingEntity_1 = require("./FamilySkillMappingEntity");
/**
 * Request builder class for operations supported on the [[FamilySkillMappingEntity]] entity.
 */
var FamilySkillMappingEntityRequestBuilder = /** @class */ (function (_super) {
    __extends(FamilySkillMappingEntityRequestBuilder, _super);
    function FamilySkillMappingEntityRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `FamilySkillMappingEntity` entity based on its keys.
     * @param familyEntityExternalCode Key property. See [[FamilySkillMappingEntity.familyEntityExternalCode]].
     * @param externalCode Key property. See [[FamilySkillMappingEntity.externalCode]].
     * @returns A request builder for creating requests to retrieve one `FamilySkillMappingEntity` entity based on its keys.
     */
    FamilySkillMappingEntityRequestBuilder.prototype.getByKey = function (familyEntityExternalCode, externalCode) {
        return new core_1.GetByKeyRequestBuilder(FamilySkillMappingEntity_1.FamilySkillMappingEntity, {
            FamilyEntity_externalCode: familyEntityExternalCode,
            externalCode: externalCode
        });
    };
    /**
     * Returns a request builder for querying all `FamilySkillMappingEntity` entities.
     * @returns A request builder for creating requests to retrieve all `FamilySkillMappingEntity` entities.
     */
    FamilySkillMappingEntityRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(FamilySkillMappingEntity_1.FamilySkillMappingEntity);
    };
    /**
     * Returns a request builder for creating a `FamilySkillMappingEntity` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `FamilySkillMappingEntity`.
     */
    FamilySkillMappingEntityRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(FamilySkillMappingEntity_1.FamilySkillMappingEntity, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `FamilySkillMappingEntity`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `FamilySkillMappingEntity`.
     */
    FamilySkillMappingEntityRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(FamilySkillMappingEntity_1.FamilySkillMappingEntity, entity);
    };
    FamilySkillMappingEntityRequestBuilder.prototype.delete = function (familyEntityExternalCodeOrEntity, externalCode) {
        return new core_1.DeleteRequestBuilder(FamilySkillMappingEntity_1.FamilySkillMappingEntity, familyEntityExternalCodeOrEntity instanceof FamilySkillMappingEntity_1.FamilySkillMappingEntity ? familyEntityExternalCodeOrEntity : {
            FamilyEntity_externalCode: familyEntityExternalCodeOrEntity,
            externalCode: externalCode
        });
    };
    return FamilySkillMappingEntityRequestBuilder;
}(core_1.RequestBuilder));
exports.FamilySkillMappingEntityRequestBuilder = FamilySkillMappingEntityRequestBuilder;
//# sourceMappingURL=FamilySkillMappingEntityRequestBuilder.js.map