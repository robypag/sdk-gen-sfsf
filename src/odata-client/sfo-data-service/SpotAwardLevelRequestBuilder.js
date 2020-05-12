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
var SpotAwardLevel_1 = require("./SpotAwardLevel");
/**
 * Request builder class for operations supported on the [[SpotAwardLevel]] entity.
 */
var SpotAwardLevelRequestBuilder = /** @class */ (function (_super) {
    __extends(SpotAwardLevelRequestBuilder, _super);
    function SpotAwardLevelRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `SpotAwardLevel` entity based on its keys.
     * @param spotAwardProgramExternalCode Key property. See [[SpotAwardLevel.spotAwardProgramExternalCode]].
     * @param externalCode Key property. See [[SpotAwardLevel.externalCode]].
     * @returns A request builder for creating requests to retrieve one `SpotAwardLevel` entity based on its keys.
     */
    SpotAwardLevelRequestBuilder.prototype.getByKey = function (spotAwardProgramExternalCode, externalCode) {
        return new core_1.GetByKeyRequestBuilder(SpotAwardLevel_1.SpotAwardLevel, {
            SpotAwardProgram_externalCode: spotAwardProgramExternalCode,
            externalCode: externalCode
        });
    };
    /**
     * Returns a request builder for querying all `SpotAwardLevel` entities.
     * @returns A request builder for creating requests to retrieve all `SpotAwardLevel` entities.
     */
    SpotAwardLevelRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(SpotAwardLevel_1.SpotAwardLevel);
    };
    /**
     * Returns a request builder for creating a `SpotAwardLevel` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `SpotAwardLevel`.
     */
    SpotAwardLevelRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(SpotAwardLevel_1.SpotAwardLevel, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `SpotAwardLevel`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `SpotAwardLevel`.
     */
    SpotAwardLevelRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(SpotAwardLevel_1.SpotAwardLevel, entity);
    };
    SpotAwardLevelRequestBuilder.prototype.delete = function (spotAwardProgramExternalCodeOrEntity, externalCode) {
        return new core_1.DeleteRequestBuilder(SpotAwardLevel_1.SpotAwardLevel, spotAwardProgramExternalCodeOrEntity instanceof SpotAwardLevel_1.SpotAwardLevel ? spotAwardProgramExternalCodeOrEntity : {
            SpotAwardProgram_externalCode: spotAwardProgramExternalCodeOrEntity,
            externalCode: externalCode
        });
    };
    return SpotAwardLevelRequestBuilder;
}(core_1.RequestBuilder));
exports.SpotAwardLevelRequestBuilder = SpotAwardLevelRequestBuilder;
//# sourceMappingURL=SpotAwardLevelRequestBuilder.js.map