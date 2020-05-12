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
var PositionCompetencyMappingEntity_1 = require("./PositionCompetencyMappingEntity");
/**
 * Request builder class for operations supported on the [[PositionCompetencyMappingEntity]] entity.
 */
var PositionCompetencyMappingEntityRequestBuilder = /** @class */ (function (_super) {
    __extends(PositionCompetencyMappingEntityRequestBuilder, _super);
    function PositionCompetencyMappingEntityRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `PositionCompetencyMappingEntity` entity based on its keys.
     * @param positionEntityExternalCode Key property. See [[PositionCompetencyMappingEntity.positionEntityExternalCode]].
     * @param externalCode Key property. See [[PositionCompetencyMappingEntity.externalCode]].
     * @returns A request builder for creating requests to retrieve one `PositionCompetencyMappingEntity` entity based on its keys.
     */
    PositionCompetencyMappingEntityRequestBuilder.prototype.getByKey = function (positionEntityExternalCode, externalCode) {
        return new core_1.GetByKeyRequestBuilder(PositionCompetencyMappingEntity_1.PositionCompetencyMappingEntity, {
            PositionEntity_externalCode: positionEntityExternalCode,
            externalCode: externalCode
        });
    };
    /**
     * Returns a request builder for querying all `PositionCompetencyMappingEntity` entities.
     * @returns A request builder for creating requests to retrieve all `PositionCompetencyMappingEntity` entities.
     */
    PositionCompetencyMappingEntityRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(PositionCompetencyMappingEntity_1.PositionCompetencyMappingEntity);
    };
    /**
     * Returns a request builder for creating a `PositionCompetencyMappingEntity` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PositionCompetencyMappingEntity`.
     */
    PositionCompetencyMappingEntityRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(PositionCompetencyMappingEntity_1.PositionCompetencyMappingEntity, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `PositionCompetencyMappingEntity`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PositionCompetencyMappingEntity`.
     */
    PositionCompetencyMappingEntityRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(PositionCompetencyMappingEntity_1.PositionCompetencyMappingEntity, entity);
    };
    PositionCompetencyMappingEntityRequestBuilder.prototype.delete = function (positionEntityExternalCodeOrEntity, externalCode) {
        return new core_1.DeleteRequestBuilder(PositionCompetencyMappingEntity_1.PositionCompetencyMappingEntity, positionEntityExternalCodeOrEntity instanceof PositionCompetencyMappingEntity_1.PositionCompetencyMappingEntity ? positionEntityExternalCodeOrEntity : {
            PositionEntity_externalCode: positionEntityExternalCodeOrEntity,
            externalCode: externalCode
        });
    };
    return PositionCompetencyMappingEntityRequestBuilder;
}(core_1.RequestBuilder));
exports.PositionCompetencyMappingEntityRequestBuilder = PositionCompetencyMappingEntityRequestBuilder;
//# sourceMappingURL=PositionCompetencyMappingEntityRequestBuilder.js.map