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
var ExternalLearner_1 = require("./ExternalLearner");
/**
 * Request builder class for operations supported on the [[ExternalLearner]] entity.
 */
var ExternalLearnerRequestBuilder = /** @class */ (function (_super) {
    __extends(ExternalLearnerRequestBuilder, _super);
    function ExternalLearnerRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `ExternalLearner` entity based on its keys.
     * @param userId Key property. See [[ExternalLearner.userId]].
     * @returns A request builder for creating requests to retrieve one `ExternalLearner` entity based on its keys.
     */
    ExternalLearnerRequestBuilder.prototype.getByKey = function (userId) {
        return new core_1.GetByKeyRequestBuilder(ExternalLearner_1.ExternalLearner, { userId: userId });
    };
    /**
     * Returns a request builder for querying all `ExternalLearner` entities.
     * @returns A request builder for creating requests to retrieve all `ExternalLearner` entities.
     */
    ExternalLearnerRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(ExternalLearner_1.ExternalLearner);
    };
    /**
     * Returns a request builder for creating a `ExternalLearner` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ExternalLearner`.
     */
    ExternalLearnerRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(ExternalLearner_1.ExternalLearner, entity);
    };
    return ExternalLearnerRequestBuilder;
}(core_1.RequestBuilder));
exports.ExternalLearnerRequestBuilder = ExternalLearnerRequestBuilder;
//# sourceMappingURL=ExternalLearnerRequestBuilder.js.map