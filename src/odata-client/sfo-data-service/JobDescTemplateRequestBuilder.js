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
var JobDescTemplate_1 = require("./JobDescTemplate");
/**
 * Request builder class for operations supported on the [[JobDescTemplate]] entity.
 */
var JobDescTemplateRequestBuilder = /** @class */ (function (_super) {
    __extends(JobDescTemplateRequestBuilder, _super);
    function JobDescTemplateRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `JobDescTemplate` entity based on its keys.
     * @param externalCode Key property. See [[JobDescTemplate.externalCode]].
     * @returns A request builder for creating requests to retrieve one `JobDescTemplate` entity based on its keys.
     */
    JobDescTemplateRequestBuilder.prototype.getByKey = function (externalCode) {
        return new core_1.GetByKeyRequestBuilder(JobDescTemplate_1.JobDescTemplate, { externalCode: externalCode });
    };
    /**
     * Returns a request builder for querying all `JobDescTemplate` entities.
     * @returns A request builder for creating requests to retrieve all `JobDescTemplate` entities.
     */
    JobDescTemplateRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(JobDescTemplate_1.JobDescTemplate);
    };
    /**
     * Returns a request builder for creating a `JobDescTemplate` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `JobDescTemplate`.
     */
    JobDescTemplateRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(JobDescTemplate_1.JobDescTemplate, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `JobDescTemplate`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `JobDescTemplate`.
     */
    JobDescTemplateRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(JobDescTemplate_1.JobDescTemplate, entity);
    };
    JobDescTemplateRequestBuilder.prototype.delete = function (externalCodeOrEntity) {
        return new core_1.DeleteRequestBuilder(JobDescTemplate_1.JobDescTemplate, externalCodeOrEntity instanceof JobDescTemplate_1.JobDescTemplate ? externalCodeOrEntity : { externalCode: externalCodeOrEntity });
    };
    return JobDescTemplateRequestBuilder;
}(core_1.RequestBuilder));
exports.JobDescTemplateRequestBuilder = JobDescTemplateRequestBuilder;
//# sourceMappingURL=JobDescTemplateRequestBuilder.js.map