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
var HireDateChange_1 = require("./HireDateChange");
/**
 * Request builder class for operations supported on the [[HireDateChange]] entity.
 */
var HireDateChangeRequestBuilder = /** @class */ (function (_super) {
    __extends(HireDateChangeRequestBuilder, _super);
    function HireDateChangeRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `HireDateChange` entity based on its keys.
     * @param code Key property. See [[HireDateChange.code]].
     * @returns A request builder for creating requests to retrieve one `HireDateChange` entity based on its keys.
     */
    HireDateChangeRequestBuilder.prototype.getByKey = function (code) {
        return new core_1.GetByKeyRequestBuilder(HireDateChange_1.HireDateChange, { code: code });
    };
    /**
     * Returns a request builder for querying all `HireDateChange` entities.
     * @returns A request builder for creating requests to retrieve all `HireDateChange` entities.
     */
    HireDateChangeRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(HireDateChange_1.HireDateChange);
    };
    return HireDateChangeRequestBuilder;
}(core_1.RequestBuilder));
exports.HireDateChangeRequestBuilder = HireDateChangeRequestBuilder;
//# sourceMappingURL=HireDateChangeRequestBuilder.js.map