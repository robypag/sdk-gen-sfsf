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
var Territory_1 = require("./Territory");
/**
 * Request builder class for operations supported on the [[Territory]] entity.
 */
var TerritoryRequestBuilder = /** @class */ (function (_super) {
    __extends(TerritoryRequestBuilder, _super);
    function TerritoryRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Territory` entity based on its keys.
     * @param territoryCode Key property. See [[Territory.territoryCode]].
     * @returns A request builder for creating requests to retrieve one `Territory` entity based on its keys.
     */
    TerritoryRequestBuilder.prototype.getByKey = function (territoryCode) {
        return new core_1.GetByKeyRequestBuilder(Territory_1.Territory, { territoryCode: territoryCode });
    };
    /**
     * Returns a request builder for querying all `Territory` entities.
     * @returns A request builder for creating requests to retrieve all `Territory` entities.
     */
    TerritoryRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(Territory_1.Territory);
    };
    return TerritoryRequestBuilder;
}(core_1.RequestBuilder));
exports.TerritoryRequestBuilder = TerritoryRequestBuilder;
//# sourceMappingURL=TerritoryRequestBuilder.js.map