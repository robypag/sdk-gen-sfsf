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
var JobClassificationFra_1 = require("./JobClassificationFra");
/**
 * Request builder class for operations supported on the [[JobClassificationFra]] entity.
 */
var JobClassificationFraRequestBuilder = /** @class */ (function (_super) {
    __extends(JobClassificationFraRequestBuilder, _super);
    function JobClassificationFraRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `JobClassificationFra` entity based on its keys.
     * @param jobClassificationCountryCountry Key property. See [[JobClassificationFra.jobClassificationCountryCountry]].
     * @param jobClassificationEffectiveStartDate Key property. See [[JobClassificationFra.jobClassificationEffectiveStartDate]].
     * @param jobClassificationExternalCode Key property. See [[JobClassificationFra.jobClassificationExternalCode]].
     * @param externalCode Key property. See [[JobClassificationFra.externalCode]].
     * @returns A request builder for creating requests to retrieve one `JobClassificationFra` entity based on its keys.
     */
    JobClassificationFraRequestBuilder.prototype.getByKey = function (jobClassificationCountryCountry, jobClassificationEffectiveStartDate, jobClassificationExternalCode, externalCode) {
        return new core_1.GetByKeyRequestBuilder(JobClassificationFra_1.JobClassificationFra, {
            JobClassificationCountry_country: jobClassificationCountryCountry,
            JobClassification_effectiveStartDate: jobClassificationEffectiveStartDate,
            JobClassification_externalCode: jobClassificationExternalCode,
            externalCode: externalCode
        });
    };
    /**
     * Returns a request builder for querying all `JobClassificationFra` entities.
     * @returns A request builder for creating requests to retrieve all `JobClassificationFra` entities.
     */
    JobClassificationFraRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(JobClassificationFra_1.JobClassificationFra);
    };
    /**
     * Returns a request builder for creating a `JobClassificationFra` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `JobClassificationFra`.
     */
    JobClassificationFraRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(JobClassificationFra_1.JobClassificationFra, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `JobClassificationFra`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `JobClassificationFra`.
     */
    JobClassificationFraRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(JobClassificationFra_1.JobClassificationFra, entity);
    };
    JobClassificationFraRequestBuilder.prototype.delete = function (jobClassificationCountryCountryOrEntity, jobClassificationEffectiveStartDate, jobClassificationExternalCode, externalCode) {
        return new core_1.DeleteRequestBuilder(JobClassificationFra_1.JobClassificationFra, jobClassificationCountryCountryOrEntity instanceof JobClassificationFra_1.JobClassificationFra ? jobClassificationCountryCountryOrEntity : {
            JobClassificationCountry_country: jobClassificationCountryCountryOrEntity,
            JobClassification_effectiveStartDate: jobClassificationEffectiveStartDate,
            JobClassification_externalCode: jobClassificationExternalCode,
            externalCode: externalCode
        });
    };
    return JobClassificationFraRequestBuilder;
}(core_1.RequestBuilder));
exports.JobClassificationFraRequestBuilder = JobClassificationFraRequestBuilder;
//# sourceMappingURL=JobClassificationFraRequestBuilder.js.map