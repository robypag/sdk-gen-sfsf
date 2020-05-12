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
var PayScaleType_1 = require("./PayScaleType");
/**
 * Request builder class for operations supported on the [[PayScaleType]] entity.
 */
var PayScaleTypeRequestBuilder = /** @class */ (function (_super) {
    __extends(PayScaleTypeRequestBuilder, _super);
    function PayScaleTypeRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `PayScaleType` entity based on its keys.
     * @param code Key property. See [[PayScaleType.code]].
     * @returns A request builder for creating requests to retrieve one `PayScaleType` entity based on its keys.
     */
    PayScaleTypeRequestBuilder.prototype.getByKey = function (code) {
        return new core_1.GetByKeyRequestBuilder(PayScaleType_1.PayScaleType, { code: code });
    };
    /**
     * Returns a request builder for querying all `PayScaleType` entities.
     * @returns A request builder for creating requests to retrieve all `PayScaleType` entities.
     */
    PayScaleTypeRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(PayScaleType_1.PayScaleType);
    };
    /**
     * Returns a request builder for creating a `PayScaleType` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PayScaleType`.
     */
    PayScaleTypeRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(PayScaleType_1.PayScaleType, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `PayScaleType`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PayScaleType`.
     */
    PayScaleTypeRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(PayScaleType_1.PayScaleType, entity);
    };
    PayScaleTypeRequestBuilder.prototype.delete = function (codeOrEntity) {
        return new core_1.DeleteRequestBuilder(PayScaleType_1.PayScaleType, codeOrEntity instanceof PayScaleType_1.PayScaleType ? codeOrEntity : { code: codeOrEntity });
    };
    return PayScaleTypeRequestBuilder;
}(core_1.RequestBuilder));
exports.PayScaleTypeRequestBuilder = PayScaleTypeRequestBuilder;
//# sourceMappingURL=PayScaleTypeRequestBuilder.js.map