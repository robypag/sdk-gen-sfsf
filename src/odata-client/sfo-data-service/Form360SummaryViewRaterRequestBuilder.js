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
var Form360SummaryViewRater_1 = require("./Form360SummaryViewRater");
/**
 * Request builder class for operations supported on the [[Form360SummaryViewRater]] entity.
 */
var Form360SummaryViewRaterRequestBuilder = /** @class */ (function (_super) {
    __extends(Form360SummaryViewRaterRequestBuilder, _super);
    function Form360SummaryViewRaterRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Form360SummaryViewRater` entity based on its keys.
     * @param formContentId Key property. See [[Form360SummaryViewRater.formContentId]].
     * @param formDataId Key property. See [[Form360SummaryViewRater.formDataId]].
     * @returns A request builder for creating requests to retrieve one `Form360SummaryViewRater` entity based on its keys.
     */
    Form360SummaryViewRaterRequestBuilder.prototype.getByKey = function (formContentId, formDataId) {
        return new core_1.GetByKeyRequestBuilder(Form360SummaryViewRater_1.Form360SummaryViewRater, {
            formContentId: formContentId,
            formDataId: formDataId
        });
    };
    /**
     * Returns a request builder for querying all `Form360SummaryViewRater` entities.
     * @returns A request builder for creating requests to retrieve all `Form360SummaryViewRater` entities.
     */
    Form360SummaryViewRaterRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(Form360SummaryViewRater_1.Form360SummaryViewRater);
    };
    return Form360SummaryViewRaterRequestBuilder;
}(core_1.RequestBuilder));
exports.Form360SummaryViewRaterRequestBuilder = Form360SummaryViewRaterRequestBuilder;
//# sourceMappingURL=Form360SummaryViewRaterRequestBuilder.js.map