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
var MdfEnumValue_1 = require("./MdfEnumValue");
/**
 * Request builder class for operations supported on the [[MdfEnumValue]] entity.
 */
var MdfEnumValueRequestBuilder = /** @class */ (function (_super) {
    __extends(MdfEnumValueRequestBuilder, _super);
    function MdfEnumValueRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `MdfEnumValue` entity based on its keys.
     * @param key Key property. See [[MdfEnumValue.key]].
     * @param value Key property. See [[MdfEnumValue.value]].
     * @returns A request builder for creating requests to retrieve one `MdfEnumValue` entity based on its keys.
     */
    MdfEnumValueRequestBuilder.prototype.getByKey = function (key, value) {
        return new core_1.GetByKeyRequestBuilder(MdfEnumValue_1.MdfEnumValue, {
            key: key,
            value: value
        });
    };
    /**
     * Returns a request builder for querying all `MdfEnumValue` entities.
     * @returns A request builder for creating requests to retrieve all `MdfEnumValue` entities.
     */
    MdfEnumValueRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(MdfEnumValue_1.MdfEnumValue);
    };
    return MdfEnumValueRequestBuilder;
}(core_1.RequestBuilder));
exports.MdfEnumValueRequestBuilder = MdfEnumValueRequestBuilder;
//# sourceMappingURL=MdfEnumValueRequestBuilder.js.map