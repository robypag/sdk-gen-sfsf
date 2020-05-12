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
var TimeAccountType_1 = require("./TimeAccountType");
/**
 * Request builder class for operations supported on the [[TimeAccountType]] entity.
 */
var TimeAccountTypeRequestBuilder = /** @class */ (function (_super) {
    __extends(TimeAccountTypeRequestBuilder, _super);
    function TimeAccountTypeRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `TimeAccountType` entity based on its keys.
     * @param externalCode Key property. See [[TimeAccountType.externalCode]].
     * @returns A request builder for creating requests to retrieve one `TimeAccountType` entity based on its keys.
     */
    TimeAccountTypeRequestBuilder.prototype.getByKey = function (externalCode) {
        return new core_1.GetByKeyRequestBuilder(TimeAccountType_1.TimeAccountType, { externalCode: externalCode });
    };
    /**
     * Returns a request builder for querying all `TimeAccountType` entities.
     * @returns A request builder for creating requests to retrieve all `TimeAccountType` entities.
     */
    TimeAccountTypeRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(TimeAccountType_1.TimeAccountType);
    };
    return TimeAccountTypeRequestBuilder;
}(core_1.RequestBuilder));
exports.TimeAccountTypeRequestBuilder = TimeAccountTypeRequestBuilder;
//# sourceMappingURL=TimeAccountTypeRequestBuilder.js.map