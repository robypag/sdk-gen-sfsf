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
var PerGlobalInfoAus_1 = require("./PerGlobalInfoAus");
/**
 * Request builder class for operations supported on the [[PerGlobalInfoAus]] entity.
 */
var PerGlobalInfoAusRequestBuilder = /** @class */ (function (_super) {
    __extends(PerGlobalInfoAusRequestBuilder, _super);
    function PerGlobalInfoAusRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `PerGlobalInfoAus` entity based on its keys.
     * @param country Key property. See [[PerGlobalInfoAus.country]].
     * @param personIdExternal Key property. See [[PerGlobalInfoAus.personIdExternal]].
     * @param startDate Key property. See [[PerGlobalInfoAus.startDate]].
     * @returns A request builder for creating requests to retrieve one `PerGlobalInfoAus` entity based on its keys.
     */
    PerGlobalInfoAusRequestBuilder.prototype.getByKey = function (country, personIdExternal, startDate) {
        return new core_1.GetByKeyRequestBuilder(PerGlobalInfoAus_1.PerGlobalInfoAus, {
            country: country,
            personIdExternal: personIdExternal,
            startDate: startDate
        });
    };
    /**
     * Returns a request builder for querying all `PerGlobalInfoAus` entities.
     * @returns A request builder for creating requests to retrieve all `PerGlobalInfoAus` entities.
     */
    PerGlobalInfoAusRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(PerGlobalInfoAus_1.PerGlobalInfoAus);
    };
    return PerGlobalInfoAusRequestBuilder;
}(core_1.RequestBuilder));
exports.PerGlobalInfoAusRequestBuilder = PerGlobalInfoAusRequestBuilder;
//# sourceMappingURL=PerGlobalInfoAusRequestBuilder.js.map