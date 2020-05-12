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
var RoleTalentPoolMappingEntity_1 = require("./RoleTalentPoolMappingEntity");
/**
 * Request builder class for operations supported on the [[RoleTalentPoolMappingEntity]] entity.
 */
var RoleTalentPoolMappingEntityRequestBuilder = /** @class */ (function (_super) {
    __extends(RoleTalentPoolMappingEntityRequestBuilder, _super);
    function RoleTalentPoolMappingEntityRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `RoleTalentPoolMappingEntity` entity based on its keys.
     * @param roleEntityExternalCode Key property. See [[RoleTalentPoolMappingEntity.roleEntityExternalCode]].
     * @param externalCode Key property. See [[RoleTalentPoolMappingEntity.externalCode]].
     * @returns A request builder for creating requests to retrieve one `RoleTalentPoolMappingEntity` entity based on its keys.
     */
    RoleTalentPoolMappingEntityRequestBuilder.prototype.getByKey = function (roleEntityExternalCode, externalCode) {
        return new core_1.GetByKeyRequestBuilder(RoleTalentPoolMappingEntity_1.RoleTalentPoolMappingEntity, {
            RoleEntity_externalCode: roleEntityExternalCode,
            externalCode: externalCode
        });
    };
    /**
     * Returns a request builder for querying all `RoleTalentPoolMappingEntity` entities.
     * @returns A request builder for creating requests to retrieve all `RoleTalentPoolMappingEntity` entities.
     */
    RoleTalentPoolMappingEntityRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(RoleTalentPoolMappingEntity_1.RoleTalentPoolMappingEntity);
    };
    /**
     * Returns a request builder for creating a `RoleTalentPoolMappingEntity` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `RoleTalentPoolMappingEntity`.
     */
    RoleTalentPoolMappingEntityRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(RoleTalentPoolMappingEntity_1.RoleTalentPoolMappingEntity, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `RoleTalentPoolMappingEntity`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `RoleTalentPoolMappingEntity`.
     */
    RoleTalentPoolMappingEntityRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(RoleTalentPoolMappingEntity_1.RoleTalentPoolMappingEntity, entity);
    };
    RoleTalentPoolMappingEntityRequestBuilder.prototype.delete = function (roleEntityExternalCodeOrEntity, externalCode) {
        return new core_1.DeleteRequestBuilder(RoleTalentPoolMappingEntity_1.RoleTalentPoolMappingEntity, roleEntityExternalCodeOrEntity instanceof RoleTalentPoolMappingEntity_1.RoleTalentPoolMappingEntity ? roleEntityExternalCodeOrEntity : {
            RoleEntity_externalCode: roleEntityExternalCodeOrEntity,
            externalCode: externalCode
        });
    };
    return RoleTalentPoolMappingEntityRequestBuilder;
}(core_1.RequestBuilder));
exports.RoleTalentPoolMappingEntityRequestBuilder = RoleTalentPoolMappingEntityRequestBuilder;
//# sourceMappingURL=RoleTalentPoolMappingEntityRequestBuilder.js.map