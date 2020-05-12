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
var AchievementDevGoalDetail_1 = require("./AchievementDevGoalDetail");
/**
 * Request builder class for operations supported on the [[AchievementDevGoalDetail]] entity.
 */
var AchievementDevGoalDetailRequestBuilder = /** @class */ (function (_super) {
    __extends(AchievementDevGoalDetailRequestBuilder, _super);
    function AchievementDevGoalDetailRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `AchievementDevGoalDetail` entity based on its keys.
     * @param achievementAchievementId Key property. See [[AchievementDevGoalDetail.achievementAchievementId]].
     * @param externalCode Key property. See [[AchievementDevGoalDetail.externalCode]].
     * @returns A request builder for creating requests to retrieve one `AchievementDevGoalDetail` entity based on its keys.
     */
    AchievementDevGoalDetailRequestBuilder.prototype.getByKey = function (achievementAchievementId, externalCode) {
        return new core_1.GetByKeyRequestBuilder(AchievementDevGoalDetail_1.AchievementDevGoalDetail, {
            Achievement_achievementId: achievementAchievementId,
            externalCode: externalCode
        });
    };
    /**
     * Returns a request builder for querying all `AchievementDevGoalDetail` entities.
     * @returns A request builder for creating requests to retrieve all `AchievementDevGoalDetail` entities.
     */
    AchievementDevGoalDetailRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(AchievementDevGoalDetail_1.AchievementDevGoalDetail);
    };
    /**
     * Returns a request builder for creating a `AchievementDevGoalDetail` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `AchievementDevGoalDetail`.
     */
    AchievementDevGoalDetailRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(AchievementDevGoalDetail_1.AchievementDevGoalDetail, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `AchievementDevGoalDetail`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `AchievementDevGoalDetail`.
     */
    AchievementDevGoalDetailRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(AchievementDevGoalDetail_1.AchievementDevGoalDetail, entity);
    };
    AchievementDevGoalDetailRequestBuilder.prototype.delete = function (achievementAchievementIdOrEntity, externalCode) {
        return new core_1.DeleteRequestBuilder(AchievementDevGoalDetail_1.AchievementDevGoalDetail, achievementAchievementIdOrEntity instanceof AchievementDevGoalDetail_1.AchievementDevGoalDetail ? achievementAchievementIdOrEntity : {
            Achievement_achievementId: achievementAchievementIdOrEntity,
            externalCode: externalCode
        });
    };
    return AchievementDevGoalDetailRequestBuilder;
}(core_1.RequestBuilder));
exports.AchievementDevGoalDetailRequestBuilder = AchievementDevGoalDetailRequestBuilder;
//# sourceMappingURL=AchievementDevGoalDetailRequestBuilder.js.map