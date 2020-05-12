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
var EmploymentConditionEntity_1 = require("./EmploymentConditionEntity");
/**
 * Request builder class for operations supported on the [[EmploymentConditionEntity]] entity.
 */
var EmploymentConditionEntityRequestBuilder = /** @class */ (function (_super) {
    __extends(EmploymentConditionEntityRequestBuilder, _super);
    function EmploymentConditionEntityRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `EmploymentConditionEntity` entity based on its keys.
     * @param externalCode Key property. See [[EmploymentConditionEntity.externalCode]].
     * @returns A request builder for creating requests to retrieve one `EmploymentConditionEntity` entity based on its keys.
     */
    EmploymentConditionEntityRequestBuilder.prototype.getByKey = function (externalCode) {
        return new core_1.GetByKeyRequestBuilder(EmploymentConditionEntity_1.EmploymentConditionEntity, { externalCode: externalCode });
    };
    /**
     * Returns a request builder for querying all `EmploymentConditionEntity` entities.
     * @returns A request builder for creating requests to retrieve all `EmploymentConditionEntity` entities.
     */
    EmploymentConditionEntityRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(EmploymentConditionEntity_1.EmploymentConditionEntity);
    };
    /**
     * Returns a request builder for creating a `EmploymentConditionEntity` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `EmploymentConditionEntity`.
     */
    EmploymentConditionEntityRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(EmploymentConditionEntity_1.EmploymentConditionEntity, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `EmploymentConditionEntity`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `EmploymentConditionEntity`.
     */
    EmploymentConditionEntityRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(EmploymentConditionEntity_1.EmploymentConditionEntity, entity);
    };
    EmploymentConditionEntityRequestBuilder.prototype.delete = function (externalCodeOrEntity) {
        return new core_1.DeleteRequestBuilder(EmploymentConditionEntity_1.EmploymentConditionEntity, externalCodeOrEntity instanceof EmploymentConditionEntity_1.EmploymentConditionEntity ? externalCodeOrEntity : { externalCode: externalCodeOrEntity });
    };
    return EmploymentConditionEntityRequestBuilder;
}(core_1.RequestBuilder));
exports.EmploymentConditionEntityRequestBuilder = EmploymentConditionEntityRequestBuilder;
//# sourceMappingURL=EmploymentConditionEntityRequestBuilder.js.map