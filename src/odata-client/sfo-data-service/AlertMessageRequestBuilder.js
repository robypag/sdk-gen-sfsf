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
var AlertMessage_1 = require("./AlertMessage");
/**
 * Request builder class for operations supported on the [[AlertMessage]] entity.
 */
var AlertMessageRequestBuilder = /** @class */ (function (_super) {
    __extends(AlertMessageRequestBuilder, _super);
    function AlertMessageRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `AlertMessage` entity based on its keys.
     * @param externalCode Key property. See [[AlertMessage.externalCode]].
     * @returns A request builder for creating requests to retrieve one `AlertMessage` entity based on its keys.
     */
    AlertMessageRequestBuilder.prototype.getByKey = function (externalCode) {
        return new core_1.GetByKeyRequestBuilder(AlertMessage_1.AlertMessage, { externalCode: externalCode });
    };
    /**
     * Returns a request builder for querying all `AlertMessage` entities.
     * @returns A request builder for creating requests to retrieve all `AlertMessage` entities.
     */
    AlertMessageRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(AlertMessage_1.AlertMessage);
    };
    /**
     * Returns a request builder for creating a `AlertMessage` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `AlertMessage`.
     */
    AlertMessageRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(AlertMessage_1.AlertMessage, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `AlertMessage`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `AlertMessage`.
     */
    AlertMessageRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(AlertMessage_1.AlertMessage, entity);
    };
    AlertMessageRequestBuilder.prototype.delete = function (externalCodeOrEntity) {
        return new core_1.DeleteRequestBuilder(AlertMessage_1.AlertMessage, externalCodeOrEntity instanceof AlertMessage_1.AlertMessage ? externalCodeOrEntity : { externalCode: externalCodeOrEntity });
    };
    return AlertMessageRequestBuilder;
}(core_1.RequestBuilder));
exports.AlertMessageRequestBuilder = AlertMessageRequestBuilder;
//# sourceMappingURL=AlertMessageRequestBuilder.js.map