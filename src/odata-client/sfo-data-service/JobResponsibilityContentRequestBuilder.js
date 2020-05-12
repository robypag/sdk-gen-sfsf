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
var JobResponsibilityContent_1 = require("./JobResponsibilityContent");
/**
 * Request builder class for operations supported on the [[JobResponsibilityContent]] entity.
 */
var JobResponsibilityContentRequestBuilder = /** @class */ (function (_super) {
    __extends(JobResponsibilityContentRequestBuilder, _super);
    function JobResponsibilityContentRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `JobResponsibilityContent` entity based on its keys.
     * @param jobProfileExternalCode Key property. See [[JobResponsibilityContent.jobProfileExternalCode]].
     * @param externalCode Key property. See [[JobResponsibilityContent.externalCode]].
     * @returns A request builder for creating requests to retrieve one `JobResponsibilityContent` entity based on its keys.
     */
    JobResponsibilityContentRequestBuilder.prototype.getByKey = function (jobProfileExternalCode, externalCode) {
        return new core_1.GetByKeyRequestBuilder(JobResponsibilityContent_1.JobResponsibilityContent, {
            JobProfile_externalCode: jobProfileExternalCode,
            externalCode: externalCode
        });
    };
    /**
     * Returns a request builder for querying all `JobResponsibilityContent` entities.
     * @returns A request builder for creating requests to retrieve all `JobResponsibilityContent` entities.
     */
    JobResponsibilityContentRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(JobResponsibilityContent_1.JobResponsibilityContent);
    };
    /**
     * Returns a request builder for creating a `JobResponsibilityContent` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `JobResponsibilityContent`.
     */
    JobResponsibilityContentRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(JobResponsibilityContent_1.JobResponsibilityContent, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `JobResponsibilityContent`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `JobResponsibilityContent`.
     */
    JobResponsibilityContentRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(JobResponsibilityContent_1.JobResponsibilityContent, entity);
    };
    JobResponsibilityContentRequestBuilder.prototype.delete = function (jobProfileExternalCodeOrEntity, externalCode) {
        return new core_1.DeleteRequestBuilder(JobResponsibilityContent_1.JobResponsibilityContent, jobProfileExternalCodeOrEntity instanceof JobResponsibilityContent_1.JobResponsibilityContent ? jobProfileExternalCodeOrEntity : {
            JobProfile_externalCode: jobProfileExternalCodeOrEntity,
            externalCode: externalCode
        });
    };
    return JobResponsibilityContentRequestBuilder;
}(core_1.RequestBuilder));
exports.JobResponsibilityContentRequestBuilder = JobResponsibilityContentRequestBuilder;
//# sourceMappingURL=JobResponsibilityContentRequestBuilder.js.map