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
var DgFieldValue_1 = require("./DgFieldValue");
/**
 * Request builder class for operations supported on the [[DgFieldValue]] entity.
 */
var DgFieldValueRequestBuilder = /** @class */ (function (_super) {
    __extends(DgFieldValueRequestBuilder, _super);
    function DgFieldValueRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `DgFieldValue` entity based on its keys.
     * @param fieldValue Key property. See [[DgFieldValue.fieldValue]].
     * @returns A request builder for creating requests to retrieve one `DgFieldValue` entity based on its keys.
     */
    DgFieldValueRequestBuilder.prototype.getByKey = function (fieldValue) {
        return new core_1.GetByKeyRequestBuilder(DgFieldValue_1.DgFieldValue, { fieldValue: fieldValue });
    };
    /**
     * Returns a request builder for querying all `DgFieldValue` entities.
     * @returns A request builder for creating requests to retrieve all `DgFieldValue` entities.
     */
    DgFieldValueRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(DgFieldValue_1.DgFieldValue);
    };
    return DgFieldValueRequestBuilder;
}(core_1.RequestBuilder));
exports.DgFieldValueRequestBuilder = DgFieldValueRequestBuilder;
//# sourceMappingURL=DgFieldValueRequestBuilder.js.map