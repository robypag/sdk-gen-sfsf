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
var FormObjectiveDetails_1 = require("./FormObjectiveDetails");
/**
 * Request builder class for operations supported on the [[FormObjectiveDetails]] entity.
 */
var FormObjectiveDetailsRequestBuilder = /** @class */ (function (_super) {
    __extends(FormObjectiveDetailsRequestBuilder, _super);
    function FormObjectiveDetailsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `FormObjectiveDetails` entity based on its keys.
     * @param formContentId Key property. See [[FormObjectiveDetails.formContentId]].
     * @param formDataId Key property. See [[FormObjectiveDetails.formDataId]].
     * @param itemId Key property. See [[FormObjectiveDetails.itemId]].
     * @param sectionIndex Key property. See [[FormObjectiveDetails.sectionIndex]].
     * @param type Key property. See [[FormObjectiveDetails.type]].
     * @returns A request builder for creating requests to retrieve one `FormObjectiveDetails` entity based on its keys.
     */
    FormObjectiveDetailsRequestBuilder.prototype.getByKey = function (formContentId, formDataId, itemId, sectionIndex, type) {
        return new core_1.GetByKeyRequestBuilder(FormObjectiveDetails_1.FormObjectiveDetails, {
            formContentId: formContentId,
            formDataId: formDataId,
            itemId: itemId,
            sectionIndex: sectionIndex,
            type: type
        });
    };
    /**
     * Returns a request builder for querying all `FormObjectiveDetails` entities.
     * @returns A request builder for creating requests to retrieve all `FormObjectiveDetails` entities.
     */
    FormObjectiveDetailsRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(FormObjectiveDetails_1.FormObjectiveDetails);
    };
    return FormObjectiveDetailsRequestBuilder;
}(core_1.RequestBuilder));
exports.FormObjectiveDetailsRequestBuilder = FormObjectiveDetailsRequestBuilder;
//# sourceMappingURL=FormObjectiveDetailsRequestBuilder.js.map