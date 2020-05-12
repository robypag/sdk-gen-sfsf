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
var FormBehaviorRatingComment_1 = require("./FormBehaviorRatingComment");
/**
 * Request builder class for operations supported on the [[FormBehaviorRatingComment]] entity.
 */
var FormBehaviorRatingCommentRequestBuilder = /** @class */ (function (_super) {
    __extends(FormBehaviorRatingCommentRequestBuilder, _super);
    function FormBehaviorRatingCommentRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `FormBehaviorRatingComment` entity based on its keys.
     * @param behaviorId Key property. See [[FormBehaviorRatingComment.behaviorId]].
     * @param formContentId Key property. See [[FormBehaviorRatingComment.formContentId]].
     * @param formDataId Key property. See [[FormBehaviorRatingComment.formDataId]].
     * @param itemId Key property. See [[FormBehaviorRatingComment.itemId]].
     * @param ratingType Key property. See [[FormBehaviorRatingComment.ratingType]].
     * @param sectionIndex Key property. See [[FormBehaviorRatingComment.sectionIndex]].
     * @param userId Key property. See [[FormBehaviorRatingComment.userId]].
     * @returns A request builder for creating requests to retrieve one `FormBehaviorRatingComment` entity based on its keys.
     */
    FormBehaviorRatingCommentRequestBuilder.prototype.getByKey = function (behaviorId, formContentId, formDataId, itemId, ratingType, sectionIndex, userId) {
        return new core_1.GetByKeyRequestBuilder(FormBehaviorRatingComment_1.FormBehaviorRatingComment, {
            behaviorId: behaviorId,
            formContentId: formContentId,
            formDataId: formDataId,
            itemId: itemId,
            ratingType: ratingType,
            sectionIndex: sectionIndex,
            userId: userId
        });
    };
    /**
     * Returns a request builder for querying all `FormBehaviorRatingComment` entities.
     * @returns A request builder for creating requests to retrieve all `FormBehaviorRatingComment` entities.
     */
    FormBehaviorRatingCommentRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(FormBehaviorRatingComment_1.FormBehaviorRatingComment);
    };
    return FormBehaviorRatingCommentRequestBuilder;
}(core_1.RequestBuilder));
exports.FormBehaviorRatingCommentRequestBuilder = FormBehaviorRatingCommentRequestBuilder;
//# sourceMappingURL=FormBehaviorRatingCommentRequestBuilder.js.map