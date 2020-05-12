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
var JobDescSection_1 = require("./JobDescSection");
/**
 * Request builder class for operations supported on the [[JobDescSection]] entity.
 */
var JobDescSectionRequestBuilder = /** @class */ (function (_super) {
    __extends(JobDescSectionRequestBuilder, _super);
    function JobDescSectionRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `JobDescSection` entity based on its keys.
     * @param jobDescTemplateExternalCode Key property. See [[JobDescSection.jobDescTemplateExternalCode]].
     * @param externalCode Key property. See [[JobDescSection.externalCode]].
     * @returns A request builder for creating requests to retrieve one `JobDescSection` entity based on its keys.
     */
    JobDescSectionRequestBuilder.prototype.getByKey = function (jobDescTemplateExternalCode, externalCode) {
        return new core_1.GetByKeyRequestBuilder(JobDescSection_1.JobDescSection, {
            JobDescTemplate_externalCode: jobDescTemplateExternalCode,
            externalCode: externalCode
        });
    };
    /**
     * Returns a request builder for querying all `JobDescSection` entities.
     * @returns A request builder for creating requests to retrieve all `JobDescSection` entities.
     */
    JobDescSectionRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(JobDescSection_1.JobDescSection);
    };
    /**
     * Returns a request builder for creating a `JobDescSection` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `JobDescSection`.
     */
    JobDescSectionRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(JobDescSection_1.JobDescSection, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `JobDescSection`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `JobDescSection`.
     */
    JobDescSectionRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(JobDescSection_1.JobDescSection, entity);
    };
    JobDescSectionRequestBuilder.prototype.delete = function (jobDescTemplateExternalCodeOrEntity, externalCode) {
        return new core_1.DeleteRequestBuilder(JobDescSection_1.JobDescSection, jobDescTemplateExternalCodeOrEntity instanceof JobDescSection_1.JobDescSection ? jobDescTemplateExternalCodeOrEntity : {
            JobDescTemplate_externalCode: jobDescTemplateExternalCodeOrEntity,
            externalCode: externalCode
        });
    };
    return JobDescSectionRequestBuilder;
}(core_1.RequestBuilder));
exports.JobDescSectionRequestBuilder = JobDescSectionRequestBuilder;
//# sourceMappingURL=JobDescSectionRequestBuilder.js.map