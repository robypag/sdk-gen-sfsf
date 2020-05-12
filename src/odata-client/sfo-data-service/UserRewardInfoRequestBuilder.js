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
var UserRewardInfo_1 = require("./UserRewardInfo");
/**
 * Request builder class for operations supported on the [[UserRewardInfo]] entity.
 */
var UserRewardInfoRequestBuilder = /** @class */ (function (_super) {
    __extends(UserRewardInfoRequestBuilder, _super);
    function UserRewardInfoRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `UserRewardInfo` entity based on its keys.
     * @param userId Key property. See [[UserRewardInfo.userId]].
     * @returns A request builder for creating requests to retrieve one `UserRewardInfo` entity based on its keys.
     */
    UserRewardInfoRequestBuilder.prototype.getByKey = function (userId) {
        return new core_1.GetByKeyRequestBuilder(UserRewardInfo_1.UserRewardInfo, { userId: userId });
    };
    /**
     * Returns a request builder for querying all `UserRewardInfo` entities.
     * @returns A request builder for creating requests to retrieve all `UserRewardInfo` entities.
     */
    UserRewardInfoRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(UserRewardInfo_1.UserRewardInfo);
    };
    return UserRewardInfoRequestBuilder;
}(core_1.RequestBuilder));
exports.UserRewardInfoRequestBuilder = UserRewardInfoRequestBuilder;
//# sourceMappingURL=UserRewardInfoRequestBuilder.js.map