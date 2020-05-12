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
var JobClassificationCan_1 = require("./JobClassificationCan");
/**
 * Request builder class for operations supported on the [[JobClassificationCan]] entity.
 */
var JobClassificationCanRequestBuilder = /** @class */ (function (_super) {
    __extends(JobClassificationCanRequestBuilder, _super);
    function JobClassificationCanRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `JobClassificationCan` entity based on its keys.
     * @param jobClassificationCountryCountry Key property. See [[JobClassificationCan.jobClassificationCountryCountry]].
     * @param jobClassificationEffectiveStartDate Key property. See [[JobClassificationCan.jobClassificationEffectiveStartDate]].
     * @param jobClassificationExternalCode Key property. See [[JobClassificationCan.jobClassificationExternalCode]].
     * @param externalCode Key property. See [[JobClassificationCan.externalCode]].
     * @returns A request builder for creating requests to retrieve one `JobClassificationCan` entity based on its keys.
     */
    JobClassificationCanRequestBuilder.prototype.getByKey = function (jobClassificationCountryCountry, jobClassificationEffectiveStartDate, jobClassificationExternalCode, externalCode) {
        return new core_1.GetByKeyRequestBuilder(JobClassificationCan_1.JobClassificationCan, {
            JobClassificationCountry_country: jobClassificationCountryCountry,
            JobClassification_effectiveStartDate: jobClassificationEffectiveStartDate,
            JobClassification_externalCode: jobClassificationExternalCode,
            externalCode: externalCode
        });
    };
    /**
     * Returns a request builder for querying all `JobClassificationCan` entities.
     * @returns A request builder for creating requests to retrieve all `JobClassificationCan` entities.
     */
    JobClassificationCanRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(JobClassificationCan_1.JobClassificationCan);
    };
    /**
     * Returns a request builder for creating a `JobClassificationCan` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `JobClassificationCan`.
     */
    JobClassificationCanRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(JobClassificationCan_1.JobClassificationCan, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `JobClassificationCan`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `JobClassificationCan`.
     */
    JobClassificationCanRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(JobClassificationCan_1.JobClassificationCan, entity);
    };
    JobClassificationCanRequestBuilder.prototype.delete = function (jobClassificationCountryCountryOrEntity, jobClassificationEffectiveStartDate, jobClassificationExternalCode, externalCode) {
        return new core_1.DeleteRequestBuilder(JobClassificationCan_1.JobClassificationCan, jobClassificationCountryCountryOrEntity instanceof JobClassificationCan_1.JobClassificationCan ? jobClassificationCountryCountryOrEntity : {
            JobClassificationCountry_country: jobClassificationCountryCountryOrEntity,
            JobClassification_effectiveStartDate: jobClassificationEffectiveStartDate,
            JobClassification_externalCode: jobClassificationExternalCode,
            externalCode: externalCode
        });
    };
    return JobClassificationCanRequestBuilder;
}(core_1.RequestBuilder));
exports.JobClassificationCanRequestBuilder = JobClassificationCanRequestBuilder;
//# sourceMappingURL=JobClassificationCanRequestBuilder.js.map