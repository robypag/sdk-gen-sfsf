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
var SpotAwardProgram_1 = require("./SpotAwardProgram");
/**
 * Request builder class for operations supported on the [[SpotAwardProgram]] entity.
 */
var SpotAwardProgramRequestBuilder = /** @class */ (function (_super) {
    __extends(SpotAwardProgramRequestBuilder, _super);
    function SpotAwardProgramRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `SpotAwardProgram` entity based on its keys.
     * @param externalCode Key property. See [[SpotAwardProgram.externalCode]].
     * @returns A request builder for creating requests to retrieve one `SpotAwardProgram` entity based on its keys.
     */
    SpotAwardProgramRequestBuilder.prototype.getByKey = function (externalCode) {
        return new core_1.GetByKeyRequestBuilder(SpotAwardProgram_1.SpotAwardProgram, { externalCode: externalCode });
    };
    /**
     * Returns a request builder for querying all `SpotAwardProgram` entities.
     * @returns A request builder for creating requests to retrieve all `SpotAwardProgram` entities.
     */
    SpotAwardProgramRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(SpotAwardProgram_1.SpotAwardProgram);
    };
    /**
     * Returns a request builder for creating a `SpotAwardProgram` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `SpotAwardProgram`.
     */
    SpotAwardProgramRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(SpotAwardProgram_1.SpotAwardProgram, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `SpotAwardProgram`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `SpotAwardProgram`.
     */
    SpotAwardProgramRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(SpotAwardProgram_1.SpotAwardProgram, entity);
    };
    SpotAwardProgramRequestBuilder.prototype.delete = function (externalCodeOrEntity) {
        return new core_1.DeleteRequestBuilder(SpotAwardProgram_1.SpotAwardProgram, externalCodeOrEntity instanceof SpotAwardProgram_1.SpotAwardProgram ? externalCodeOrEntity : { externalCode: externalCodeOrEntity });
    };
    return SpotAwardProgramRequestBuilder;
}(core_1.RequestBuilder));
exports.SpotAwardProgramRequestBuilder = SpotAwardProgramRequestBuilder;
//# sourceMappingURL=SpotAwardProgramRequestBuilder.js.map