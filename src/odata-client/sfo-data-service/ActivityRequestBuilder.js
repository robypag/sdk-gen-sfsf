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
var Activity_1 = require("./Activity");
/**
 * Request builder class for operations supported on the [[Activity]] entity.
 */
var ActivityRequestBuilder = /** @class */ (function (_super) {
    __extends(ActivityRequestBuilder, _super);
    function ActivityRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Activity` entity based on its keys.
     * @param activityId Key property. See [[Activity.activityId]].
     * @returns A request builder for creating requests to retrieve one `Activity` entity based on its keys.
     */
    ActivityRequestBuilder.prototype.getByKey = function (activityId) {
        return new core_1.GetByKeyRequestBuilder(Activity_1.Activity, { activityId: activityId });
    };
    /**
     * Returns a request builder for querying all `Activity` entities.
     * @returns A request builder for creating requests to retrieve all `Activity` entities.
     */
    ActivityRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(Activity_1.Activity);
    };
    /**
     * Returns a request builder for creating a `Activity` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Activity`.
     */
    ActivityRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(Activity_1.Activity, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `Activity`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Activity`.
     */
    ActivityRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(Activity_1.Activity, entity);
    };
    ActivityRequestBuilder.prototype.delete = function (activityIdOrEntity) {
        return new core_1.DeleteRequestBuilder(Activity_1.Activity, activityIdOrEntity instanceof Activity_1.Activity ? activityIdOrEntity : { activityId: activityIdOrEntity });
    };
    return ActivityRequestBuilder;
}(core_1.RequestBuilder));
exports.ActivityRequestBuilder = ActivityRequestBuilder;
//# sourceMappingURL=ActivityRequestBuilder.js.map