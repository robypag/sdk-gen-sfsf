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
var RoleCompetencyMappingEntity_1 = require("./RoleCompetencyMappingEntity");
/**
 * Request builder class for operations supported on the [[RoleCompetencyMappingEntity]] entity.
 */
var RoleCompetencyMappingEntityRequestBuilder = /** @class */ (function (_super) {
    __extends(RoleCompetencyMappingEntityRequestBuilder, _super);
    function RoleCompetencyMappingEntityRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `RoleCompetencyMappingEntity` entity based on its keys.
     * @param roleEntityExternalCode Key property. See [[RoleCompetencyMappingEntity.roleEntityExternalCode]].
     * @param externalCode Key property. See [[RoleCompetencyMappingEntity.externalCode]].
     * @returns A request builder for creating requests to retrieve one `RoleCompetencyMappingEntity` entity based on its keys.
     */
    RoleCompetencyMappingEntityRequestBuilder.prototype.getByKey = function (roleEntityExternalCode, externalCode) {
        return new core_1.GetByKeyRequestBuilder(RoleCompetencyMappingEntity_1.RoleCompetencyMappingEntity, {
            RoleEntity_externalCode: roleEntityExternalCode,
            externalCode: externalCode
        });
    };
    /**
     * Returns a request builder for querying all `RoleCompetencyMappingEntity` entities.
     * @returns A request builder for creating requests to retrieve all `RoleCompetencyMappingEntity` entities.
     */
    RoleCompetencyMappingEntityRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(RoleCompetencyMappingEntity_1.RoleCompetencyMappingEntity);
    };
    /**
     * Returns a request builder for creating a `RoleCompetencyMappingEntity` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `RoleCompetencyMappingEntity`.
     */
    RoleCompetencyMappingEntityRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(RoleCompetencyMappingEntity_1.RoleCompetencyMappingEntity, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `RoleCompetencyMappingEntity`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `RoleCompetencyMappingEntity`.
     */
    RoleCompetencyMappingEntityRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(RoleCompetencyMappingEntity_1.RoleCompetencyMappingEntity, entity);
    };
    RoleCompetencyMappingEntityRequestBuilder.prototype.delete = function (roleEntityExternalCodeOrEntity, externalCode) {
        return new core_1.DeleteRequestBuilder(RoleCompetencyMappingEntity_1.RoleCompetencyMappingEntity, roleEntityExternalCodeOrEntity instanceof RoleCompetencyMappingEntity_1.RoleCompetencyMappingEntity ? roleEntityExternalCodeOrEntity : {
            RoleEntity_externalCode: roleEntityExternalCodeOrEntity,
            externalCode: externalCode
        });
    };
    return RoleCompetencyMappingEntityRequestBuilder;
}(core_1.RequestBuilder));
exports.RoleCompetencyMappingEntityRequestBuilder = RoleCompetencyMappingEntityRequestBuilder;
//# sourceMappingURL=RoleCompetencyMappingEntityRequestBuilder.js.map