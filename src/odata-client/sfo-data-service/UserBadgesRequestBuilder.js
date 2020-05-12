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
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var UserBadges_1 = require("./UserBadges");
/**
 * Request builder class for operations supported on the [[UserBadges]] entity.
 */
var UserBadgesRequestBuilder = /** @class */ (function (_super) {
    __extends(UserBadgesRequestBuilder, _super);
    function UserBadgesRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `UserBadges` entity based on its keys.
     * @param badgeInstanceId Key property. See [[UserBadges.badgeInstanceId]].
     * @param userId Key property. See [[UserBadges.userId]].
     * @returns A request builder for creating requests to retrieve one `UserBadges` entity based on its keys.
     */
    UserBadgesRequestBuilder.prototype.getByKey = function (badgeInstanceId, userId) {
        return new core_1.GetByKeyRequestBuilder(UserBadges_1.UserBadges, {
            badgeInstanceId: badgeInstanceId,
            userId: userId
        });
    };
    /**
     * Returns a request builder for querying all `UserBadges` entities.
     * @returns A request builder for creating requests to retrieve all `UserBadges` entities.
     */
    UserBadgesRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(UserBadges_1.UserBadges);
    };
    /**
     * Returns a request builder for creating a `UserBadges` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `UserBadges`.
     */
    UserBadgesRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(UserBadges_1.UserBadges, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `UserBadges`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `UserBadges`.
     */
    UserBadgesRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(UserBadges_1.UserBadges, entity);
    };
    UserBadgesRequestBuilder.prototype.delete = function (badgeInstanceIdOrEntity, userId) {
        return new core_1.DeleteRequestBuilder(UserBadges_1.UserBadges, badgeInstanceIdOrEntity instanceof UserBadges_1.UserBadges ? badgeInstanceIdOrEntity : {
            badgeInstanceId: badgeInstanceIdOrEntity,
            userId: userId
        });
    };
    return UserBadgesRequestBuilder;
}(core_1.RequestBuilder));
exports.UserBadgesRequestBuilder = UserBadgesRequestBuilder;
//# sourceMappingURL=UserBadgesRequestBuilder.js.map