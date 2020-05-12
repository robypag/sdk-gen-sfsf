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
var CalibrationTemplate_1 = require("./CalibrationTemplate");
/**
 * Request builder class for operations supported on the [[CalibrationTemplate]] entity.
 */
var CalibrationTemplateRequestBuilder = /** @class */ (function (_super) {
    __extends(CalibrationTemplateRequestBuilder, _super);
    function CalibrationTemplateRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `CalibrationTemplate` entity based on its keys.
     * @param templateId Key property. See [[CalibrationTemplate.templateId]].
     * @returns A request builder for creating requests to retrieve one `CalibrationTemplate` entity based on its keys.
     */
    CalibrationTemplateRequestBuilder.prototype.getByKey = function (templateId) {
        return new core_1.GetByKeyRequestBuilder(CalibrationTemplate_1.CalibrationTemplate, { templateId: templateId });
    };
    /**
     * Returns a request builder for querying all `CalibrationTemplate` entities.
     * @returns A request builder for creating requests to retrieve all `CalibrationTemplate` entities.
     */
    CalibrationTemplateRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(CalibrationTemplate_1.CalibrationTemplate);
    };
    return CalibrationTemplateRequestBuilder;
}(core_1.RequestBuilder));
exports.CalibrationTemplateRequestBuilder = CalibrationTemplateRequestBuilder;
//# sourceMappingURL=CalibrationTemplateRequestBuilder.js.map