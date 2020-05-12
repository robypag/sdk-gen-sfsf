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
var DevGoalAchievementsList_1 = require("./DevGoalAchievementsList");
/**
 * Request builder class for operations supported on the [[DevGoalAchievementsList]] entity.
 */
var DevGoalAchievementsListRequestBuilder = /** @class */ (function (_super) {
    __extends(DevGoalAchievementsListRequestBuilder, _super);
    function DevGoalAchievementsListRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `DevGoalAchievementsList` entity based on its keys.
     * @param goalId Key property. See [[DevGoalAchievementsList.goalId]].
     * @param subjectUserId Key property. See [[DevGoalAchievementsList.subjectUserId]].
     * @returns A request builder for creating requests to retrieve one `DevGoalAchievementsList` entity based on its keys.
     */
    DevGoalAchievementsListRequestBuilder.prototype.getByKey = function (goalId, subjectUserId) {
        return new core_1.GetByKeyRequestBuilder(DevGoalAchievementsList_1.DevGoalAchievementsList, {
            goalId: goalId,
            subjectUserId: subjectUserId
        });
    };
    /**
     * Returns a request builder for querying all `DevGoalAchievementsList` entities.
     * @returns A request builder for creating requests to retrieve all `DevGoalAchievementsList` entities.
     */
    DevGoalAchievementsListRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(DevGoalAchievementsList_1.DevGoalAchievementsList);
    };
    return DevGoalAchievementsListRequestBuilder;
}(core_1.RequestBuilder));
exports.DevGoalAchievementsListRequestBuilder = DevGoalAchievementsListRequestBuilder;
//# sourceMappingURL=DevGoalAchievementsListRequestBuilder.js.map