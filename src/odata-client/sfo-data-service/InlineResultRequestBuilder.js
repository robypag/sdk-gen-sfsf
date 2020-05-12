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
var InlineResult_1 = require("./InlineResult");
/**
 * Request builder class for operations supported on the [[InlineResult]] entity.
 */
var InlineResultRequestBuilder = /** @class */ (function (_super) {
    __extends(InlineResultRequestBuilder, _super);
    function InlineResultRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `InlineResult` entity based on its keys.
     * @param inlineProperty Key property. See [[InlineResult.inlineProperty]].
     * @returns A request builder for creating requests to retrieve one `InlineResult` entity based on its keys.
     */
    InlineResultRequestBuilder.prototype.getByKey = function (inlineProperty) {
        return new core_1.GetByKeyRequestBuilder(InlineResult_1.InlineResult, { inlineProperty: inlineProperty });
    };
    /**
     * Returns a request builder for querying all `InlineResult` entities.
     * @returns A request builder for creating requests to retrieve all `InlineResult` entities.
     */
    InlineResultRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(InlineResult_1.InlineResult);
    };
    /**
     * Returns a request builder for creating a `InlineResult` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `InlineResult`.
     */
    InlineResultRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(InlineResult_1.InlineResult, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `InlineResult`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `InlineResult`.
     */
    InlineResultRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(InlineResult_1.InlineResult, entity);
    };
    InlineResultRequestBuilder.prototype.delete = function (inlinePropertyOrEntity) {
        return new core_1.DeleteRequestBuilder(InlineResult_1.InlineResult, inlinePropertyOrEntity instanceof InlineResult_1.InlineResult ? inlinePropertyOrEntity : { inlineProperty: inlinePropertyOrEntity });
    };
    return InlineResultRequestBuilder;
}(core_1.RequestBuilder));
exports.InlineResultRequestBuilder = InlineResultRequestBuilder;
//# sourceMappingURL=InlineResultRequestBuilder.js.map