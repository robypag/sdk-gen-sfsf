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
var UpsertResult_1 = require("./UpsertResult");
/**
 * Request builder class for operations supported on the [[UpsertResult]] entity.
 */
var UpsertResultRequestBuilder = /** @class */ (function (_super) {
    __extends(UpsertResultRequestBuilder, _super);
    function UpsertResultRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `UpsertResult` entity based on its keys.
     * @param key Key property. See [[UpsertResult.key]].
     * @returns A request builder for creating requests to retrieve one `UpsertResult` entity based on its keys.
     */
    UpsertResultRequestBuilder.prototype.getByKey = function (key) {
        return new core_1.GetByKeyRequestBuilder(UpsertResult_1.UpsertResult, { key: key });
    };
    /**
     * Returns a request builder for querying all `UpsertResult` entities.
     * @returns A request builder for creating requests to retrieve all `UpsertResult` entities.
     */
    UpsertResultRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(UpsertResult_1.UpsertResult);
    };
    /**
     * Returns a request builder for creating a `UpsertResult` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `UpsertResult`.
     */
    UpsertResultRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(UpsertResult_1.UpsertResult, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `UpsertResult`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `UpsertResult`.
     */
    UpsertResultRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(UpsertResult_1.UpsertResult, entity);
    };
    UpsertResultRequestBuilder.prototype.delete = function (keyOrEntity) {
        return new core_1.DeleteRequestBuilder(UpsertResult_1.UpsertResult, keyOrEntity instanceof UpsertResult_1.UpsertResult ? keyOrEntity : { key: keyOrEntity });
    };
    return UpsertResultRequestBuilder;
}(core_1.RequestBuilder));
exports.UpsertResultRequestBuilder = UpsertResultRequestBuilder;
//# sourceMappingURL=UpsertResultRequestBuilder.js.map