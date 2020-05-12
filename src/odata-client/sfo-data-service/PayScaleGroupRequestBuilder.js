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
var PayScaleGroup_1 = require("./PayScaleGroup");
/**
 * Request builder class for operations supported on the [[PayScaleGroup]] entity.
 */
var PayScaleGroupRequestBuilder = /** @class */ (function (_super) {
    __extends(PayScaleGroupRequestBuilder, _super);
    function PayScaleGroupRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `PayScaleGroup` entity based on its keys.
     * @param code Key property. See [[PayScaleGroup.code]].
     * @returns A request builder for creating requests to retrieve one `PayScaleGroup` entity based on its keys.
     */
    PayScaleGroupRequestBuilder.prototype.getByKey = function (code) {
        return new core_1.GetByKeyRequestBuilder(PayScaleGroup_1.PayScaleGroup, { code: code });
    };
    /**
     * Returns a request builder for querying all `PayScaleGroup` entities.
     * @returns A request builder for creating requests to retrieve all `PayScaleGroup` entities.
     */
    PayScaleGroupRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(PayScaleGroup_1.PayScaleGroup);
    };
    /**
     * Returns a request builder for creating a `PayScaleGroup` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PayScaleGroup`.
     */
    PayScaleGroupRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(PayScaleGroup_1.PayScaleGroup, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `PayScaleGroup`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PayScaleGroup`.
     */
    PayScaleGroupRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(PayScaleGroup_1.PayScaleGroup, entity);
    };
    PayScaleGroupRequestBuilder.prototype.delete = function (codeOrEntity) {
        return new core_1.DeleteRequestBuilder(PayScaleGroup_1.PayScaleGroup, codeOrEntity instanceof PayScaleGroup_1.PayScaleGroup ? codeOrEntity : { code: codeOrEntity });
    };
    return PayScaleGroupRequestBuilder;
}(core_1.RequestBuilder));
exports.PayScaleGroupRequestBuilder = PayScaleGroupRequestBuilder;
//# sourceMappingURL=PayScaleGroupRequestBuilder.js.map