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
var GoalAchievementsList_1 = require("./GoalAchievementsList");
/**
 * Request builder class for operations supported on the [[GoalAchievementsList]] entity.
 */
var GoalAchievementsListRequestBuilder = /** @class */ (function (_super) {
    __extends(GoalAchievementsListRequestBuilder, _super);
    function GoalAchievementsListRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `GoalAchievementsList` entity based on its keys.
     * @param goalId Key property. See [[GoalAchievementsList.goalId]].
     * @param subjectUserId Key property. See [[GoalAchievementsList.subjectUserId]].
     * @returns A request builder for creating requests to retrieve one `GoalAchievementsList` entity based on its keys.
     */
    GoalAchievementsListRequestBuilder.prototype.getByKey = function (goalId, subjectUserId) {
        return new core_1.GetByKeyRequestBuilder(GoalAchievementsList_1.GoalAchievementsList, {
            goalId: goalId,
            subjectUserId: subjectUserId
        });
    };
    /**
     * Returns a request builder for querying all `GoalAchievementsList` entities.
     * @returns A request builder for creating requests to retrieve all `GoalAchievementsList` entities.
     */
    GoalAchievementsListRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(GoalAchievementsList_1.GoalAchievementsList);
    };
    return GoalAchievementsListRequestBuilder;
}(core_1.RequestBuilder));
exports.GoalAchievementsListRequestBuilder = GoalAchievementsListRequestBuilder;
//# sourceMappingURL=GoalAchievementsListRequestBuilder.js.map