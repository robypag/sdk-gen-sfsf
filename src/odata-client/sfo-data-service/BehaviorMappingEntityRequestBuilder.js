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
var BehaviorMappingEntity_1 = require("./BehaviorMappingEntity");
/**
 * Request builder class for operations supported on the [[BehaviorMappingEntity]] entity.
 */
var BehaviorMappingEntityRequestBuilder = /** @class */ (function (_super) {
    __extends(BehaviorMappingEntityRequestBuilder, _super);
    function BehaviorMappingEntityRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `BehaviorMappingEntity` entity based on its keys.
     * @param competencyEntityExternalCode Key property. See [[BehaviorMappingEntity.competencyEntityExternalCode]].
     * @param externalCode Key property. See [[BehaviorMappingEntity.externalCode]].
     * @returns A request builder for creating requests to retrieve one `BehaviorMappingEntity` entity based on its keys.
     */
    BehaviorMappingEntityRequestBuilder.prototype.getByKey = function (competencyEntityExternalCode, externalCode) {
        return new core_1.GetByKeyRequestBuilder(BehaviorMappingEntity_1.BehaviorMappingEntity, {
            CompetencyEntity_externalCode: competencyEntityExternalCode,
            externalCode: externalCode
        });
    };
    /**
     * Returns a request builder for querying all `BehaviorMappingEntity` entities.
     * @returns A request builder for creating requests to retrieve all `BehaviorMappingEntity` entities.
     */
    BehaviorMappingEntityRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(BehaviorMappingEntity_1.BehaviorMappingEntity);
    };
    /**
     * Returns a request builder for creating a `BehaviorMappingEntity` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `BehaviorMappingEntity`.
     */
    BehaviorMappingEntityRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(BehaviorMappingEntity_1.BehaviorMappingEntity, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `BehaviorMappingEntity`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BehaviorMappingEntity`.
     */
    BehaviorMappingEntityRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(BehaviorMappingEntity_1.BehaviorMappingEntity, entity);
    };
    BehaviorMappingEntityRequestBuilder.prototype.delete = function (competencyEntityExternalCodeOrEntity, externalCode) {
        return new core_1.DeleteRequestBuilder(BehaviorMappingEntity_1.BehaviorMappingEntity, competencyEntityExternalCodeOrEntity instanceof BehaviorMappingEntity_1.BehaviorMappingEntity ? competencyEntityExternalCodeOrEntity : {
            CompetencyEntity_externalCode: competencyEntityExternalCodeOrEntity,
            externalCode: externalCode
        });
    };
    return BehaviorMappingEntityRequestBuilder;
}(core_1.RequestBuilder));
exports.BehaviorMappingEntityRequestBuilder = BehaviorMappingEntityRequestBuilder;
//# sourceMappingURL=BehaviorMappingEntityRequestBuilder.js.map