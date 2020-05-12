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
var ActivityFeedback_1 = require("./ActivityFeedback");
/**
 * Request builder class for operations supported on the [[ActivityFeedback]] entity.
 */
var ActivityFeedbackRequestBuilder = /** @class */ (function (_super) {
    __extends(ActivityFeedbackRequestBuilder, _super);
    function ActivityFeedbackRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `ActivityFeedback` entity based on its keys.
     * @param activityActivityId Key property. See [[ActivityFeedback.activityActivityId]].
     * @param activityFeedbackId Key property. See [[ActivityFeedback.activityFeedbackId]].
     * @returns A request builder for creating requests to retrieve one `ActivityFeedback` entity based on its keys.
     */
    ActivityFeedbackRequestBuilder.prototype.getByKey = function (activityActivityId, activityFeedbackId) {
        return new core_1.GetByKeyRequestBuilder(ActivityFeedback_1.ActivityFeedback, {
            Activity_activityId: activityActivityId,
            activityFeedbackId: activityFeedbackId
        });
    };
    /**
     * Returns a request builder for querying all `ActivityFeedback` entities.
     * @returns A request builder for creating requests to retrieve all `ActivityFeedback` entities.
     */
    ActivityFeedbackRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(ActivityFeedback_1.ActivityFeedback);
    };
    /**
     * Returns a request builder for creating a `ActivityFeedback` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ActivityFeedback`.
     */
    ActivityFeedbackRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(ActivityFeedback_1.ActivityFeedback, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `ActivityFeedback`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ActivityFeedback`.
     */
    ActivityFeedbackRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(ActivityFeedback_1.ActivityFeedback, entity);
    };
    ActivityFeedbackRequestBuilder.prototype.delete = function (activityActivityIdOrEntity, activityFeedbackId) {
        return new core_1.DeleteRequestBuilder(ActivityFeedback_1.ActivityFeedback, activityActivityIdOrEntity instanceof ActivityFeedback_1.ActivityFeedback ? activityActivityIdOrEntity : {
            Activity_activityId: activityActivityIdOrEntity,
            activityFeedbackId: activityFeedbackId
        });
    };
    return ActivityFeedbackRequestBuilder;
}(core_1.RequestBuilder));
exports.ActivityFeedbackRequestBuilder = ActivityFeedbackRequestBuilder;
//# sourceMappingURL=ActivityFeedbackRequestBuilder.js.map