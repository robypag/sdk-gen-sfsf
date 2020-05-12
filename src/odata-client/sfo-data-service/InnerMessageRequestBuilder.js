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
var InnerMessage_1 = require("./InnerMessage");
/**
 * Request builder class for operations supported on the [[InnerMessage]] entity.
 */
var InnerMessageRequestBuilder = /** @class */ (function (_super) {
    __extends(InnerMessageRequestBuilder, _super);
    function InnerMessageRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `InnerMessage` entity based on its keys.
     * @param key Key property. See [[InnerMessage.key]].
     * @returns A request builder for creating requests to retrieve one `InnerMessage` entity based on its keys.
     */
    InnerMessageRequestBuilder.prototype.getByKey = function (key) {
        return new core_1.GetByKeyRequestBuilder(InnerMessage_1.InnerMessage, { key: key });
    };
    /**
     * Returns a request builder for querying all `InnerMessage` entities.
     * @returns A request builder for creating requests to retrieve all `InnerMessage` entities.
     */
    InnerMessageRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(InnerMessage_1.InnerMessage);
    };
    /**
     * Returns a request builder for creating a `InnerMessage` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `InnerMessage`.
     */
    InnerMessageRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(InnerMessage_1.InnerMessage, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `InnerMessage`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `InnerMessage`.
     */
    InnerMessageRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(InnerMessage_1.InnerMessage, entity);
    };
    InnerMessageRequestBuilder.prototype.delete = function (keyOrEntity) {
        return new core_1.DeleteRequestBuilder(InnerMessage_1.InnerMessage, keyOrEntity instanceof InnerMessage_1.InnerMessage ? keyOrEntity : { key: keyOrEntity });
    };
    return InnerMessageRequestBuilder;
}(core_1.RequestBuilder));
exports.InnerMessageRequestBuilder = InnerMessageRequestBuilder;
//# sourceMappingURL=InnerMessageRequestBuilder.js.map