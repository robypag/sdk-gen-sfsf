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
var ContinuousFeedback_1 = require("./ContinuousFeedback");
/**
 * Request builder class for operations supported on the [[ContinuousFeedback]] entity.
 */
var ContinuousFeedbackRequestBuilder = /** @class */ (function (_super) {
    __extends(ContinuousFeedbackRequestBuilder, _super);
    function ContinuousFeedbackRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `ContinuousFeedback` entity based on its keys.
     * @param feedbackId Key property. See [[ContinuousFeedback.feedbackId]].
     * @returns A request builder for creating requests to retrieve one `ContinuousFeedback` entity based on its keys.
     */
    ContinuousFeedbackRequestBuilder.prototype.getByKey = function (feedbackId) {
        return new core_1.GetByKeyRequestBuilder(ContinuousFeedback_1.ContinuousFeedback, { feedbackId: feedbackId });
    };
    /**
     * Returns a request builder for querying all `ContinuousFeedback` entities.
     * @returns A request builder for creating requests to retrieve all `ContinuousFeedback` entities.
     */
    ContinuousFeedbackRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(ContinuousFeedback_1.ContinuousFeedback);
    };
    /**
     * Returns a request builder for creating a `ContinuousFeedback` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ContinuousFeedback`.
     */
    ContinuousFeedbackRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(ContinuousFeedback_1.ContinuousFeedback, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `ContinuousFeedback`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ContinuousFeedback`.
     */
    ContinuousFeedbackRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(ContinuousFeedback_1.ContinuousFeedback, entity);
    };
    ContinuousFeedbackRequestBuilder.prototype.delete = function (feedbackIdOrEntity) {
        return new core_1.DeleteRequestBuilder(ContinuousFeedback_1.ContinuousFeedback, feedbackIdOrEntity instanceof ContinuousFeedback_1.ContinuousFeedback ? feedbackIdOrEntity : { feedbackId: feedbackIdOrEntity });
    };
    return ContinuousFeedbackRequestBuilder;
}(core_1.RequestBuilder));
exports.ContinuousFeedbackRequestBuilder = ContinuousFeedbackRequestBuilder;
//# sourceMappingURL=ContinuousFeedbackRequestBuilder.js.map