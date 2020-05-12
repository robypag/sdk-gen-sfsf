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
var RoleSkillMappingEntity_1 = require("./RoleSkillMappingEntity");
/**
 * Request builder class for operations supported on the [[RoleSkillMappingEntity]] entity.
 */
var RoleSkillMappingEntityRequestBuilder = /** @class */ (function (_super) {
    __extends(RoleSkillMappingEntityRequestBuilder, _super);
    function RoleSkillMappingEntityRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `RoleSkillMappingEntity` entity based on its keys.
     * @param roleEntityExternalCode Key property. See [[RoleSkillMappingEntity.roleEntityExternalCode]].
     * @param externalCode Key property. See [[RoleSkillMappingEntity.externalCode]].
     * @returns A request builder for creating requests to retrieve one `RoleSkillMappingEntity` entity based on its keys.
     */
    RoleSkillMappingEntityRequestBuilder.prototype.getByKey = function (roleEntityExternalCode, externalCode) {
        return new core_1.GetByKeyRequestBuilder(RoleSkillMappingEntity_1.RoleSkillMappingEntity, {
            RoleEntity_externalCode: roleEntityExternalCode,
            externalCode: externalCode
        });
    };
    /**
     * Returns a request builder for querying all `RoleSkillMappingEntity` entities.
     * @returns A request builder for creating requests to retrieve all `RoleSkillMappingEntity` entities.
     */
    RoleSkillMappingEntityRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(RoleSkillMappingEntity_1.RoleSkillMappingEntity);
    };
    /**
     * Returns a request builder for creating a `RoleSkillMappingEntity` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `RoleSkillMappingEntity`.
     */
    RoleSkillMappingEntityRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(RoleSkillMappingEntity_1.RoleSkillMappingEntity, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `RoleSkillMappingEntity`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `RoleSkillMappingEntity`.
     */
    RoleSkillMappingEntityRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(RoleSkillMappingEntity_1.RoleSkillMappingEntity, entity);
    };
    RoleSkillMappingEntityRequestBuilder.prototype.delete = function (roleEntityExternalCodeOrEntity, externalCode) {
        return new core_1.DeleteRequestBuilder(RoleSkillMappingEntity_1.RoleSkillMappingEntity, roleEntityExternalCodeOrEntity instanceof RoleSkillMappingEntity_1.RoleSkillMappingEntity ? roleEntityExternalCodeOrEntity : {
            RoleEntity_externalCode: roleEntityExternalCodeOrEntity,
            externalCode: externalCode
        });
    };
    return RoleSkillMappingEntityRequestBuilder;
}(core_1.RequestBuilder));
exports.RoleSkillMappingEntityRequestBuilder = RoleSkillMappingEntityRequestBuilder;
//# sourceMappingURL=RoleSkillMappingEntityRequestBuilder.js.map