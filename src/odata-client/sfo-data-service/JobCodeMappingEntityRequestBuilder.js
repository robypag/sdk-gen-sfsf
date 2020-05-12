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
var JobCodeMappingEntity_1 = require("./JobCodeMappingEntity");
/**
 * Request builder class for operations supported on the [[JobCodeMappingEntity]] entity.
 */
var JobCodeMappingEntityRequestBuilder = /** @class */ (function (_super) {
    __extends(JobCodeMappingEntityRequestBuilder, _super);
    function JobCodeMappingEntityRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `JobCodeMappingEntity` entity based on its keys.
     * @param roleEntityExternalCode Key property. See [[JobCodeMappingEntity.roleEntityExternalCode]].
     * @param externalCode Key property. See [[JobCodeMappingEntity.externalCode]].
     * @returns A request builder for creating requests to retrieve one `JobCodeMappingEntity` entity based on its keys.
     */
    JobCodeMappingEntityRequestBuilder.prototype.getByKey = function (roleEntityExternalCode, externalCode) {
        return new core_1.GetByKeyRequestBuilder(JobCodeMappingEntity_1.JobCodeMappingEntity, {
            RoleEntity_externalCode: roleEntityExternalCode,
            externalCode: externalCode
        });
    };
    /**
     * Returns a request builder for querying all `JobCodeMappingEntity` entities.
     * @returns A request builder for creating requests to retrieve all `JobCodeMappingEntity` entities.
     */
    JobCodeMappingEntityRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(JobCodeMappingEntity_1.JobCodeMappingEntity);
    };
    /**
     * Returns a request builder for creating a `JobCodeMappingEntity` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `JobCodeMappingEntity`.
     */
    JobCodeMappingEntityRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(JobCodeMappingEntity_1.JobCodeMappingEntity, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `JobCodeMappingEntity`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `JobCodeMappingEntity`.
     */
    JobCodeMappingEntityRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(JobCodeMappingEntity_1.JobCodeMappingEntity, entity);
    };
    JobCodeMappingEntityRequestBuilder.prototype.delete = function (roleEntityExternalCodeOrEntity, externalCode) {
        return new core_1.DeleteRequestBuilder(JobCodeMappingEntity_1.JobCodeMappingEntity, roleEntityExternalCodeOrEntity instanceof JobCodeMappingEntity_1.JobCodeMappingEntity ? roleEntityExternalCodeOrEntity : {
            RoleEntity_externalCode: roleEntityExternalCodeOrEntity,
            externalCode: externalCode
        });
    };
    return JobCodeMappingEntityRequestBuilder;
}(core_1.RequestBuilder));
exports.JobCodeMappingEntityRequestBuilder = JobCodeMappingEntityRequestBuilder;
//# sourceMappingURL=JobCodeMappingEntityRequestBuilder.js.map