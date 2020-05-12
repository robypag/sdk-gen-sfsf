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
var RoleEntity_1 = require("./RoleEntity");
/**
 * Request builder class for operations supported on the [[RoleEntity]] entity.
 */
var RoleEntityRequestBuilder = /** @class */ (function (_super) {
    __extends(RoleEntityRequestBuilder, _super);
    function RoleEntityRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `RoleEntity` entity based on its keys.
     * @param externalCode Key property. See [[RoleEntity.externalCode]].
     * @returns A request builder for creating requests to retrieve one `RoleEntity` entity based on its keys.
     */
    RoleEntityRequestBuilder.prototype.getByKey = function (externalCode) {
        return new core_1.GetByKeyRequestBuilder(RoleEntity_1.RoleEntity, { externalCode: externalCode });
    };
    /**
     * Returns a request builder for querying all `RoleEntity` entities.
     * @returns A request builder for creating requests to retrieve all `RoleEntity` entities.
     */
    RoleEntityRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(RoleEntity_1.RoleEntity);
    };
    /**
     * Returns a request builder for creating a `RoleEntity` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `RoleEntity`.
     */
    RoleEntityRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(RoleEntity_1.RoleEntity, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `RoleEntity`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `RoleEntity`.
     */
    RoleEntityRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(RoleEntity_1.RoleEntity, entity);
    };
    RoleEntityRequestBuilder.prototype.delete = function (externalCodeOrEntity) {
        return new core_1.DeleteRequestBuilder(RoleEntity_1.RoleEntity, externalCodeOrEntity instanceof RoleEntity_1.RoleEntity ? externalCodeOrEntity : { externalCode: externalCodeOrEntity });
    };
    return RoleEntityRequestBuilder;
}(core_1.RequestBuilder));
exports.RoleEntityRequestBuilder = RoleEntityRequestBuilder;
//# sourceMappingURL=RoleEntityRequestBuilder.js.map