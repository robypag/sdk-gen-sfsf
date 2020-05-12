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
var CompetencyEntity_1 = require("./CompetencyEntity");
/**
 * Request builder class for operations supported on the [[CompetencyEntity]] entity.
 */
var CompetencyEntityRequestBuilder = /** @class */ (function (_super) {
    __extends(CompetencyEntityRequestBuilder, _super);
    function CompetencyEntityRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `CompetencyEntity` entity based on its keys.
     * @param externalCode Key property. See [[CompetencyEntity.externalCode]].
     * @returns A request builder for creating requests to retrieve one `CompetencyEntity` entity based on its keys.
     */
    CompetencyEntityRequestBuilder.prototype.getByKey = function (externalCode) {
        return new core_1.GetByKeyRequestBuilder(CompetencyEntity_1.CompetencyEntity, { externalCode: externalCode });
    };
    /**
     * Returns a request builder for querying all `CompetencyEntity` entities.
     * @returns A request builder for creating requests to retrieve all `CompetencyEntity` entities.
     */
    CompetencyEntityRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(CompetencyEntity_1.CompetencyEntity);
    };
    /**
     * Returns a request builder for creating a `CompetencyEntity` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `CompetencyEntity`.
     */
    CompetencyEntityRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(CompetencyEntity_1.CompetencyEntity, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `CompetencyEntity`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `CompetencyEntity`.
     */
    CompetencyEntityRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(CompetencyEntity_1.CompetencyEntity, entity);
    };
    CompetencyEntityRequestBuilder.prototype.delete = function (externalCodeOrEntity) {
        return new core_1.DeleteRequestBuilder(CompetencyEntity_1.CompetencyEntity, externalCodeOrEntity instanceof CompetencyEntity_1.CompetencyEntity ? externalCodeOrEntity : { externalCode: externalCodeOrEntity });
    };
    return CompetencyEntityRequestBuilder;
}(core_1.RequestBuilder));
exports.CompetencyEntityRequestBuilder = CompetencyEntityRequestBuilder;
//# sourceMappingURL=CompetencyEntityRequestBuilder.js.map