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
var Cust_PickListAMapping_1 = require("./Cust_PickListAMapping");
/**
 * Request builder class for operations supported on the [[Cust_PickListAMapping]] entity.
 */
var Cust_PickListAMappingRequestBuilder = /** @class */ (function (_super) {
    __extends(Cust_PickListAMappingRequestBuilder, _super);
    function Cust_PickListAMappingRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Cust_PickListAMapping` entity based on its keys.
     * @param externalCode Key property. See [[Cust_PickListAMapping.externalCode]].
     * @returns A request builder for creating requests to retrieve one `Cust_PickListAMapping` entity based on its keys.
     */
    Cust_PickListAMappingRequestBuilder.prototype.getByKey = function (externalCode) {
        return new core_1.GetByKeyRequestBuilder(Cust_PickListAMapping_1.Cust_PickListAMapping, { externalCode: externalCode });
    };
    /**
     * Returns a request builder for querying all `Cust_PickListAMapping` entities.
     * @returns A request builder for creating requests to retrieve all `Cust_PickListAMapping` entities.
     */
    Cust_PickListAMappingRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(Cust_PickListAMapping_1.Cust_PickListAMapping);
    };
    /**
     * Returns a request builder for creating a `Cust_PickListAMapping` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Cust_PickListAMapping`.
     */
    Cust_PickListAMappingRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(Cust_PickListAMapping_1.Cust_PickListAMapping, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `Cust_PickListAMapping`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Cust_PickListAMapping`.
     */
    Cust_PickListAMappingRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(Cust_PickListAMapping_1.Cust_PickListAMapping, entity);
    };
    Cust_PickListAMappingRequestBuilder.prototype.delete = function (externalCodeOrEntity) {
        return new core_1.DeleteRequestBuilder(Cust_PickListAMapping_1.Cust_PickListAMapping, externalCodeOrEntity instanceof Cust_PickListAMapping_1.Cust_PickListAMapping ? externalCodeOrEntity : { externalCode: externalCodeOrEntity });
    };
    return Cust_PickListAMappingRequestBuilder;
}(core_1.RequestBuilder));
exports.Cust_PickListAMappingRequestBuilder = Cust_PickListAMappingRequestBuilder;
//# sourceMappingURL=Cust_PickListAMappingRequestBuilder.js.map