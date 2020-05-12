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
var RelevantIndustryEntity_1 = require("./RelevantIndustryEntity");
/**
 * Request builder class for operations supported on the [[RelevantIndustryEntity]] entity.
 */
var RelevantIndustryEntityRequestBuilder = /** @class */ (function (_super) {
    __extends(RelevantIndustryEntityRequestBuilder, _super);
    function RelevantIndustryEntityRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `RelevantIndustryEntity` entity based on its keys.
     * @param externalCode Key property. See [[RelevantIndustryEntity.externalCode]].
     * @returns A request builder for creating requests to retrieve one `RelevantIndustryEntity` entity based on its keys.
     */
    RelevantIndustryEntityRequestBuilder.prototype.getByKey = function (externalCode) {
        return new core_1.GetByKeyRequestBuilder(RelevantIndustryEntity_1.RelevantIndustryEntity, { externalCode: externalCode });
    };
    /**
     * Returns a request builder for querying all `RelevantIndustryEntity` entities.
     * @returns A request builder for creating requests to retrieve all `RelevantIndustryEntity` entities.
     */
    RelevantIndustryEntityRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(RelevantIndustryEntity_1.RelevantIndustryEntity);
    };
    /**
     * Returns a request builder for creating a `RelevantIndustryEntity` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `RelevantIndustryEntity`.
     */
    RelevantIndustryEntityRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(RelevantIndustryEntity_1.RelevantIndustryEntity, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `RelevantIndustryEntity`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `RelevantIndustryEntity`.
     */
    RelevantIndustryEntityRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(RelevantIndustryEntity_1.RelevantIndustryEntity, entity);
    };
    RelevantIndustryEntityRequestBuilder.prototype.delete = function (externalCodeOrEntity) {
        return new core_1.DeleteRequestBuilder(RelevantIndustryEntity_1.RelevantIndustryEntity, externalCodeOrEntity instanceof RelevantIndustryEntity_1.RelevantIndustryEntity ? externalCodeOrEntity : { externalCode: externalCodeOrEntity });
    };
    return RelevantIndustryEntityRequestBuilder;
}(core_1.RequestBuilder));
exports.RelevantIndustryEntityRequestBuilder = RelevantIndustryEntityRequestBuilder;
//# sourceMappingURL=RelevantIndustryEntityRequestBuilder.js.map