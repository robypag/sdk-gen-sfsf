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
var PayScaleArea_1 = require("./PayScaleArea");
/**
 * Request builder class for operations supported on the [[PayScaleArea]] entity.
 */
var PayScaleAreaRequestBuilder = /** @class */ (function (_super) {
    __extends(PayScaleAreaRequestBuilder, _super);
    function PayScaleAreaRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `PayScaleArea` entity based on its keys.
     * @param code Key property. See [[PayScaleArea.code]].
     * @returns A request builder for creating requests to retrieve one `PayScaleArea` entity based on its keys.
     */
    PayScaleAreaRequestBuilder.prototype.getByKey = function (code) {
        return new core_1.GetByKeyRequestBuilder(PayScaleArea_1.PayScaleArea, { code: code });
    };
    /**
     * Returns a request builder for querying all `PayScaleArea` entities.
     * @returns A request builder for creating requests to retrieve all `PayScaleArea` entities.
     */
    PayScaleAreaRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(PayScaleArea_1.PayScaleArea);
    };
    /**
     * Returns a request builder for creating a `PayScaleArea` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PayScaleArea`.
     */
    PayScaleAreaRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(PayScaleArea_1.PayScaleArea, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `PayScaleArea`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PayScaleArea`.
     */
    PayScaleAreaRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(PayScaleArea_1.PayScaleArea, entity);
    };
    PayScaleAreaRequestBuilder.prototype.delete = function (codeOrEntity) {
        return new core_1.DeleteRequestBuilder(PayScaleArea_1.PayScaleArea, codeOrEntity instanceof PayScaleArea_1.PayScaleArea ? codeOrEntity : { code: codeOrEntity });
    };
    return PayScaleAreaRequestBuilder;
}(core_1.RequestBuilder));
exports.PayScaleAreaRequestBuilder = PayScaleAreaRequestBuilder;
//# sourceMappingURL=PayScaleAreaRequestBuilder.js.map