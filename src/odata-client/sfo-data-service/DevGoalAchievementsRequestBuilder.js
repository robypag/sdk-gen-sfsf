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
var DevGoalAchievements_1 = require("./DevGoalAchievements");
/**
 * Request builder class for operations supported on the [[DevGoalAchievements]] entity.
 */
var DevGoalAchievementsRequestBuilder = /** @class */ (function (_super) {
    __extends(DevGoalAchievementsRequestBuilder, _super);
    function DevGoalAchievementsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `DevGoalAchievements` entity based on its keys.
     * @param goalId Key property. See [[DevGoalAchievements.goalId]].
     * @param subjectUserId Key property. See [[DevGoalAchievements.subjectUserId]].
     * @returns A request builder for creating requests to retrieve one `DevGoalAchievements` entity based on its keys.
     */
    DevGoalAchievementsRequestBuilder.prototype.getByKey = function (goalId, subjectUserId) {
        return new core_1.GetByKeyRequestBuilder(DevGoalAchievements_1.DevGoalAchievements, {
            goalId: goalId,
            subjectUserId: subjectUserId
        });
    };
    /**
     * Returns a request builder for querying all `DevGoalAchievements` entities.
     * @returns A request builder for creating requests to retrieve all `DevGoalAchievements` entities.
     */
    DevGoalAchievementsRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(DevGoalAchievements_1.DevGoalAchievements);
    };
    return DevGoalAchievementsRequestBuilder;
}(core_1.RequestBuilder));
exports.DevGoalAchievementsRequestBuilder = DevGoalAchievementsRequestBuilder;
//# sourceMappingURL=DevGoalAchievementsRequestBuilder.js.map