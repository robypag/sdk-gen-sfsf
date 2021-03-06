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
var PerGlobalInfoUsa_1 = require("./PerGlobalInfoUsa");
/**
 * Request builder class for operations supported on the [[PerGlobalInfoUsa]] entity.
 */
var PerGlobalInfoUsaRequestBuilder = /** @class */ (function (_super) {
    __extends(PerGlobalInfoUsaRequestBuilder, _super);
    function PerGlobalInfoUsaRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `PerGlobalInfoUsa` entity based on its keys.
     * @param country Key property. See [[PerGlobalInfoUsa.country]].
     * @param personIdExternal Key property. See [[PerGlobalInfoUsa.personIdExternal]].
     * @param startDate Key property. See [[PerGlobalInfoUsa.startDate]].
     * @returns A request builder for creating requests to retrieve one `PerGlobalInfoUsa` entity based on its keys.
     */
    PerGlobalInfoUsaRequestBuilder.prototype.getByKey = function (country, personIdExternal, startDate) {
        return new core_1.GetByKeyRequestBuilder(PerGlobalInfoUsa_1.PerGlobalInfoUsa, {
            country: country,
            personIdExternal: personIdExternal,
            startDate: startDate
        });
    };
    /**
     * Returns a request builder for querying all `PerGlobalInfoUsa` entities.
     * @returns A request builder for creating requests to retrieve all `PerGlobalInfoUsa` entities.
     */
    PerGlobalInfoUsaRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(PerGlobalInfoUsa_1.PerGlobalInfoUsa);
    };
    return PerGlobalInfoUsaRequestBuilder;
}(core_1.RequestBuilder));
exports.PerGlobalInfoUsaRequestBuilder = PerGlobalInfoUsaRequestBuilder;
//# sourceMappingURL=PerGlobalInfoUsaRequestBuilder.js.map