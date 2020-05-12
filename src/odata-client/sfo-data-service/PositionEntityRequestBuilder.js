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
var PositionEntity_1 = require("./PositionEntity");
/**
 * Request builder class for operations supported on the [[PositionEntity]] entity.
 */
var PositionEntityRequestBuilder = /** @class */ (function (_super) {
    __extends(PositionEntityRequestBuilder, _super);
    function PositionEntityRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `PositionEntity` entity based on its keys.
     * @param externalCode Key property. See [[PositionEntity.externalCode]].
     * @returns A request builder for creating requests to retrieve one `PositionEntity` entity based on its keys.
     */
    PositionEntityRequestBuilder.prototype.getByKey = function (externalCode) {
        return new core_1.GetByKeyRequestBuilder(PositionEntity_1.PositionEntity, { externalCode: externalCode });
    };
    /**
     * Returns a request builder for querying all `PositionEntity` entities.
     * @returns A request builder for creating requests to retrieve all `PositionEntity` entities.
     */
    PositionEntityRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(PositionEntity_1.PositionEntity);
    };
    /**
     * Returns a request builder for creating a `PositionEntity` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PositionEntity`.
     */
    PositionEntityRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(PositionEntity_1.PositionEntity, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `PositionEntity`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PositionEntity`.
     */
    PositionEntityRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(PositionEntity_1.PositionEntity, entity);
    };
    PositionEntityRequestBuilder.prototype.delete = function (externalCodeOrEntity) {
        return new core_1.DeleteRequestBuilder(PositionEntity_1.PositionEntity, externalCodeOrEntity instanceof PositionEntity_1.PositionEntity ? externalCodeOrEntity : { externalCode: externalCodeOrEntity });
    };
    return PositionEntityRequestBuilder;
}(core_1.RequestBuilder));
exports.PositionEntityRequestBuilder = PositionEntityRequestBuilder;
//# sourceMappingURL=PositionEntityRequestBuilder.js.map