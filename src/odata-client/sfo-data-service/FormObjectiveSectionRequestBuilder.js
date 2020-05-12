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
var FormObjectiveSection_1 = require("./FormObjectiveSection");
/**
 * Request builder class for operations supported on the [[FormObjectiveSection]] entity.
 */
var FormObjectiveSectionRequestBuilder = /** @class */ (function (_super) {
    __extends(FormObjectiveSectionRequestBuilder, _super);
    function FormObjectiveSectionRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `FormObjectiveSection` entity based on its keys.
     * @param formContentId Key property. See [[FormObjectiveSection.formContentId]].
     * @param formDataId Key property. See [[FormObjectiveSection.formDataId]].
     * @param sectionIndex Key property. See [[FormObjectiveSection.sectionIndex]].
     * @returns A request builder for creating requests to retrieve one `FormObjectiveSection` entity based on its keys.
     */
    FormObjectiveSectionRequestBuilder.prototype.getByKey = function (formContentId, formDataId, sectionIndex) {
        return new core_1.GetByKeyRequestBuilder(FormObjectiveSection_1.FormObjectiveSection, {
            formContentId: formContentId,
            formDataId: formDataId,
            sectionIndex: sectionIndex
        });
    };
    /**
     * Returns a request builder for querying all `FormObjectiveSection` entities.
     * @returns A request builder for creating requests to retrieve all `FormObjectiveSection` entities.
     */
    FormObjectiveSectionRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(FormObjectiveSection_1.FormObjectiveSection);
    };
    return FormObjectiveSectionRequestBuilder;
}(core_1.RequestBuilder));
exports.FormObjectiveSectionRequestBuilder = FormObjectiveSectionRequestBuilder;
//# sourceMappingURL=FormObjectiveSectionRequestBuilder.js.map