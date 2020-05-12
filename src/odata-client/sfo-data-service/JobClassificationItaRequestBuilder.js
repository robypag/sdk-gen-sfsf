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
var JobClassificationIta_1 = require("./JobClassificationIta");
/**
 * Request builder class for operations supported on the [[JobClassificationIta]] entity.
 */
var JobClassificationItaRequestBuilder = /** @class */ (function (_super) {
    __extends(JobClassificationItaRequestBuilder, _super);
    function JobClassificationItaRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `JobClassificationIta` entity based on its keys.
     * @param jobClassificationCountryCountry Key property. See [[JobClassificationIta.jobClassificationCountryCountry]].
     * @param jobClassificationEffectiveStartDate Key property. See [[JobClassificationIta.jobClassificationEffectiveStartDate]].
     * @param jobClassificationExternalCode Key property. See [[JobClassificationIta.jobClassificationExternalCode]].
     * @param externalCode Key property. See [[JobClassificationIta.externalCode]].
     * @returns A request builder for creating requests to retrieve one `JobClassificationIta` entity based on its keys.
     */
    JobClassificationItaRequestBuilder.prototype.getByKey = function (jobClassificationCountryCountry, jobClassificationEffectiveStartDate, jobClassificationExternalCode, externalCode) {
        return new core_1.GetByKeyRequestBuilder(JobClassificationIta_1.JobClassificationIta, {
            JobClassificationCountry_country: jobClassificationCountryCountry,
            JobClassification_effectiveStartDate: jobClassificationEffectiveStartDate,
            JobClassification_externalCode: jobClassificationExternalCode,
            externalCode: externalCode
        });
    };
    /**
     * Returns a request builder for querying all `JobClassificationIta` entities.
     * @returns A request builder for creating requests to retrieve all `JobClassificationIta` entities.
     */
    JobClassificationItaRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(JobClassificationIta_1.JobClassificationIta);
    };
    /**
     * Returns a request builder for creating a `JobClassificationIta` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `JobClassificationIta`.
     */
    JobClassificationItaRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(JobClassificationIta_1.JobClassificationIta, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `JobClassificationIta`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `JobClassificationIta`.
     */
    JobClassificationItaRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(JobClassificationIta_1.JobClassificationIta, entity);
    };
    JobClassificationItaRequestBuilder.prototype.delete = function (jobClassificationCountryCountryOrEntity, jobClassificationEffectiveStartDate, jobClassificationExternalCode, externalCode) {
        return new core_1.DeleteRequestBuilder(JobClassificationIta_1.JobClassificationIta, jobClassificationCountryCountryOrEntity instanceof JobClassificationIta_1.JobClassificationIta ? jobClassificationCountryCountryOrEntity : {
            JobClassificationCountry_country: jobClassificationCountryCountryOrEntity,
            JobClassification_effectiveStartDate: jobClassificationEffectiveStartDate,
            JobClassification_externalCode: jobClassificationExternalCode,
            externalCode: externalCode
        });
    };
    return JobClassificationItaRequestBuilder;
}(core_1.RequestBuilder));
exports.JobClassificationItaRequestBuilder = JobClassificationItaRequestBuilder;
//# sourceMappingURL=JobClassificationItaRequestBuilder.js.map