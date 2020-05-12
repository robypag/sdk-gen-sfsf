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
var JobClassificationBra_1 = require("./JobClassificationBra");
/**
 * Request builder class for operations supported on the [[JobClassificationBra]] entity.
 */
var JobClassificationBraRequestBuilder = /** @class */ (function (_super) {
    __extends(JobClassificationBraRequestBuilder, _super);
    function JobClassificationBraRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `JobClassificationBra` entity based on its keys.
     * @param jobClassificationCountryCountry Key property. See [[JobClassificationBra.jobClassificationCountryCountry]].
     * @param jobClassificationEffectiveStartDate Key property. See [[JobClassificationBra.jobClassificationEffectiveStartDate]].
     * @param jobClassificationExternalCode Key property. See [[JobClassificationBra.jobClassificationExternalCode]].
     * @param externalCode Key property. See [[JobClassificationBra.externalCode]].
     * @returns A request builder for creating requests to retrieve one `JobClassificationBra` entity based on its keys.
     */
    JobClassificationBraRequestBuilder.prototype.getByKey = function (jobClassificationCountryCountry, jobClassificationEffectiveStartDate, jobClassificationExternalCode, externalCode) {
        return new core_1.GetByKeyRequestBuilder(JobClassificationBra_1.JobClassificationBra, {
            JobClassificationCountry_country: jobClassificationCountryCountry,
            JobClassification_effectiveStartDate: jobClassificationEffectiveStartDate,
            JobClassification_externalCode: jobClassificationExternalCode,
            externalCode: externalCode
        });
    };
    /**
     * Returns a request builder for querying all `JobClassificationBra` entities.
     * @returns A request builder for creating requests to retrieve all `JobClassificationBra` entities.
     */
    JobClassificationBraRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(JobClassificationBra_1.JobClassificationBra);
    };
    /**
     * Returns a request builder for creating a `JobClassificationBra` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `JobClassificationBra`.
     */
    JobClassificationBraRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(JobClassificationBra_1.JobClassificationBra, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `JobClassificationBra`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `JobClassificationBra`.
     */
    JobClassificationBraRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(JobClassificationBra_1.JobClassificationBra, entity);
    };
    JobClassificationBraRequestBuilder.prototype.delete = function (jobClassificationCountryCountryOrEntity, jobClassificationEffectiveStartDate, jobClassificationExternalCode, externalCode) {
        return new core_1.DeleteRequestBuilder(JobClassificationBra_1.JobClassificationBra, jobClassificationCountryCountryOrEntity instanceof JobClassificationBra_1.JobClassificationBra ? jobClassificationCountryCountryOrEntity : {
            JobClassificationCountry_country: jobClassificationCountryCountryOrEntity,
            JobClassification_effectiveStartDate: jobClassificationEffectiveStartDate,
            JobClassification_externalCode: jobClassificationExternalCode,
            externalCode: externalCode
        });
    };
    return JobClassificationBraRequestBuilder;
}(core_1.RequestBuilder));
exports.JobClassificationBraRequestBuilder = JobClassificationBraRequestBuilder;
//# sourceMappingURL=JobClassificationBraRequestBuilder.js.map