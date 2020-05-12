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
var AdvancesAccumulation_1 = require("./AdvancesAccumulation");
/**
 * Request builder class for operations supported on the [[AdvancesAccumulation]] entity.
 */
var AdvancesAccumulationRequestBuilder = /** @class */ (function (_super) {
    __extends(AdvancesAccumulationRequestBuilder, _super);
    function AdvancesAccumulationRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `AdvancesAccumulation` entity based on its keys.
     * @param externalCode Key property. See [[AdvancesAccumulation.externalCode]].
     * @returns A request builder for creating requests to retrieve one `AdvancesAccumulation` entity based on its keys.
     */
    AdvancesAccumulationRequestBuilder.prototype.getByKey = function (externalCode) {
        return new core_1.GetByKeyRequestBuilder(AdvancesAccumulation_1.AdvancesAccumulation, { externalCode: externalCode });
    };
    /**
     * Returns a request builder for querying all `AdvancesAccumulation` entities.
     * @returns A request builder for creating requests to retrieve all `AdvancesAccumulation` entities.
     */
    AdvancesAccumulationRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(AdvancesAccumulation_1.AdvancesAccumulation);
    };
    return AdvancesAccumulationRequestBuilder;
}(core_1.RequestBuilder));
exports.AdvancesAccumulationRequestBuilder = AdvancesAccumulationRequestBuilder;
//# sourceMappingURL=AdvancesAccumulationRequestBuilder.js.map