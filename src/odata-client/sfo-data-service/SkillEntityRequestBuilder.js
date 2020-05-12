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
var SkillEntity_1 = require("./SkillEntity");
/**
 * Request builder class for operations supported on the [[SkillEntity]] entity.
 */
var SkillEntityRequestBuilder = /** @class */ (function (_super) {
    __extends(SkillEntityRequestBuilder, _super);
    function SkillEntityRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `SkillEntity` entity based on its keys.
     * @param externalCode Key property. See [[SkillEntity.externalCode]].
     * @returns A request builder for creating requests to retrieve one `SkillEntity` entity based on its keys.
     */
    SkillEntityRequestBuilder.prototype.getByKey = function (externalCode) {
        return new core_1.GetByKeyRequestBuilder(SkillEntity_1.SkillEntity, { externalCode: externalCode });
    };
    /**
     * Returns a request builder for querying all `SkillEntity` entities.
     * @returns A request builder for creating requests to retrieve all `SkillEntity` entities.
     */
    SkillEntityRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(SkillEntity_1.SkillEntity);
    };
    /**
     * Returns a request builder for creating a `SkillEntity` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `SkillEntity`.
     */
    SkillEntityRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(SkillEntity_1.SkillEntity, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `SkillEntity`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `SkillEntity`.
     */
    SkillEntityRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(SkillEntity_1.SkillEntity, entity);
    };
    SkillEntityRequestBuilder.prototype.delete = function (externalCodeOrEntity) {
        return new core_1.DeleteRequestBuilder(SkillEntity_1.SkillEntity, externalCodeOrEntity instanceof SkillEntity_1.SkillEntity ? externalCodeOrEntity : { externalCode: externalCodeOrEntity });
    };
    return SkillEntityRequestBuilder;
}(core_1.RequestBuilder));
exports.SkillEntityRequestBuilder = SkillEntityRequestBuilder;
//# sourceMappingURL=SkillEntityRequestBuilder.js.map