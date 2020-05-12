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
var JobResponsibilityEntity_1 = require("./JobResponsibilityEntity");
/**
 * Request builder class for operations supported on the [[JobResponsibilityEntity]] entity.
 */
var JobResponsibilityEntityRequestBuilder = /** @class */ (function (_super) {
    __extends(JobResponsibilityEntityRequestBuilder, _super);
    function JobResponsibilityEntityRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `JobResponsibilityEntity` entity based on its keys.
     * @param externalCode Key property. See [[JobResponsibilityEntity.externalCode]].
     * @returns A request builder for creating requests to retrieve one `JobResponsibilityEntity` entity based on its keys.
     */
    JobResponsibilityEntityRequestBuilder.prototype.getByKey = function (externalCode) {
        return new core_1.GetByKeyRequestBuilder(JobResponsibilityEntity_1.JobResponsibilityEntity, { externalCode: externalCode });
    };
    /**
     * Returns a request builder for querying all `JobResponsibilityEntity` entities.
     * @returns A request builder for creating requests to retrieve all `JobResponsibilityEntity` entities.
     */
    JobResponsibilityEntityRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(JobResponsibilityEntity_1.JobResponsibilityEntity);
    };
    /**
     * Returns a request builder for creating a `JobResponsibilityEntity` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `JobResponsibilityEntity`.
     */
    JobResponsibilityEntityRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(JobResponsibilityEntity_1.JobResponsibilityEntity, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `JobResponsibilityEntity`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `JobResponsibilityEntity`.
     */
    JobResponsibilityEntityRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(JobResponsibilityEntity_1.JobResponsibilityEntity, entity);
    };
    JobResponsibilityEntityRequestBuilder.prototype.delete = function (externalCodeOrEntity) {
        return new core_1.DeleteRequestBuilder(JobResponsibilityEntity_1.JobResponsibilityEntity, externalCodeOrEntity instanceof JobResponsibilityEntity_1.JobResponsibilityEntity ? externalCodeOrEntity : { externalCode: externalCodeOrEntity });
    };
    return JobResponsibilityEntityRequestBuilder;
}(core_1.RequestBuilder));
exports.JobResponsibilityEntityRequestBuilder = JobResponsibilityEntityRequestBuilder;
//# sourceMappingURL=JobResponsibilityEntityRequestBuilder.js.map