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
var ReplicationTargetSystem_1 = require("./ReplicationTargetSystem");
/**
 * Request builder class for operations supported on the [[ReplicationTargetSystem]] entity.
 */
var ReplicationTargetSystemRequestBuilder = /** @class */ (function (_super) {
    __extends(ReplicationTargetSystemRequestBuilder, _super);
    function ReplicationTargetSystemRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `ReplicationTargetSystem` entity based on its keys.
     * @param externalCode Key property. See [[ReplicationTargetSystem.externalCode]].
     * @returns A request builder for creating requests to retrieve one `ReplicationTargetSystem` entity based on its keys.
     */
    ReplicationTargetSystemRequestBuilder.prototype.getByKey = function (externalCode) {
        return new core_1.GetByKeyRequestBuilder(ReplicationTargetSystem_1.ReplicationTargetSystem, { externalCode: externalCode });
    };
    /**
     * Returns a request builder for querying all `ReplicationTargetSystem` entities.
     * @returns A request builder for creating requests to retrieve all `ReplicationTargetSystem` entities.
     */
    ReplicationTargetSystemRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(ReplicationTargetSystem_1.ReplicationTargetSystem);
    };
    /**
     * Returns a request builder for creating a `ReplicationTargetSystem` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ReplicationTargetSystem`.
     */
    ReplicationTargetSystemRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(ReplicationTargetSystem_1.ReplicationTargetSystem, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `ReplicationTargetSystem`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ReplicationTargetSystem`.
     */
    ReplicationTargetSystemRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(ReplicationTargetSystem_1.ReplicationTargetSystem, entity);
    };
    ReplicationTargetSystemRequestBuilder.prototype.delete = function (externalCodeOrEntity) {
        return new core_1.DeleteRequestBuilder(ReplicationTargetSystem_1.ReplicationTargetSystem, externalCodeOrEntity instanceof ReplicationTargetSystem_1.ReplicationTargetSystem ? externalCodeOrEntity : { externalCode: externalCodeOrEntity });
    };
    return ReplicationTargetSystemRequestBuilder;
}(core_1.RequestBuilder));
exports.ReplicationTargetSystemRequestBuilder = ReplicationTargetSystemRequestBuilder;
//# sourceMappingURL=ReplicationTargetSystemRequestBuilder.js.map