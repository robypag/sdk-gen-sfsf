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
var JobOfferTemplate_Offer_Detail_Template_1 = require("./JobOfferTemplate_Offer_Detail_Template");
/**
 * Request builder class for operations supported on the [[JobOfferTemplate_Offer_Detail_Template]] entity.
 */
var JobOfferTemplate_Offer_Detail_TemplateRequestBuilder = /** @class */ (function (_super) {
    __extends(JobOfferTemplate_Offer_Detail_TemplateRequestBuilder, _super);
    function JobOfferTemplate_Offer_Detail_TemplateRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `JobOfferTemplate_Offer_Detail_Template` entity based on its keys.
     * @param templateId Key property. See [[JobOfferTemplate_Offer_Detail_Template.templateId]].
     * @returns A request builder for creating requests to retrieve one `JobOfferTemplate_Offer_Detail_Template` entity based on its keys.
     */
    JobOfferTemplate_Offer_Detail_TemplateRequestBuilder.prototype.getByKey = function (templateId) {
        return new core_1.GetByKeyRequestBuilder(JobOfferTemplate_Offer_Detail_Template_1.JobOfferTemplate_Offer_Detail_Template, { templateId: templateId });
    };
    /**
     * Returns a request builder for querying all `JobOfferTemplate_Offer_Detail_Template` entities.
     * @returns A request builder for creating requests to retrieve all `JobOfferTemplate_Offer_Detail_Template` entities.
     */
    JobOfferTemplate_Offer_Detail_TemplateRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(JobOfferTemplate_Offer_Detail_Template_1.JobOfferTemplate_Offer_Detail_Template);
    };
    return JobOfferTemplate_Offer_Detail_TemplateRequestBuilder;
}(core_1.RequestBuilder));
exports.JobOfferTemplate_Offer_Detail_TemplateRequestBuilder = JobOfferTemplate_Offer_Detail_TemplateRequestBuilder;
//# sourceMappingURL=JobOfferTemplate_Offer_Detail_TemplateRequestBuilder.js.map