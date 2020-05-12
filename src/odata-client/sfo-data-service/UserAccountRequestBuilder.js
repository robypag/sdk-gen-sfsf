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
var UserAccount_1 = require("./UserAccount");
/**
 * Request builder class for operations supported on the [[UserAccount]] entity.
 */
var UserAccountRequestBuilder = /** @class */ (function (_super) {
    __extends(UserAccountRequestBuilder, _super);
    function UserAccountRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `UserAccount` entity based on its keys.
     * @param username Key property. See [[UserAccount.username]].
     * @returns A request builder for creating requests to retrieve one `UserAccount` entity based on its keys.
     */
    UserAccountRequestBuilder.prototype.getByKey = function (username) {
        return new core_1.GetByKeyRequestBuilder(UserAccount_1.UserAccount, { username: username });
    };
    /**
     * Returns a request builder for querying all `UserAccount` entities.
     * @returns A request builder for creating requests to retrieve all `UserAccount` entities.
     */
    UserAccountRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(UserAccount_1.UserAccount);
    };
    return UserAccountRequestBuilder;
}(core_1.RequestBuilder));
exports.UserAccountRequestBuilder = UserAccountRequestBuilder;
//# sourceMappingURL=UserAccountRequestBuilder.js.map