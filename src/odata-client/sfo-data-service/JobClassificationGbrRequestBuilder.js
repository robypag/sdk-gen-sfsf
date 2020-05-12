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
var JobClassificationGbr_1 = require("./JobClassificationGbr");
/**
 * Request builder class for operations supported on the [[JobClassificationGbr]] entity.
 */
var JobClassificationGbrRequestBuilder = /** @class */ (function (_super) {
    __extends(JobClassificationGbrRequestBuilder, _super);
    function JobClassificationGbrRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `JobClassificationGbr` entity based on its keys.
     * @param jobClassificationCountryCountry Key property. See [[JobClassificationGbr.jobClassificationCountryCountry]].
     * @param jobClassificationEffectiveStartDate Key property. See [[JobClassificationGbr.jobClassificationEffectiveStartDate]].
     * @param jobClassificationExternalCode Key property. See [[JobClassificationGbr.jobClassificationExternalCode]].
     * @param externalCode Key property. See [[JobClassificationGbr.externalCode]].
     * @returns A request builder for creating requests to retrieve one `JobClassificationGbr` entity based on its keys.
     */
    JobClassificationGbrRequestBuilder.prototype.getByKey = function (jobClassificationCountryCountry, jobClassificationEffectiveStartDate, jobClassificationExternalCode, externalCode) {
        return new core_1.GetByKeyRequestBuilder(JobClassificationGbr_1.JobClassificationGbr, {
            JobClassificationCountry_country: jobClassificationCountryCountry,
            JobClassification_effectiveStartDate: jobClassificationEffectiveStartDate,
            JobClassification_externalCode: jobClassificationExternalCode,
            externalCode: externalCode
        });
    };
    /**
     * Returns a request builder for querying all `JobClassificationGbr` entities.
     * @returns A request builder for creating requests to retrieve all `JobClassificationGbr` entities.
     */
    JobClassificationGbrRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(JobClassificationGbr_1.JobClassificationGbr);
    };
    /**
     * Returns a request builder for creating a `JobClassificationGbr` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `JobClassificationGbr`.
     */
    JobClassificationGbrRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(JobClassificationGbr_1.JobClassificationGbr, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `JobClassificationGbr`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `JobClassificationGbr`.
     */
    JobClassificationGbrRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(JobClassificationGbr_1.JobClassificationGbr, entity);
    };
    JobClassificationGbrRequestBuilder.prototype.delete = function (jobClassificationCountryCountryOrEntity, jobClassificationEffectiveStartDate, jobClassificationExternalCode, externalCode) {
        return new core_1.DeleteRequestBuilder(JobClassificationGbr_1.JobClassificationGbr, jobClassificationCountryCountryOrEntity instanceof JobClassificationGbr_1.JobClassificationGbr ? jobClassificationCountryCountryOrEntity : {
            JobClassificationCountry_country: jobClassificationCountryCountryOrEntity,
            JobClassification_effectiveStartDate: jobClassificationEffectiveStartDate,
            JobClassification_externalCode: jobClassificationExternalCode,
            externalCode: externalCode
        });
    };
    return JobClassificationGbrRequestBuilder;
}(core_1.RequestBuilder));
exports.JobClassificationGbrRequestBuilder = JobClassificationGbrRequestBuilder;
//# sourceMappingURL=JobClassificationGbrRequestBuilder.js.map