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
var core_1 = require("@sap-cloud-sdk/core");
var JobClassificationZaf_1 = require("./JobClassificationZaf");
/**
 * Request builder class for operations supported on the [[JobClassificationZaf]] entity.
 */
var JobClassificationZafRequestBuilder = /** @class */ (function (_super) {
    __extends(JobClassificationZafRequestBuilder, _super);
    function JobClassificationZafRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `JobClassificationZaf` entity based on its keys.
     * @param jobClassificationCountryCountry Key property. See [[JobClassificationZaf.jobClassificationCountryCountry]].
     * @param jobClassificationEffectiveStartDate Key property. See [[JobClassificationZaf.jobClassificationEffectiveStartDate]].
     * @param jobClassificationExternalCode Key property. See [[JobClassificationZaf.jobClassificationExternalCode]].
     * @param externalCode Key property. See [[JobClassificationZaf.externalCode]].
     * @returns A request builder for creating requests to retrieve one `JobClassificationZaf` entity based on its keys.
     */
    JobClassificationZafRequestBuilder.prototype.getByKey = function (jobClassificationCountryCountry, jobClassificationEffectiveStartDate, jobClassificationExternalCode, externalCode) {
        return new core_1.GetByKeyRequestBuilder(JobClassificationZaf_1.JobClassificationZaf, {
            JobClassificationCountry_country: jobClassificationCountryCountry,
            JobClassification_effectiveStartDate: jobClassificationEffectiveStartDate,
            JobClassification_externalCode: jobClassificationExternalCode,
            externalCode: externalCode
        });
    };
    /**
     * Returns a request builder for querying all `JobClassificationZaf` entities.
     * @returns A request builder for creating requests to retrieve all `JobClassificationZaf` entities.
     */
    JobClassificationZafRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(JobClassificationZaf_1.JobClassificationZaf);
    };
    /**
     * Returns a request builder for creating a `JobClassificationZaf` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `JobClassificationZaf`.
     */
    JobClassificationZafRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(JobClassificationZaf_1.JobClassificationZaf, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `JobClassificationZaf`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `JobClassificationZaf`.
     */
    JobClassificationZafRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(JobClassificationZaf_1.JobClassificationZaf, entity);
    };
    JobClassificationZafRequestBuilder.prototype.delete = function (jobClassificationCountryCountryOrEntity, jobClassificationEffectiveStartDate, jobClassificationExternalCode, externalCode) {
        return new core_1.DeleteRequestBuilder(JobClassificationZaf_1.JobClassificationZaf, jobClassificationCountryCountryOrEntity instanceof JobClassificationZaf_1.JobClassificationZaf ? jobClassificationCountryCountryOrEntity : {
            JobClassificationCountry_country: jobClassificationCountryCountryOrEntity,
            JobClassification_effectiveStartDate: jobClassificationEffectiveStartDate,
            JobClassification_externalCode: jobClassificationExternalCode,
            externalCode: externalCode
        });
    };
    return JobClassificationZafRequestBuilder;
}(core_1.RequestBuilder));
exports.JobClassificationZafRequestBuilder = JobClassificationZafRequestBuilder;
//# sourceMappingURL=JobClassificationZafRequestBuilder.js.map