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
var SpotAwardCategory_1 = require("./SpotAwardCategory");
/**
 * Request builder class for operations supported on the [[SpotAwardCategory]] entity.
 */
var SpotAwardCategoryRequestBuilder = /** @class */ (function (_super) {
    __extends(SpotAwardCategoryRequestBuilder, _super);
    function SpotAwardCategoryRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `SpotAwardCategory` entity based on its keys.
     * @param spotAwardProgramExternalCode Key property. See [[SpotAwardCategory.spotAwardProgramExternalCode]].
     * @param externalCode Key property. See [[SpotAwardCategory.externalCode]].
     * @returns A request builder for creating requests to retrieve one `SpotAwardCategory` entity based on its keys.
     */
    SpotAwardCategoryRequestBuilder.prototype.getByKey = function (spotAwardProgramExternalCode, externalCode) {
        return new core_1.GetByKeyRequestBuilder(SpotAwardCategory_1.SpotAwardCategory, {
            SpotAwardProgram_externalCode: spotAwardProgramExternalCode,
            externalCode: externalCode
        });
    };
    /**
     * Returns a request builder for querying all `SpotAwardCategory` entities.
     * @returns A request builder for creating requests to retrieve all `SpotAwardCategory` entities.
     */
    SpotAwardCategoryRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(SpotAwardCategory_1.SpotAwardCategory);
    };
    /**
     * Returns a request builder for creating a `SpotAwardCategory` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `SpotAwardCategory`.
     */
    SpotAwardCategoryRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(SpotAwardCategory_1.SpotAwardCategory, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `SpotAwardCategory`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `SpotAwardCategory`.
     */
    SpotAwardCategoryRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(SpotAwardCategory_1.SpotAwardCategory, entity);
    };
    SpotAwardCategoryRequestBuilder.prototype.delete = function (spotAwardProgramExternalCodeOrEntity, externalCode) {
        return new core_1.DeleteRequestBuilder(SpotAwardCategory_1.SpotAwardCategory, spotAwardProgramExternalCodeOrEntity instanceof SpotAwardCategory_1.SpotAwardCategory ? spotAwardProgramExternalCodeOrEntity : {
            SpotAwardProgram_externalCode: spotAwardProgramExternalCodeOrEntity,
            externalCode: externalCode
        });
    };
    return SpotAwardCategoryRequestBuilder;
}(core_1.RequestBuilder));
exports.SpotAwardCategoryRequestBuilder = SpotAwardCategoryRequestBuilder;
//# sourceMappingURL=SpotAwardCategoryRequestBuilder.js.map