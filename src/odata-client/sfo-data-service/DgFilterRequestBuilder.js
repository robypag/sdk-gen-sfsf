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
var DgFilter_1 = require("./DgFilter");
/**
 * Request builder class for operations supported on the [[DgFilter]] entity.
 */
var DgFilterRequestBuilder = /** @class */ (function (_super) {
    __extends(DgFilterRequestBuilder, _super);
    function DgFilterRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `DgFilter` entity based on its keys.
     * @param filterId Key property. See [[DgFilter.filterId]].
     * @returns A request builder for creating requests to retrieve one `DgFilter` entity based on its keys.
     */
    DgFilterRequestBuilder.prototype.getByKey = function (filterId) {
        return new core_1.GetByKeyRequestBuilder(DgFilter_1.DgFilter, { filterId: filterId });
    };
    /**
     * Returns a request builder for querying all `DgFilter` entities.
     * @returns A request builder for creating requests to retrieve all `DgFilter` entities.
     */
    DgFilterRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(DgFilter_1.DgFilter);
    };
    return DgFilterRequestBuilder;
}(core_1.RequestBuilder));
exports.DgFilterRequestBuilder = DgFilterRequestBuilder;
//# sourceMappingURL=DgFilterRequestBuilder.js.map