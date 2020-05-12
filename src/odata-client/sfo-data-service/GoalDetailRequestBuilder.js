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
var GoalDetail_1 = require("./GoalDetail");
/**
 * Request builder class for operations supported on the [[GoalDetail]] entity.
 */
var GoalDetailRequestBuilder = /** @class */ (function (_super) {
    __extends(GoalDetailRequestBuilder, _super);
    function GoalDetailRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `GoalDetail` entity based on its keys.
     * @param activityActivityId Key property. See [[GoalDetail.activityActivityId]].
     * @param externalCode Key property. See [[GoalDetail.externalCode]].
     * @returns A request builder for creating requests to retrieve one `GoalDetail` entity based on its keys.
     */
    GoalDetailRequestBuilder.prototype.getByKey = function (activityActivityId, externalCode) {
        return new core_1.GetByKeyRequestBuilder(GoalDetail_1.GoalDetail, {
            Activity_activityId: activityActivityId,
            externalCode: externalCode
        });
    };
    /**
     * Returns a request builder for querying all `GoalDetail` entities.
     * @returns A request builder for creating requests to retrieve all `GoalDetail` entities.
     */
    GoalDetailRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(GoalDetail_1.GoalDetail);
    };
    /**
     * Returns a request builder for creating a `GoalDetail` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `GoalDetail`.
     */
    GoalDetailRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(GoalDetail_1.GoalDetail, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `GoalDetail`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `GoalDetail`.
     */
    GoalDetailRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(GoalDetail_1.GoalDetail, entity);
    };
    GoalDetailRequestBuilder.prototype.delete = function (activityActivityIdOrEntity, externalCode) {
        return new core_1.DeleteRequestBuilder(GoalDetail_1.GoalDetail, activityActivityIdOrEntity instanceof GoalDetail_1.GoalDetail ? activityActivityIdOrEntity : {
            Activity_activityId: activityActivityIdOrEntity,
            externalCode: externalCode
        });
    };
    return GoalDetailRequestBuilder;
}(core_1.RequestBuilder));
exports.GoalDetailRequestBuilder = GoalDetailRequestBuilder;
//# sourceMappingURL=GoalDetailRequestBuilder.js.map