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
var core_1 = require("@sap-cloud-sdk/core");
var FoPayRange_1 = require("./FoPayRange");
/**
 * Request builder class for operations supported on the [[FoPayRange]] entity.
 */
var FoPayRangeRequestBuilder = /** @class */ (function (_super) {
    __extends(FoPayRangeRequestBuilder, _super);
    function FoPayRangeRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `FoPayRange` entity based on its keys.
     * @param externalCode Key property. See [[FoPayRange.externalCode]].
     * @param startDate Key property. See [[FoPayRange.startDate]].
     * @returns A request builder for creating requests to retrieve one `FoPayRange` entity based on its keys.
     */
    FoPayRangeRequestBuilder.prototype.getByKey = function (externalCode, startDate) {
        return new core_1.GetByKeyRequestBuilder(FoPayRange_1.FoPayRange, {
            externalCode: externalCode,
            startDate: startDate
        });
    };
    /**
     * Returns a request builder for querying all `FoPayRange` entities.
     * @returns A request builder for creating requests to retrieve all `FoPayRange` entities.
     */
    FoPayRangeRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(FoPayRange_1.FoPayRange);
    };
    return FoPayRangeRequestBuilder;
}(core_1.RequestBuilder));
exports.FoPayRangeRequestBuilder = FoPayRangeRequestBuilder;
//# sourceMappingURL=FoPayRangeRequestBuilder.js.map