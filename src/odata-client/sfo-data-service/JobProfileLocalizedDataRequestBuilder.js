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
var JobProfileLocalizedData_1 = require("./JobProfileLocalizedData");
/**
 * Request builder class for operations supported on the [[JobProfileLocalizedData]] entity.
 */
var JobProfileLocalizedDataRequestBuilder = /** @class */ (function (_super) {
    __extends(JobProfileLocalizedDataRequestBuilder, _super);
    function JobProfileLocalizedDataRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `JobProfileLocalizedData` entity based on its keys.
     * @param jobProfileExternalCode Key property. See [[JobProfileLocalizedData.jobProfileExternalCode]].
     * @param externalCode Key property. See [[JobProfileLocalizedData.externalCode]].
     * @returns A request builder for creating requests to retrieve one `JobProfileLocalizedData` entity based on its keys.
     */
    JobProfileLocalizedDataRequestBuilder.prototype.getByKey = function (jobProfileExternalCode, externalCode) {
        return new core_1.GetByKeyRequestBuilder(JobProfileLocalizedData_1.JobProfileLocalizedData, {
            JobProfile_externalCode: jobProfileExternalCode,
            externalCode: externalCode
        });
    };
    /**
     * Returns a request builder for querying all `JobProfileLocalizedData` entities.
     * @returns A request builder for creating requests to retrieve all `JobProfileLocalizedData` entities.
     */
    JobProfileLocalizedDataRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(JobProfileLocalizedData_1.JobProfileLocalizedData);
    };
    /**
     * Returns a request builder for creating a `JobProfileLocalizedData` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `JobProfileLocalizedData`.
     */
    JobProfileLocalizedDataRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(JobProfileLocalizedData_1.JobProfileLocalizedData, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `JobProfileLocalizedData`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `JobProfileLocalizedData`.
     */
    JobProfileLocalizedDataRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(JobProfileLocalizedData_1.JobProfileLocalizedData, entity);
    };
    JobProfileLocalizedDataRequestBuilder.prototype.delete = function (jobProfileExternalCodeOrEntity, externalCode) {
        return new core_1.DeleteRequestBuilder(JobProfileLocalizedData_1.JobProfileLocalizedData, jobProfileExternalCodeOrEntity instanceof JobProfileLocalizedData_1.JobProfileLocalizedData ? jobProfileExternalCodeOrEntity : {
            JobProfile_externalCode: jobProfileExternalCodeOrEntity,
            externalCode: externalCode
        });
    };
    return JobProfileLocalizedDataRequestBuilder;
}(core_1.RequestBuilder));
exports.JobProfileLocalizedDataRequestBuilder = JobProfileLocalizedDataRequestBuilder;
//# sourceMappingURL=JobProfileLocalizedDataRequestBuilder.js.map