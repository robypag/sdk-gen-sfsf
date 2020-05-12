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
var CompanyProvisioner_1 = require("./CompanyProvisioner");
/**
 * Request builder class for operations supported on the [[CompanyProvisioner]] entity.
 */
var CompanyProvisionerRequestBuilder = /** @class */ (function (_super) {
    __extends(CompanyProvisionerRequestBuilder, _super);
    function CompanyProvisionerRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `CompanyProvisioner` entity based on its keys.
     * @param id Key property. See [[CompanyProvisioner.id]].
     * @returns A request builder for creating requests to retrieve one `CompanyProvisioner` entity based on its keys.
     */
    CompanyProvisionerRequestBuilder.prototype.getByKey = function (id) {
        return new core_1.GetByKeyRequestBuilder(CompanyProvisioner_1.CompanyProvisioner, { id: id });
    };
    /**
     * Returns a request builder for querying all `CompanyProvisioner` entities.
     * @returns A request builder for creating requests to retrieve all `CompanyProvisioner` entities.
     */
    CompanyProvisionerRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(CompanyProvisioner_1.CompanyProvisioner);
    };
    return CompanyProvisionerRequestBuilder;
}(core_1.RequestBuilder));
exports.CompanyProvisionerRequestBuilder = CompanyProvisionerRequestBuilder;
//# sourceMappingURL=CompanyProvisionerRequestBuilder.js.map