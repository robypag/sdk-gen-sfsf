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
var JobClassificationUsa_1 = require("./JobClassificationUsa");
/**
 * Request builder class for operations supported on the [[JobClassificationUsa]] entity.
 */
var JobClassificationUsaRequestBuilder = /** @class */ (function (_super) {
    __extends(JobClassificationUsaRequestBuilder, _super);
    function JobClassificationUsaRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `JobClassificationUsa` entity based on its keys.
     * @param jobClassificationCountryCountry Key property. See [[JobClassificationUsa.jobClassificationCountryCountry]].
     * @param jobClassificationEffectiveStartDate Key property. See [[JobClassificationUsa.jobClassificationEffectiveStartDate]].
     * @param jobClassificationExternalCode Key property. See [[JobClassificationUsa.jobClassificationExternalCode]].
     * @param externalCode Key property. See [[JobClassificationUsa.externalCode]].
     * @returns A request builder for creating requests to retrieve one `JobClassificationUsa` entity based on its keys.
     */
    JobClassificationUsaRequestBuilder.prototype.getByKey = function (jobClassificationCountryCountry, jobClassificationEffectiveStartDate, jobClassificationExternalCode, externalCode) {
        return new core_1.GetByKeyRequestBuilder(JobClassificationUsa_1.JobClassificationUsa, {
            JobClassificationCountry_country: jobClassificationCountryCountry,
            JobClassification_effectiveStartDate: jobClassificationEffectiveStartDate,
            JobClassification_externalCode: jobClassificationExternalCode,
            externalCode: externalCode
        });
    };
    /**
     * Returns a request builder for querying all `JobClassificationUsa` entities.
     * @returns A request builder for creating requests to retrieve all `JobClassificationUsa` entities.
     */
    JobClassificationUsaRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(JobClassificationUsa_1.JobClassificationUsa);
    };
    /**
     * Returns a request builder for creating a `JobClassificationUsa` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `JobClassificationUsa`.
     */
    JobClassificationUsaRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(JobClassificationUsa_1.JobClassificationUsa, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `JobClassificationUsa`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `JobClassificationUsa`.
     */
    JobClassificationUsaRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(JobClassificationUsa_1.JobClassificationUsa, entity);
    };
    JobClassificationUsaRequestBuilder.prototype.delete = function (jobClassificationCountryCountryOrEntity, jobClassificationEffectiveStartDate, jobClassificationExternalCode, externalCode) {
        return new core_1.DeleteRequestBuilder(JobClassificationUsa_1.JobClassificationUsa, jobClassificationCountryCountryOrEntity instanceof JobClassificationUsa_1.JobClassificationUsa ? jobClassificationCountryCountryOrEntity : {
            JobClassificationCountry_country: jobClassificationCountryCountryOrEntity,
            JobClassification_effectiveStartDate: jobClassificationEffectiveStartDate,
            JobClassification_externalCode: jobClassificationExternalCode,
            externalCode: externalCode
        });
    };
    return JobClassificationUsaRequestBuilder;
}(core_1.RequestBuilder));
exports.JobClassificationUsaRequestBuilder = JobClassificationUsaRequestBuilder;
//# sourceMappingURL=JobClassificationUsaRequestBuilder.js.map