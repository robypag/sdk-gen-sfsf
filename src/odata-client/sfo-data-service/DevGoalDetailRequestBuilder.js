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
var DevGoalDetail_1 = require("./DevGoalDetail");
/**
 * Request builder class for operations supported on the [[DevGoalDetail]] entity.
 */
var DevGoalDetailRequestBuilder = /** @class */ (function (_super) {
    __extends(DevGoalDetailRequestBuilder, _super);
    function DevGoalDetailRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `DevGoalDetail` entity based on its keys.
     * @param activityActivityId Key property. See [[DevGoalDetail.activityActivityId]].
     * @param externalCode Key property. See [[DevGoalDetail.externalCode]].
     * @returns A request builder for creating requests to retrieve one `DevGoalDetail` entity based on its keys.
     */
    DevGoalDetailRequestBuilder.prototype.getByKey = function (activityActivityId, externalCode) {
        return new core_1.GetByKeyRequestBuilder(DevGoalDetail_1.DevGoalDetail, {
            Activity_activityId: activityActivityId,
            externalCode: externalCode
        });
    };
    /**
     * Returns a request builder for querying all `DevGoalDetail` entities.
     * @returns A request builder for creating requests to retrieve all `DevGoalDetail` entities.
     */
    DevGoalDetailRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(DevGoalDetail_1.DevGoalDetail);
    };
    /**
     * Returns a request builder for creating a `DevGoalDetail` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `DevGoalDetail`.
     */
    DevGoalDetailRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(DevGoalDetail_1.DevGoalDetail, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `DevGoalDetail`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `DevGoalDetail`.
     */
    DevGoalDetailRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(DevGoalDetail_1.DevGoalDetail, entity);
    };
    DevGoalDetailRequestBuilder.prototype.delete = function (activityActivityIdOrEntity, externalCode) {
        return new core_1.DeleteRequestBuilder(DevGoalDetail_1.DevGoalDetail, activityActivityIdOrEntity instanceof DevGoalDetail_1.DevGoalDetail ? activityActivityIdOrEntity : {
            Activity_activityId: activityActivityIdOrEntity,
            externalCode: externalCode
        });
    };
    return DevGoalDetailRequestBuilder;
}(core_1.RequestBuilder));
exports.DevGoalDetailRequestBuilder = DevGoalDetailRequestBuilder;
//# sourceMappingURL=DevGoalDetailRequestBuilder.js.map