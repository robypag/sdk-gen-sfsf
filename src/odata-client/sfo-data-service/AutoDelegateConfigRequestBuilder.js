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
var AutoDelegateConfig_1 = require("./AutoDelegateConfig");
/**
 * Request builder class for operations supported on the [[AutoDelegateConfig]] entity.
 */
var AutoDelegateConfigRequestBuilder = /** @class */ (function (_super) {
    __extends(AutoDelegateConfigRequestBuilder, _super);
    function AutoDelegateConfigRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `AutoDelegateConfig` entity based on its keys.
     * @param delegator Key property. See [[AutoDelegateConfig.delegator]].
     * @returns A request builder for creating requests to retrieve one `AutoDelegateConfig` entity based on its keys.
     */
    AutoDelegateConfigRequestBuilder.prototype.getByKey = function (delegator) {
        return new core_1.GetByKeyRequestBuilder(AutoDelegateConfig_1.AutoDelegateConfig, { delegator: delegator });
    };
    /**
     * Returns a request builder for querying all `AutoDelegateConfig` entities.
     * @returns A request builder for creating requests to retrieve all `AutoDelegateConfig` entities.
     */
    AutoDelegateConfigRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(AutoDelegateConfig_1.AutoDelegateConfig);
    };
    /**
     * Returns a request builder for creating a `AutoDelegateConfig` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `AutoDelegateConfig`.
     */
    AutoDelegateConfigRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(AutoDelegateConfig_1.AutoDelegateConfig, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `AutoDelegateConfig`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `AutoDelegateConfig`.
     */
    AutoDelegateConfigRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(AutoDelegateConfig_1.AutoDelegateConfig, entity);
    };
    AutoDelegateConfigRequestBuilder.prototype.delete = function (delegatorOrEntity) {
        return new core_1.DeleteRequestBuilder(AutoDelegateConfig_1.AutoDelegateConfig, delegatorOrEntity instanceof AutoDelegateConfig_1.AutoDelegateConfig ? delegatorOrEntity : { delegator: delegatorOrEntity });
    };
    return AutoDelegateConfigRequestBuilder;
}(core_1.RequestBuilder));
exports.AutoDelegateConfigRequestBuilder = AutoDelegateConfigRequestBuilder;
//# sourceMappingURL=AutoDelegateConfigRequestBuilder.js.map