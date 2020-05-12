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
var AutoDelegateDetail_1 = require("./AutoDelegateDetail");
/**
 * Request builder class for operations supported on the [[AutoDelegateDetail]] entity.
 */
var AutoDelegateDetailRequestBuilder = /** @class */ (function (_super) {
    __extends(AutoDelegateDetailRequestBuilder, _super);
    function AutoDelegateDetailRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `AutoDelegateDetail` entity based on its keys.
     * @param autoDelegateConfigDelegator Key property. See [[AutoDelegateDetail.autoDelegateConfigDelegator]].
     * @param externalCode Key property. See [[AutoDelegateDetail.externalCode]].
     * @returns A request builder for creating requests to retrieve one `AutoDelegateDetail` entity based on its keys.
     */
    AutoDelegateDetailRequestBuilder.prototype.getByKey = function (autoDelegateConfigDelegator, externalCode) {
        return new core_1.GetByKeyRequestBuilder(AutoDelegateDetail_1.AutoDelegateDetail, {
            AutoDelegateConfig_delegator: autoDelegateConfigDelegator,
            externalCode: externalCode
        });
    };
    /**
     * Returns a request builder for querying all `AutoDelegateDetail` entities.
     * @returns A request builder for creating requests to retrieve all `AutoDelegateDetail` entities.
     */
    AutoDelegateDetailRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(AutoDelegateDetail_1.AutoDelegateDetail);
    };
    /**
     * Returns a request builder for creating a `AutoDelegateDetail` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `AutoDelegateDetail`.
     */
    AutoDelegateDetailRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(AutoDelegateDetail_1.AutoDelegateDetail, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `AutoDelegateDetail`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `AutoDelegateDetail`.
     */
    AutoDelegateDetailRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(AutoDelegateDetail_1.AutoDelegateDetail, entity);
    };
    AutoDelegateDetailRequestBuilder.prototype.delete = function (autoDelegateConfigDelegatorOrEntity, externalCode) {
        return new core_1.DeleteRequestBuilder(AutoDelegateDetail_1.AutoDelegateDetail, autoDelegateConfigDelegatorOrEntity instanceof AutoDelegateDetail_1.AutoDelegateDetail ? autoDelegateConfigDelegatorOrEntity : {
            AutoDelegateConfig_delegator: autoDelegateConfigDelegatorOrEntity,
            externalCode: externalCode
        });
    };
    return AutoDelegateDetailRequestBuilder;
}(core_1.RequestBuilder));
exports.AutoDelegateDetailRequestBuilder = AutoDelegateDetailRequestBuilder;
//# sourceMappingURL=AutoDelegateDetailRequestBuilder.js.map