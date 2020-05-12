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
var JobClassificationAus_1 = require("./JobClassificationAus");
/**
 * Request builder class for operations supported on the [[JobClassificationAus]] entity.
 */
var JobClassificationAusRequestBuilder = /** @class */ (function (_super) {
    __extends(JobClassificationAusRequestBuilder, _super);
    function JobClassificationAusRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `JobClassificationAus` entity based on its keys.
     * @param jobClassificationCountryCountry Key property. See [[JobClassificationAus.jobClassificationCountryCountry]].
     * @param jobClassificationEffectiveStartDate Key property. See [[JobClassificationAus.jobClassificationEffectiveStartDate]].
     * @param jobClassificationExternalCode Key property. See [[JobClassificationAus.jobClassificationExternalCode]].
     * @param externalCode Key property. See [[JobClassificationAus.externalCode]].
     * @returns A request builder for creating requests to retrieve one `JobClassificationAus` entity based on its keys.
     */
    JobClassificationAusRequestBuilder.prototype.getByKey = function (jobClassificationCountryCountry, jobClassificationEffectiveStartDate, jobClassificationExternalCode, externalCode) {
        return new core_1.GetByKeyRequestBuilder(JobClassificationAus_1.JobClassificationAus, {
            JobClassificationCountry_country: jobClassificationCountryCountry,
            JobClassification_effectiveStartDate: jobClassificationEffectiveStartDate,
            JobClassification_externalCode: jobClassificationExternalCode,
            externalCode: externalCode
        });
    };
    /**
     * Returns a request builder for querying all `JobClassificationAus` entities.
     * @returns A request builder for creating requests to retrieve all `JobClassificationAus` entities.
     */
    JobClassificationAusRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(JobClassificationAus_1.JobClassificationAus);
    };
    /**
     * Returns a request builder for creating a `JobClassificationAus` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `JobClassificationAus`.
     */
    JobClassificationAusRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(JobClassificationAus_1.JobClassificationAus, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `JobClassificationAus`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `JobClassificationAus`.
     */
    JobClassificationAusRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(JobClassificationAus_1.JobClassificationAus, entity);
    };
    JobClassificationAusRequestBuilder.prototype.delete = function (jobClassificationCountryCountryOrEntity, jobClassificationEffectiveStartDate, jobClassificationExternalCode, externalCode) {
        return new core_1.DeleteRequestBuilder(JobClassificationAus_1.JobClassificationAus, jobClassificationCountryCountryOrEntity instanceof JobClassificationAus_1.JobClassificationAus ? jobClassificationCountryCountryOrEntity : {
            JobClassificationCountry_country: jobClassificationCountryCountryOrEntity,
            JobClassification_effectiveStartDate: jobClassificationEffectiveStartDate,
            JobClassification_externalCode: jobClassificationExternalCode,
            externalCode: externalCode
        });
    };
    return JobClassificationAusRequestBuilder;
}(core_1.RequestBuilder));
exports.JobClassificationAusRequestBuilder = JobClassificationAusRequestBuilder;
//# sourceMappingURL=JobClassificationAusRequestBuilder.js.map