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
var LocalizedData_1 = require("./LocalizedData");
/**
 * Request builder class for operations supported on the [[LocalizedData]] entity.
 */
var LocalizedDataRequestBuilder = /** @class */ (function (_super) {
    __extends(LocalizedDataRequestBuilder, _super);
    function LocalizedDataRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `LocalizedData` entity based on its keys.
     * @param localizedDataCode Key property. See [[LocalizedData.localizedDataCode]].
     * @param localizedDataLocale Key property. See [[LocalizedData.localizedDataLocale]].
     * @returns A request builder for creating requests to retrieve one `LocalizedData` entity based on its keys.
     */
    LocalizedDataRequestBuilder.prototype.getByKey = function (localizedDataCode, localizedDataLocale) {
        return new core_1.GetByKeyRequestBuilder(LocalizedData_1.LocalizedData, {
            localizedDataCode: localizedDataCode,
            localizedDataLocale: localizedDataLocale
        });
    };
    /**
     * Returns a request builder for querying all `LocalizedData` entities.
     * @returns A request builder for creating requests to retrieve all `LocalizedData` entities.
     */
    LocalizedDataRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(LocalizedData_1.LocalizedData);
    };
    return LocalizedDataRequestBuilder;
}(core_1.RequestBuilder));
exports.LocalizedDataRequestBuilder = LocalizedDataRequestBuilder;
//# sourceMappingURL=LocalizedDataRequestBuilder.js.map