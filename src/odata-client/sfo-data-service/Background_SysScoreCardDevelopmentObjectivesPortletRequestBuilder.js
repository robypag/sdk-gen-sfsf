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
var Background_SysScoreCardDevelopmentObjectivesPortlet_1 = require("./Background_SysScoreCardDevelopmentObjectivesPortlet");
/**
 * Request builder class for operations supported on the [[Background_SysScoreCardDevelopmentObjectivesPortlet]] entity.
 */
var Background_SysScoreCardDevelopmentObjectivesPortletRequestBuilder = /** @class */ (function (_super) {
    __extends(Background_SysScoreCardDevelopmentObjectivesPortletRequestBuilder, _super);
    function Background_SysScoreCardDevelopmentObjectivesPortletRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Background_SysScoreCardDevelopmentObjectivesPortlet` entity based on its keys.
     * @param backgroundElementId Key property. See [[Background_SysScoreCardDevelopmentObjectivesPortlet.backgroundElementId]].
     * @param userId Key property. See [[Background_SysScoreCardDevelopmentObjectivesPortlet.userId]].
     * @returns A request builder for creating requests to retrieve one `Background_SysScoreCardDevelopmentObjectivesPortlet` entity based on its keys.
     */
    Background_SysScoreCardDevelopmentObjectivesPortletRequestBuilder.prototype.getByKey = function (backgroundElementId, userId) {
        return new core_1.GetByKeyRequestBuilder(Background_SysScoreCardDevelopmentObjectivesPortlet_1.Background_SysScoreCardDevelopmentObjectivesPortlet, {
            backgroundElementId: backgroundElementId,
            userId: userId
        });
    };
    /**
     * Returns a request builder for querying all `Background_SysScoreCardDevelopmentObjectivesPortlet` entities.
     * @returns A request builder for creating requests to retrieve all `Background_SysScoreCardDevelopmentObjectivesPortlet` entities.
     */
    Background_SysScoreCardDevelopmentObjectivesPortletRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(Background_SysScoreCardDevelopmentObjectivesPortlet_1.Background_SysScoreCardDevelopmentObjectivesPortlet);
    };
    /**
     * Returns a request builder for creating a `Background_SysScoreCardDevelopmentObjectivesPortlet` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Background_SysScoreCardDevelopmentObjectivesPortlet`.
     */
    Background_SysScoreCardDevelopmentObjectivesPortletRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(Background_SysScoreCardDevelopmentObjectivesPortlet_1.Background_SysScoreCardDevelopmentObjectivesPortlet, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `Background_SysScoreCardDevelopmentObjectivesPortlet`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Background_SysScoreCardDevelopmentObjectivesPortlet`.
     */
    Background_SysScoreCardDevelopmentObjectivesPortletRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(Background_SysScoreCardDevelopmentObjectivesPortlet_1.Background_SysScoreCardDevelopmentObjectivesPortlet, entity);
    };
    Background_SysScoreCardDevelopmentObjectivesPortletRequestBuilder.prototype.delete = function (backgroundElementIdOrEntity, userId) {
        return new core_1.DeleteRequestBuilder(Background_SysScoreCardDevelopmentObjectivesPortlet_1.Background_SysScoreCardDevelopmentObjectivesPortlet, backgroundElementIdOrEntity instanceof Background_SysScoreCardDevelopmentObjectivesPortlet_1.Background_SysScoreCardDevelopmentObjectivesPortlet ? backgroundElementIdOrEntity : {
            backgroundElementId: backgroundElementIdOrEntity,
            userId: userId
        });
    };
    return Background_SysScoreCardDevelopmentObjectivesPortletRequestBuilder;
}(core_1.RequestBuilder));
exports.Background_SysScoreCardDevelopmentObjectivesPortletRequestBuilder = Background_SysScoreCardDevelopmentObjectivesPortletRequestBuilder;
//# sourceMappingURL=Background_SysScoreCardDevelopmentObjectivesPortletRequestBuilder.js.map