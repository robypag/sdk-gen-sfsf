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
var FormUserRatingComment_1 = require("./FormUserRatingComment");
/**
 * Request builder class for operations supported on the [[FormUserRatingComment]] entity.
 */
var FormUserRatingCommentRequestBuilder = /** @class */ (function (_super) {
    __extends(FormUserRatingCommentRequestBuilder, _super);
    function FormUserRatingCommentRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `FormUserRatingComment` entity based on its keys.
     * @param formContentId Key property. See [[FormUserRatingComment.formContentId]].
     * @param formDataId Key property. See [[FormUserRatingComment.formDataId]].
     * @param itemId Key property. See [[FormUserRatingComment.itemId]].
     * @param ratingType Key property. See [[FormUserRatingComment.ratingType]].
     * @param sectionIndex Key property. See [[FormUserRatingComment.sectionIndex]].
     * @param userId Key property. See [[FormUserRatingComment.userId]].
     * @returns A request builder for creating requests to retrieve one `FormUserRatingComment` entity based on its keys.
     */
    FormUserRatingCommentRequestBuilder.prototype.getByKey = function (formContentId, formDataId, itemId, ratingType, sectionIndex, userId) {
        return new core_1.GetByKeyRequestBuilder(FormUserRatingComment_1.FormUserRatingComment, {
            formContentId: formContentId,
            formDataId: formDataId,
            itemId: itemId,
            ratingType: ratingType,
            sectionIndex: sectionIndex,
            userId: userId
        });
    };
    /**
     * Returns a request builder for querying all `FormUserRatingComment` entities.
     * @returns A request builder for creating requests to retrieve all `FormUserRatingComment` entities.
     */
    FormUserRatingCommentRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(FormUserRatingComment_1.FormUserRatingComment);
    };
    return FormUserRatingCommentRequestBuilder;
}(core_1.RequestBuilder));
exports.FormUserRatingCommentRequestBuilder = FormUserRatingCommentRequestBuilder;
//# sourceMappingURL=FormUserRatingCommentRequestBuilder.js.map