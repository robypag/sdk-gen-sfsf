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
var EpPublicProfile_1 = require("./EpPublicProfile");
/**
 * Request builder class for operations supported on the [[EpPublicProfile]] entity.
 */
var EpPublicProfileRequestBuilder = /** @class */ (function (_super) {
    __extends(EpPublicProfileRequestBuilder, _super);
    function EpPublicProfileRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `EpPublicProfile` entity based on its keys.
     * @param userId Key property. See [[EpPublicProfile.userId]].
     * @returns A request builder for creating requests to retrieve one `EpPublicProfile` entity based on its keys.
     */
    EpPublicProfileRequestBuilder.prototype.getByKey = function (userId) {
        return new core_1.GetByKeyRequestBuilder(EpPublicProfile_1.EpPublicProfile, { userId: userId });
    };
    /**
     * Returns a request builder for querying all `EpPublicProfile` entities.
     * @returns A request builder for creating requests to retrieve all `EpPublicProfile` entities.
     */
    EpPublicProfileRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(EpPublicProfile_1.EpPublicProfile);
    };
    /**
     * Returns a request builder for creating a `EpPublicProfile` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `EpPublicProfile`.
     */
    EpPublicProfileRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(EpPublicProfile_1.EpPublicProfile, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `EpPublicProfile`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `EpPublicProfile`.
     */
    EpPublicProfileRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(EpPublicProfile_1.EpPublicProfile, entity);
    };
    EpPublicProfileRequestBuilder.prototype.delete = function (userIdOrEntity) {
        return new core_1.DeleteRequestBuilder(EpPublicProfile_1.EpPublicProfile, userIdOrEntity instanceof EpPublicProfile_1.EpPublicProfile ? userIdOrEntity : { userId: userIdOrEntity });
    };
    return EpPublicProfileRequestBuilder;
}(core_1.RequestBuilder));
exports.EpPublicProfileRequestBuilder = EpPublicProfileRequestBuilder;
//# sourceMappingURL=EpPublicProfileRequestBuilder.js.map