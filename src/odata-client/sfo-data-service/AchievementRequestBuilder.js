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
var Achievement_1 = require("./Achievement");
/**
 * Request builder class for operations supported on the [[Achievement]] entity.
 */
var AchievementRequestBuilder = /** @class */ (function (_super) {
    __extends(AchievementRequestBuilder, _super);
    function AchievementRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Achievement` entity based on its keys.
     * @param achievementId Key property. See [[Achievement.achievementId]].
     * @returns A request builder for creating requests to retrieve one `Achievement` entity based on its keys.
     */
    AchievementRequestBuilder.prototype.getByKey = function (achievementId) {
        return new core_1.GetByKeyRequestBuilder(Achievement_1.Achievement, { achievementId: achievementId });
    };
    /**
     * Returns a request builder for querying all `Achievement` entities.
     * @returns A request builder for creating requests to retrieve all `Achievement` entities.
     */
    AchievementRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(Achievement_1.Achievement);
    };
    /**
     * Returns a request builder for creating a `Achievement` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Achievement`.
     */
    AchievementRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(Achievement_1.Achievement, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `Achievement`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Achievement`.
     */
    AchievementRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(Achievement_1.Achievement, entity);
    };
    AchievementRequestBuilder.prototype.delete = function (achievementIdOrEntity) {
        return new core_1.DeleteRequestBuilder(Achievement_1.Achievement, achievementIdOrEntity instanceof Achievement_1.Achievement ? achievementIdOrEntity : { achievementId: achievementIdOrEntity });
    };
    return AchievementRequestBuilder;
}(core_1.RequestBuilder));
exports.AchievementRequestBuilder = AchievementRequestBuilder;
//# sourceMappingURL=AchievementRequestBuilder.js.map