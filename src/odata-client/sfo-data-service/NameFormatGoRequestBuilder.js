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
var NameFormatGo_1 = require("./NameFormatGo");
/**
 * Request builder class for operations supported on the [[NameFormatGo]] entity.
 */
var NameFormatGoRequestBuilder = /** @class */ (function (_super) {
    __extends(NameFormatGoRequestBuilder, _super);
    function NameFormatGoRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `NameFormatGo` entity based on its keys.
     * @param externalCode Key property. See [[NameFormatGo.externalCode]].
     * @returns A request builder for creating requests to retrieve one `NameFormatGo` entity based on its keys.
     */
    NameFormatGoRequestBuilder.prototype.getByKey = function (externalCode) {
        return new core_1.GetByKeyRequestBuilder(NameFormatGo_1.NameFormatGo, { externalCode: externalCode });
    };
    /**
     * Returns a request builder for querying all `NameFormatGo` entities.
     * @returns A request builder for creating requests to retrieve all `NameFormatGo` entities.
     */
    NameFormatGoRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(NameFormatGo_1.NameFormatGo);
    };
    return NameFormatGoRequestBuilder;
}(core_1.RequestBuilder));
exports.NameFormatGoRequestBuilder = NameFormatGoRequestBuilder;
//# sourceMappingURL=NameFormatGoRequestBuilder.js.map