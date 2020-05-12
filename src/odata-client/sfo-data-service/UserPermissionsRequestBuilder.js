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
var UserPermissions_1 = require("./UserPermissions");
/**
 * Request builder class for operations supported on the [[UserPermissions]] entity.
 */
var UserPermissionsRequestBuilder = /** @class */ (function (_super) {
    __extends(UserPermissionsRequestBuilder, _super);
    function UserPermissionsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `UserPermissions` entity based on its keys.
     * @param userId Key property. See [[UserPermissions.userId]].
     * @returns A request builder for creating requests to retrieve one `UserPermissions` entity based on its keys.
     */
    UserPermissionsRequestBuilder.prototype.getByKey = function (userId) {
        return new core_1.GetByKeyRequestBuilder(UserPermissions_1.UserPermissions, { userId: userId });
    };
    /**
     * Returns a request builder for querying all `UserPermissions` entities.
     * @returns A request builder for creating requests to retrieve all `UserPermissions` entities.
     */
    UserPermissionsRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(UserPermissions_1.UserPermissions);
    };
    return UserPermissionsRequestBuilder;
}(core_1.RequestBuilder));
exports.UserPermissionsRequestBuilder = UserPermissionsRequestBuilder;
//# sourceMappingURL=UserPermissionsRequestBuilder.js.map