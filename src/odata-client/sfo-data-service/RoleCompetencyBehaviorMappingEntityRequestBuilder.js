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
var RoleCompetencyBehaviorMappingEntity_1 = require("./RoleCompetencyBehaviorMappingEntity");
/**
 * Request builder class for operations supported on the [[RoleCompetencyBehaviorMappingEntity]] entity.
 */
var RoleCompetencyBehaviorMappingEntityRequestBuilder = /** @class */ (function (_super) {
    __extends(RoleCompetencyBehaviorMappingEntityRequestBuilder, _super);
    function RoleCompetencyBehaviorMappingEntityRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `RoleCompetencyBehaviorMappingEntity` entity based on its keys.
     * @param roleEntityExternalCode Key property. See [[RoleCompetencyBehaviorMappingEntity.roleEntityExternalCode]].
     * @param externalCode Key property. See [[RoleCompetencyBehaviorMappingEntity.externalCode]].
     * @returns A request builder for creating requests to retrieve one `RoleCompetencyBehaviorMappingEntity` entity based on its keys.
     */
    RoleCompetencyBehaviorMappingEntityRequestBuilder.prototype.getByKey = function (roleEntityExternalCode, externalCode) {
        return new core_1.GetByKeyRequestBuilder(RoleCompetencyBehaviorMappingEntity_1.RoleCompetencyBehaviorMappingEntity, {
            RoleEntity_externalCode: roleEntityExternalCode,
            externalCode: externalCode
        });
    };
    /**
     * Returns a request builder for querying all `RoleCompetencyBehaviorMappingEntity` entities.
     * @returns A request builder for creating requests to retrieve all `RoleCompetencyBehaviorMappingEntity` entities.
     */
    RoleCompetencyBehaviorMappingEntityRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(RoleCompetencyBehaviorMappingEntity_1.RoleCompetencyBehaviorMappingEntity);
    };
    /**
     * Returns a request builder for creating a `RoleCompetencyBehaviorMappingEntity` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `RoleCompetencyBehaviorMappingEntity`.
     */
    RoleCompetencyBehaviorMappingEntityRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(RoleCompetencyBehaviorMappingEntity_1.RoleCompetencyBehaviorMappingEntity, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `RoleCompetencyBehaviorMappingEntity`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `RoleCompetencyBehaviorMappingEntity`.
     */
    RoleCompetencyBehaviorMappingEntityRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(RoleCompetencyBehaviorMappingEntity_1.RoleCompetencyBehaviorMappingEntity, entity);
    };
    RoleCompetencyBehaviorMappingEntityRequestBuilder.prototype.delete = function (roleEntityExternalCodeOrEntity, externalCode) {
        return new core_1.DeleteRequestBuilder(RoleCompetencyBehaviorMappingEntity_1.RoleCompetencyBehaviorMappingEntity, roleEntityExternalCodeOrEntity instanceof RoleCompetencyBehaviorMappingEntity_1.RoleCompetencyBehaviorMappingEntity ? roleEntityExternalCodeOrEntity : {
            RoleEntity_externalCode: roleEntityExternalCodeOrEntity,
            externalCode: externalCode
        });
    };
    return RoleCompetencyBehaviorMappingEntityRequestBuilder;
}(core_1.RequestBuilder));
exports.RoleCompetencyBehaviorMappingEntityRequestBuilder = RoleCompetencyBehaviorMappingEntityRequestBuilder;
//# sourceMappingURL=RoleCompetencyBehaviorMappingEntityRequestBuilder.js.map