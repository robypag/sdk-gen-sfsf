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
var ExternalUser_1 = require("./ExternalUser");
/**
 * Request builder class for operations supported on the [[ExternalUser]] entity.
 */
var ExternalUserRequestBuilder = /** @class */ (function (_super) {
    __extends(ExternalUserRequestBuilder, _super);
    function ExternalUserRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `ExternalUser` entity based on its keys.
     * @param userId Key property. See [[ExternalUser.userId]].
     * @returns A request builder for creating requests to retrieve one `ExternalUser` entity based on its keys.
     */
    ExternalUserRequestBuilder.prototype.getByKey = function (userId) {
        return new core_1.GetByKeyRequestBuilder(ExternalUser_1.ExternalUser, { userId: userId });
    };
    /**
     * Returns a request builder for querying all `ExternalUser` entities.
     * @returns A request builder for creating requests to retrieve all `ExternalUser` entities.
     */
    ExternalUserRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(ExternalUser_1.ExternalUser);
    };
    /**
     * Returns a request builder for creating a `ExternalUser` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ExternalUser`.
     */
    ExternalUserRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(ExternalUser_1.ExternalUser, entity);
    };
    return ExternalUserRequestBuilder;
}(core_1.RequestBuilder));
exports.ExternalUserRequestBuilder = ExternalUserRequestBuilder;
//# sourceMappingURL=ExternalUserRequestBuilder.js.map