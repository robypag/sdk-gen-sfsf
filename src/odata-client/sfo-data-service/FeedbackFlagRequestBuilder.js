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
var FeedbackFlag_1 = require("./FeedbackFlag");
/**
 * Request builder class for operations supported on the [[FeedbackFlag]] entity.
 */
var FeedbackFlagRequestBuilder = /** @class */ (function (_super) {
    __extends(FeedbackFlagRequestBuilder, _super);
    function FeedbackFlagRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `FeedbackFlag` entity based on its keys.
     * @param feedbackFlagId Key property. See [[FeedbackFlag.feedbackFlagId]].
     * @returns A request builder for creating requests to retrieve one `FeedbackFlag` entity based on its keys.
     */
    FeedbackFlagRequestBuilder.prototype.getByKey = function (feedbackFlagId) {
        return new core_1.GetByKeyRequestBuilder(FeedbackFlag_1.FeedbackFlag, { feedbackFlagId: feedbackFlagId });
    };
    /**
     * Returns a request builder for querying all `FeedbackFlag` entities.
     * @returns A request builder for creating requests to retrieve all `FeedbackFlag` entities.
     */
    FeedbackFlagRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(FeedbackFlag_1.FeedbackFlag);
    };
    /**
     * Returns a request builder for creating a `FeedbackFlag` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `FeedbackFlag`.
     */
    FeedbackFlagRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(FeedbackFlag_1.FeedbackFlag, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `FeedbackFlag`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `FeedbackFlag`.
     */
    FeedbackFlagRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(FeedbackFlag_1.FeedbackFlag, entity);
    };
    FeedbackFlagRequestBuilder.prototype.delete = function (feedbackFlagIdOrEntity) {
        return new core_1.DeleteRequestBuilder(FeedbackFlag_1.FeedbackFlag, feedbackFlagIdOrEntity instanceof FeedbackFlag_1.FeedbackFlag ? feedbackFlagIdOrEntity : { feedbackFlagId: feedbackFlagIdOrEntity });
    };
    return FeedbackFlagRequestBuilder;
}(core_1.RequestBuilder));
exports.FeedbackFlagRequestBuilder = FeedbackFlagRequestBuilder;
//# sourceMappingURL=FeedbackFlagRequestBuilder.js.map