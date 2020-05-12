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
var MdfLocalizedValue_1 = require("./MdfLocalizedValue");
/**
 * Request builder class for operations supported on the [[MdfLocalizedValue]] entity.
 */
var MdfLocalizedValueRequestBuilder = /** @class */ (function (_super) {
    __extends(MdfLocalizedValueRequestBuilder, _super);
    function MdfLocalizedValueRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `MdfLocalizedValue` entity based on its keys.
     * @param locale Key property. See [[MdfLocalizedValue.locale]].
     * @returns A request builder for creating requests to retrieve one `MdfLocalizedValue` entity based on its keys.
     */
    MdfLocalizedValueRequestBuilder.prototype.getByKey = function (locale) {
        return new core_1.GetByKeyRequestBuilder(MdfLocalizedValue_1.MdfLocalizedValue, { locale: locale });
    };
    /**
     * Returns a request builder for querying all `MdfLocalizedValue` entities.
     * @returns A request builder for creating requests to retrieve all `MdfLocalizedValue` entities.
     */
    MdfLocalizedValueRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(MdfLocalizedValue_1.MdfLocalizedValue);
    };
    return MdfLocalizedValueRequestBuilder;
}(core_1.RequestBuilder));
exports.MdfLocalizedValueRequestBuilder = MdfLocalizedValueRequestBuilder;
//# sourceMappingURL=MdfLocalizedValueRequestBuilder.js.map