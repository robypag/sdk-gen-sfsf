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
var FoPayGrade_1 = require("./FoPayGrade");
/**
 * Request builder class for operations supported on the [[FoPayGrade]] entity.
 */
var FoPayGradeRequestBuilder = /** @class */ (function (_super) {
    __extends(FoPayGradeRequestBuilder, _super);
    function FoPayGradeRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `FoPayGrade` entity based on its keys.
     * @param externalCode Key property. See [[FoPayGrade.externalCode]].
     * @param startDate Key property. See [[FoPayGrade.startDate]].
     * @returns A request builder for creating requests to retrieve one `FoPayGrade` entity based on its keys.
     */
    FoPayGradeRequestBuilder.prototype.getByKey = function (externalCode, startDate) {
        return new core_1.GetByKeyRequestBuilder(FoPayGrade_1.FoPayGrade, {
            externalCode: externalCode,
            startDate: startDate
        });
    };
    /**
     * Returns a request builder for querying all `FoPayGrade` entities.
     * @returns A request builder for creating requests to retrieve all `FoPayGrade` entities.
     */
    FoPayGradeRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(FoPayGrade_1.FoPayGrade);
    };
    return FoPayGradeRequestBuilder;
}(core_1.RequestBuilder));
exports.FoPayGradeRequestBuilder = FoPayGradeRequestBuilder;
//# sourceMappingURL=FoPayGradeRequestBuilder.js.map