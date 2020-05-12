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
var Bank_1 = require("./Bank");
/**
 * Request builder class for operations supported on the [[Bank]] entity.
 */
var BankRequestBuilder = /** @class */ (function (_super) {
    __extends(BankRequestBuilder, _super);
    function BankRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Bank` entity based on its keys.
     * @param externalCode Key property. See [[Bank.externalCode]].
     * @returns A request builder for creating requests to retrieve one `Bank` entity based on its keys.
     */
    BankRequestBuilder.prototype.getByKey = function (externalCode) {
        return new core_1.GetByKeyRequestBuilder(Bank_1.Bank, { externalCode: externalCode });
    };
    /**
     * Returns a request builder for querying all `Bank` entities.
     * @returns A request builder for creating requests to retrieve all `Bank` entities.
     */
    BankRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(Bank_1.Bank);
    };
    /**
     * Returns a request builder for creating a `Bank` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Bank`.
     */
    BankRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(Bank_1.Bank, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `Bank`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Bank`.
     */
    BankRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(Bank_1.Bank, entity);
    };
    BankRequestBuilder.prototype.delete = function (externalCodeOrEntity) {
        return new core_1.DeleteRequestBuilder(Bank_1.Bank, externalCodeOrEntity instanceof Bank_1.Bank ? externalCodeOrEntity : { externalCode: externalCodeOrEntity });
    };
    return BankRequestBuilder;
}(core_1.RequestBuilder));
exports.BankRequestBuilder = BankRequestBuilder;
//# sourceMappingURL=BankRequestBuilder.js.map