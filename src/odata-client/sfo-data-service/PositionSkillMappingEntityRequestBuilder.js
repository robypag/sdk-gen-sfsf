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
var PositionSkillMappingEntity_1 = require("./PositionSkillMappingEntity");
/**
 * Request builder class for operations supported on the [[PositionSkillMappingEntity]] entity.
 */
var PositionSkillMappingEntityRequestBuilder = /** @class */ (function (_super) {
    __extends(PositionSkillMappingEntityRequestBuilder, _super);
    function PositionSkillMappingEntityRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `PositionSkillMappingEntity` entity based on its keys.
     * @param positionEntityExternalCode Key property. See [[PositionSkillMappingEntity.positionEntityExternalCode]].
     * @param externalCode Key property. See [[PositionSkillMappingEntity.externalCode]].
     * @returns A request builder for creating requests to retrieve one `PositionSkillMappingEntity` entity based on its keys.
     */
    PositionSkillMappingEntityRequestBuilder.prototype.getByKey = function (positionEntityExternalCode, externalCode) {
        return new core_1.GetByKeyRequestBuilder(PositionSkillMappingEntity_1.PositionSkillMappingEntity, {
            PositionEntity_externalCode: positionEntityExternalCode,
            externalCode: externalCode
        });
    };
    /**
     * Returns a request builder for querying all `PositionSkillMappingEntity` entities.
     * @returns A request builder for creating requests to retrieve all `PositionSkillMappingEntity` entities.
     */
    PositionSkillMappingEntityRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(PositionSkillMappingEntity_1.PositionSkillMappingEntity);
    };
    /**
     * Returns a request builder for creating a `PositionSkillMappingEntity` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PositionSkillMappingEntity`.
     */
    PositionSkillMappingEntityRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(PositionSkillMappingEntity_1.PositionSkillMappingEntity, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `PositionSkillMappingEntity`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PositionSkillMappingEntity`.
     */
    PositionSkillMappingEntityRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(PositionSkillMappingEntity_1.PositionSkillMappingEntity, entity);
    };
    PositionSkillMappingEntityRequestBuilder.prototype.delete = function (positionEntityExternalCodeOrEntity, externalCode) {
        return new core_1.DeleteRequestBuilder(PositionSkillMappingEntity_1.PositionSkillMappingEntity, positionEntityExternalCodeOrEntity instanceof PositionSkillMappingEntity_1.PositionSkillMappingEntity ? positionEntityExternalCodeOrEntity : {
            PositionEntity_externalCode: positionEntityExternalCodeOrEntity,
            externalCode: externalCode
        });
    };
    return PositionSkillMappingEntityRequestBuilder;
}(core_1.RequestBuilder));
exports.PositionSkillMappingEntityRequestBuilder = PositionSkillMappingEntityRequestBuilder;
//# sourceMappingURL=PositionSkillMappingEntityRequestBuilder.js.map