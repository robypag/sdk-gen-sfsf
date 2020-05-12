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
var MessageDetail_1 = require("./MessageDetail");
/**
 * Request builder class for operations supported on the [[MessageDetail]] entity.
 */
var MessageDetailRequestBuilder = /** @class */ (function (_super) {
    __extends(MessageDetailRequestBuilder, _super);
    function MessageDetailRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `MessageDetail` entity based on its keys.
     * @param code Key property. See [[MessageDetail.code]].
     * @returns A request builder for creating requests to retrieve one `MessageDetail` entity based on its keys.
     */
    MessageDetailRequestBuilder.prototype.getByKey = function (code) {
        return new core_1.GetByKeyRequestBuilder(MessageDetail_1.MessageDetail, { code: code });
    };
    /**
     * Returns a request builder for querying all `MessageDetail` entities.
     * @returns A request builder for creating requests to retrieve all `MessageDetail` entities.
     */
    MessageDetailRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(MessageDetail_1.MessageDetail);
    };
    /**
     * Returns a request builder for creating a `MessageDetail` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `MessageDetail`.
     */
    MessageDetailRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(MessageDetail_1.MessageDetail, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `MessageDetail`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `MessageDetail`.
     */
    MessageDetailRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(MessageDetail_1.MessageDetail, entity);
    };
    MessageDetailRequestBuilder.prototype.delete = function (codeOrEntity) {
        return new core_1.DeleteRequestBuilder(MessageDetail_1.MessageDetail, codeOrEntity instanceof MessageDetail_1.MessageDetail ? codeOrEntity : { code: codeOrEntity });
    };
    return MessageDetailRequestBuilder;
}(core_1.RequestBuilder));
exports.MessageDetailRequestBuilder = MessageDetailRequestBuilder;
//# sourceMappingURL=MessageDetailRequestBuilder.js.map