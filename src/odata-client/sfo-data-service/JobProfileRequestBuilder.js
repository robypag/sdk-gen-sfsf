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
var JobProfile_1 = require("./JobProfile");
/**
 * Request builder class for operations supported on the [[JobProfile]] entity.
 */
var JobProfileRequestBuilder = /** @class */ (function (_super) {
    __extends(JobProfileRequestBuilder, _super);
    function JobProfileRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `JobProfile` entity based on its keys.
     * @param externalCode Key property. See [[JobProfile.externalCode]].
     * @returns A request builder for creating requests to retrieve one `JobProfile` entity based on its keys.
     */
    JobProfileRequestBuilder.prototype.getByKey = function (externalCode) {
        return new core_1.GetByKeyRequestBuilder(JobProfile_1.JobProfile, { externalCode: externalCode });
    };
    /**
     * Returns a request builder for querying all `JobProfile` entities.
     * @returns A request builder for creating requests to retrieve all `JobProfile` entities.
     */
    JobProfileRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(JobProfile_1.JobProfile);
    };
    /**
     * Returns a request builder for creating a `JobProfile` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `JobProfile`.
     */
    JobProfileRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(JobProfile_1.JobProfile, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `JobProfile`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `JobProfile`.
     */
    JobProfileRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(JobProfile_1.JobProfile, entity);
    };
    JobProfileRequestBuilder.prototype.delete = function (externalCodeOrEntity) {
        return new core_1.DeleteRequestBuilder(JobProfile_1.JobProfile, externalCodeOrEntity instanceof JobProfile_1.JobProfile ? externalCodeOrEntity : { externalCode: externalCodeOrEntity });
    };
    return JobProfileRequestBuilder;
}(core_1.RequestBuilder));
exports.JobProfileRequestBuilder = JobProfileRequestBuilder;
//# sourceMappingURL=JobProfileRequestBuilder.js.map