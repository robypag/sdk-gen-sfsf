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
var User_1 = require("./User");
/**
 * Request builder class for operations supported on the [[User]] entity.
 */
var UserRequestBuilder = /** @class */ (function (_super) {
    __extends(UserRequestBuilder, _super);
    function UserRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `User` entity based on its keys.
     * @param userId Key property. See [[User.userId]].
     * @returns A request builder for creating requests to retrieve one `User` entity based on its keys.
     */
    UserRequestBuilder.prototype.getByKey = function (userId) {
        return new core_1.GetByKeyRequestBuilder(User_1.User, { userId: userId });
    };
    /**
     * Returns a request builder for querying all `User` entities.
     * @returns A request builder for creating requests to retrieve all `User` entities.
     */
    UserRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(User_1.User);
    };
    /**
     * Returns a request builder for creating a `User` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `User`.
     */
    UserRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(User_1.User, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `User`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `User`.
     */
    UserRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(User_1.User, entity);
    };
    return UserRequestBuilder;
}(core_1.RequestBuilder));
exports.UserRequestBuilder = UserRequestBuilder;
//# sourceMappingURL=UserRequestBuilder.js.map