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
var JobClassificationCountry_1 = require("./JobClassificationCountry");
/**
 * Request builder class for operations supported on the [[JobClassificationCountry]] entity.
 */
var JobClassificationCountryRequestBuilder = /** @class */ (function (_super) {
    __extends(JobClassificationCountryRequestBuilder, _super);
    function JobClassificationCountryRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `JobClassificationCountry` entity based on its keys.
     * @param jobClassificationEffectiveStartDate Key property. See [[JobClassificationCountry.jobClassificationEffectiveStartDate]].
     * @param jobClassificationExternalCode Key property. See [[JobClassificationCountry.jobClassificationExternalCode]].
     * @param country Key property. See [[JobClassificationCountry.country]].
     * @returns A request builder for creating requests to retrieve one `JobClassificationCountry` entity based on its keys.
     */
    JobClassificationCountryRequestBuilder.prototype.getByKey = function (jobClassificationEffectiveStartDate, jobClassificationExternalCode, country) {
        return new core_1.GetByKeyRequestBuilder(JobClassificationCountry_1.JobClassificationCountry, {
            JobClassification_effectiveStartDate: jobClassificationEffectiveStartDate,
            JobClassification_externalCode: jobClassificationExternalCode,
            country: country
        });
    };
    /**
     * Returns a request builder for querying all `JobClassificationCountry` entities.
     * @returns A request builder for creating requests to retrieve all `JobClassificationCountry` entities.
     */
    JobClassificationCountryRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(JobClassificationCountry_1.JobClassificationCountry);
    };
    /**
     * Returns a request builder for creating a `JobClassificationCountry` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `JobClassificationCountry`.
     */
    JobClassificationCountryRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(JobClassificationCountry_1.JobClassificationCountry, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `JobClassificationCountry`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `JobClassificationCountry`.
     */
    JobClassificationCountryRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(JobClassificationCountry_1.JobClassificationCountry, entity);
    };
    JobClassificationCountryRequestBuilder.prototype.delete = function (jobClassificationEffectiveStartDateOrEntity, jobClassificationExternalCode, country) {
        return new core_1.DeleteRequestBuilder(JobClassificationCountry_1.JobClassificationCountry, jobClassificationEffectiveStartDateOrEntity instanceof JobClassificationCountry_1.JobClassificationCountry ? jobClassificationEffectiveStartDateOrEntity : {
            JobClassification_effectiveStartDate: jobClassificationEffectiveStartDateOrEntity,
            JobClassification_externalCode: jobClassificationExternalCode,
            country: country
        });
    };
    return JobClassificationCountryRequestBuilder;
}(core_1.RequestBuilder));
exports.JobClassificationCountryRequestBuilder = JobClassificationCountryRequestBuilder;
//# sourceMappingURL=JobClassificationCountryRequestBuilder.js.map