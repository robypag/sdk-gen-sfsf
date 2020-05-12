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
var JobAppTemplate_Candidate_Detail_Global_1 = require("./JobAppTemplate_Candidate_Detail_Global");
/**
 * Request builder class for operations supported on the [[JobAppTemplate_Candidate_Detail_Global]] entity.
 */
var JobAppTemplate_Candidate_Detail_GlobalRequestBuilder = /** @class */ (function (_super) {
    __extends(JobAppTemplate_Candidate_Detail_GlobalRequestBuilder, _super);
    function JobAppTemplate_Candidate_Detail_GlobalRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `JobAppTemplate_Candidate_Detail_Global` entity based on its keys.
     * @param templateId Key property. See [[JobAppTemplate_Candidate_Detail_Global.templateId]].
     * @returns A request builder for creating requests to retrieve one `JobAppTemplate_Candidate_Detail_Global` entity based on its keys.
     */
    JobAppTemplate_Candidate_Detail_GlobalRequestBuilder.prototype.getByKey = function (templateId) {
        return new core_1.GetByKeyRequestBuilder(JobAppTemplate_Candidate_Detail_Global_1.JobAppTemplate_Candidate_Detail_Global, { templateId: templateId });
    };
    /**
     * Returns a request builder for querying all `JobAppTemplate_Candidate_Detail_Global` entities.
     * @returns A request builder for creating requests to retrieve all `JobAppTemplate_Candidate_Detail_Global` entities.
     */
    JobAppTemplate_Candidate_Detail_GlobalRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(JobAppTemplate_Candidate_Detail_Global_1.JobAppTemplate_Candidate_Detail_Global);
    };
    return JobAppTemplate_Candidate_Detail_GlobalRequestBuilder;
}(core_1.RequestBuilder));
exports.JobAppTemplate_Candidate_Detail_GlobalRequestBuilder = JobAppTemplate_Candidate_Detail_GlobalRequestBuilder;
//# sourceMappingURL=JobAppTemplate_Candidate_Detail_GlobalRequestBuilder.js.map