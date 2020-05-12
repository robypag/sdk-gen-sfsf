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
var FormObjectiveComment_1 = require("./FormObjectiveComment");
/**
 * Request builder class for operations supported on the [[FormObjectiveComment]] entity.
 */
var FormObjectiveCommentRequestBuilder = /** @class */ (function (_super) {
    __extends(FormObjectiveCommentRequestBuilder, _super);
    function FormObjectiveCommentRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `FormObjectiveComment` entity based on its keys.
     * @param formContentId Key property. See [[FormObjectiveComment.formContentId]].
     * @param formDataId Key property. See [[FormObjectiveComment.formDataId]].
     * @param itemId Key property. See [[FormObjectiveComment.itemId]].
     * @param sectionIndex Key property. See [[FormObjectiveComment.sectionIndex]].
     * @param type Key property. See [[FormObjectiveComment.type]].
     * @returns A request builder for creating requests to retrieve one `FormObjectiveComment` entity based on its keys.
     */
    FormObjectiveCommentRequestBuilder.prototype.getByKey = function (formContentId, formDataId, itemId, sectionIndex, type) {
        return new core_1.GetByKeyRequestBuilder(FormObjectiveComment_1.FormObjectiveComment, {
            formContentId: formContentId,
            formDataId: formDataId,
            itemId: itemId,
            sectionIndex: sectionIndex,
            type: type
        });
    };
    /**
     * Returns a request builder for querying all `FormObjectiveComment` entities.
     * @returns A request builder for creating requests to retrieve all `FormObjectiveComment` entities.
     */
    FormObjectiveCommentRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(FormObjectiveComment_1.FormObjectiveComment);
    };
    return FormObjectiveCommentRequestBuilder;
}(core_1.RequestBuilder));
exports.FormObjectiveCommentRequestBuilder = FormObjectiveCommentRequestBuilder;
//# sourceMappingURL=FormObjectiveCommentRequestBuilder.js.map