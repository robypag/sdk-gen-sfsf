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
var CustomPayType_1 = require("./CustomPayType");
/**
 * Request builder class for operations supported on the [[CustomPayType]] entity.
 */
var CustomPayTypeRequestBuilder = /** @class */ (function (_super) {
    __extends(CustomPayTypeRequestBuilder, _super);
    function CustomPayTypeRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `CustomPayType` entity based on its keys.
     * @param externalCode Key property. See [[CustomPayType.externalCode]].
     * @returns A request builder for creating requests to retrieve one `CustomPayType` entity based on its keys.
     */
    CustomPayTypeRequestBuilder.prototype.getByKey = function (externalCode) {
        return new core_1.GetByKeyRequestBuilder(CustomPayType_1.CustomPayType, { externalCode: externalCode });
    };
    /**
     * Returns a request builder for querying all `CustomPayType` entities.
     * @returns A request builder for creating requests to retrieve all `CustomPayType` entities.
     */
    CustomPayTypeRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(CustomPayType_1.CustomPayType);
    };
    /**
     * Returns a request builder for creating a `CustomPayType` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `CustomPayType`.
     */
    CustomPayTypeRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(CustomPayType_1.CustomPayType, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `CustomPayType`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `CustomPayType`.
     */
    CustomPayTypeRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(CustomPayType_1.CustomPayType, entity);
    };
    CustomPayTypeRequestBuilder.prototype.delete = function (externalCodeOrEntity) {
        return new core_1.DeleteRequestBuilder(CustomPayType_1.CustomPayType, externalCodeOrEntity instanceof CustomPayType_1.CustomPayType ? externalCodeOrEntity : { externalCode: externalCodeOrEntity });
    };
    return CustomPayTypeRequestBuilder;
}(core_1.RequestBuilder));
exports.CustomPayTypeRequestBuilder = CustomPayTypeRequestBuilder;
//# sourceMappingURL=CustomPayTypeRequestBuilder.js.map