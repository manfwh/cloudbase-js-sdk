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
exports.ERR_CODE = exports.CloudSDKError = exports.isCancelledError = exports.CancelledError = exports.isTimeoutError = exports.TimeoutError = exports.isRealtimeErrorMessageError = exports.RealtimeErrorMessageError = void 0;
var RealtimeErrorMessageError = (function (_super) {
    __extends(RealtimeErrorMessageError, _super);
    function RealtimeErrorMessageError(serverErrorMsg) {
        var _this = _super.call(this, "Watch Error " + JSON.stringify(serverErrorMsg.msgData) + " (requestid: " + serverErrorMsg.requestId + ")") || this;
        _this.isRealtimeErrorMessageError = true;
        _this.payload = serverErrorMsg;
        return _this;
    }
    return RealtimeErrorMessageError;
}(Error));
exports.RealtimeErrorMessageError = RealtimeErrorMessageError;
exports.isRealtimeErrorMessageError = function (e) { return e === null || e === void 0 ? void 0 : e.isRealtimeErrorMessageError; };
var TimeoutError = (function (_super) {
    __extends(TimeoutError, _super);
    function TimeoutError() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = 'timeout';
        _this.payload = null;
        _this.generic = true;
        return _this;
    }
    return TimeoutError;
}(Error));
exports.TimeoutError = TimeoutError;
exports.isTimeoutError = function (e) {
    return e.type === 'timeout';
};
var CancelledError = (function (_super) {
    __extends(CancelledError, _super);
    function CancelledError() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = 'cancelled';
        _this.payload = null;
        _this.generic = true;
        return _this;
    }
    return CancelledError;
}(Error));
exports.CancelledError = CancelledError;
exports.isCancelledError = function (e) {
    return e.type === 'cancelled';
};
var CloudSDKError = (function (_super) {
    __extends(CloudSDKError, _super);
    function CloudSDKError(options) {
        var _this = _super.call(this, options.errMsg) || this;
        _this.errCode = 'UNKNOWN_ERROR';
        Object.defineProperties(_this, {
            message: {
                get: function () {
                    return ("errCode: " + this.errCode + " " + (exports.ERR_CODE[this.errCode] ||
                        '') + " | errMsg: " + this.errMsg);
                },
                set: function (msg) {
                    this.errMsg = msg;
                }
            }
        });
        _this.errCode = options.errCode || 'UNKNOWN_ERROR';
        _this.errMsg = options.errMsg;
        return _this;
    }
    Object.defineProperty(CloudSDKError.prototype, "message", {
        get: function () {
            return "errCode: " + this.errCode + " | errMsg: " + this.errMsg;
        },
        set: function (msg) {
            this.errMsg = msg;
        },
        enumerable: false,
        configurable: true
    });
    return CloudSDKError;
}(Error));
exports.CloudSDKError = CloudSDKError;
exports.ERR_CODE = {
    UNKNOWN_ERROR: 'UNKNOWN_ERROR',
    SDK_DATABASE_REALTIME_LISTENER_INIT_WATCH_FAIL: 'SDK_DATABASE_REALTIME_LISTENER_INIT_WATCH_FAIL',
    SDK_DATABASE_REALTIME_LISTENER_RECONNECT_WATCH_FAIL: 'SDK_DATABASE_REALTIME_LISTENER_RECONNECT_WATCH_FAIL',
    SDK_DATABASE_REALTIME_LISTENER_REBUILD_WATCH_FAIL: 'SDK_DATABASE_REALTIME_LISTENER_REBUILD_WATCH_FAIL',
    SDK_DATABASE_REALTIME_LISTENER_CLOSE_WATCH_FAIL: 'SDK_DATABASE_REALTIME_LISTENER_CLOSE_WATCH_FAIL',
    SDK_DATABASE_REALTIME_LISTENER_SERVER_ERROR_MSG: 'SDK_DATABASE_REALTIME_LISTENER_SERVER_ERROR_MSG',
    SDK_DATABASE_REALTIME_LISTENER_RECEIVE_INVALID_SERVER_DATA: 'SDK_DATABASE_REALTIME_LISTENER_RECEIVE_INVALID_SERVER_DATA',
    SDK_DATABASE_REALTIME_LISTENER_WEBSOCKET_CONNECTION_ERROR: 'SDK_DATABASE_REALTIME_LISTENER_WEBSOCKET_CONNECTION_ERROR',
    SDK_DATABASE_REALTIME_LISTENER_WEBSOCKET_CONNECTION_CLOSED: 'SDK_DATABASE_REALTIME_LISTENER_WEBSOCKET_CONNECTION_CLOSED',
    SDK_DATABASE_REALTIME_LISTENER_CHECK_LAST_FAIL: 'SDK_DATABASE_REALTIME_LISTENER_CHECK_LAST_FAIL',
    SDK_DATABASE_REALTIME_LISTENER_UNEXPECTED_FATAL_ERROR: 'SDK_DATABASE_REALTIME_LISTENER_UNEXPECTED_FATAL_ERROR'
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZXJyb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUdBO0lBQStDLDZDQUFLO0lBSWxELG1DQUFZLGNBQXdDO1FBQXBELFlBQ0Usa0JBQ0UsaUJBQWUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLHFCQUNuRCxjQUFjLENBQUMsU0FBUyxNQUN2QixDQUNKLFNBRUY7UUFWRCxpQ0FBMkIsR0FBRyxJQUFJLENBQUE7UUFTaEMsS0FBSSxDQUFDLE9BQU8sR0FBRyxjQUFjLENBQUE7O0lBQy9CLENBQUM7SUFDSCxnQ0FBQztBQUFELENBQUMsQUFaRCxDQUErQyxLQUFLLEdBWW5EO0FBWlksOERBQXlCO0FBY3pCLFFBQUEsMkJBQTJCLEdBQUcsVUFDekMsQ0FBTSxXQUM2QixDQUFDLGFBQUQsQ0FBQyx1QkFBRCxDQUFDLENBQUUsMkJBQTJCLEdBQUEsQ0FBQTtBQUVuRTtJQUFrQyxnQ0FBSztJQUF2QztRQUFBLHFFQUtDO1FBSEMsVUFBSSxHQUFHLFNBQWtCLENBQUE7UUFDekIsYUFBTyxHQUFHLElBQUksQ0FBQTtRQUNkLGFBQU8sR0FBRyxJQUFJLENBQUE7O0lBQ2hCLENBQUM7SUFBRCxtQkFBQztBQUFELENBQUMsQUFMRCxDQUFrQyxLQUFLLEdBS3RDO0FBTFksb0NBQVk7QUFPWixRQUFBLGNBQWMsR0FBRyxVQUFDLENBQU07SUFDbkMsT0FBQSxDQUFDLENBQUMsSUFBSSxLQUFLLFNBQVM7QUFBcEIsQ0FBb0IsQ0FBQTtBQUV0QjtJQUFvQyxrQ0FBSztJQUF6QztRQUFBLHFFQUtDO1FBSEMsVUFBSSxHQUFHLFdBQW9CLENBQUE7UUFDM0IsYUFBTyxHQUFHLElBQUksQ0FBQTtRQUNkLGFBQU8sR0FBRyxJQUFJLENBQUE7O0lBQ2hCLENBQUM7SUFBRCxxQkFBQztBQUFELENBQUMsQUFMRCxDQUFvQyxLQUFLLEdBS3hDO0FBTFksd0NBQWM7QUFPZCxRQUFBLGdCQUFnQixHQUFHLFVBQUMsQ0FBTTtJQUNyQyxPQUFBLENBQUMsQ0FBQyxJQUFJLEtBQUssV0FBVztBQUF0QixDQUFzQixDQUFBO0FBRXhCO0lBQW1DLGlDQUFLO0lBTXRDLHVCQUFZLE9BQWlDO1FBQTdDLFlBQ0Usa0JBQU0sT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQWtCdEI7UUF4Qk0sYUFBTyxHQUFHLGVBQWUsQ0FBQTtRQVE5QixNQUFNLENBQUMsZ0JBQWdCLENBQUMsS0FBSSxFQUFFO1lBQzVCLE9BQU8sRUFBRTtnQkFDUCxHQUFHO29CQUNELE9BQU8sQ0FDTCxjQUFZLElBQUksQ0FBQyxPQUFPLFVBQUksZ0JBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO3dCQUNoRCxFQUFFLGlCQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FDaEMsQ0FBQTtnQkFDSCxDQUFDO2dCQUNELEdBQUcsRUFBSCxVQUFJLEdBQVc7b0JBQ2IsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUE7Z0JBQ25CLENBQUM7YUFDRjtTQUNGLENBQUMsQ0FBQTtRQUVGLEtBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sSUFBSSxlQUFlLENBQUE7UUFDakQsS0FBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFBOztJQUM5QixDQUFDO0lBRUQsc0JBQUksa0NBQU87YUFBWDtZQUNFLE9BQU8sY0FBWSxJQUFJLENBQUMsT0FBTyxnQkFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUE7UUFDNUQsQ0FBQzthQUVELFVBQVksR0FBVztZQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQTtRQUNuQixDQUFDOzs7T0FKQTtJQUtILG9CQUFDO0FBQUQsQ0FBQyxBQWxDRCxDQUFtQyxLQUFLLEdBa0N2QztBQWxDWSxzQ0FBYTtBQXlDYixRQUFBLFFBQVEsR0FBdUM7SUFFMUQsYUFBYSxFQUFFLGVBQWU7SUFDOUIsOENBQThDLEVBQzVDLGdEQUFnRDtJQUVsRCxtREFBbUQsRUFDakQscURBQXFEO0lBRXZELGlEQUFpRCxFQUMvQyxtREFBbUQ7SUFFckQsK0NBQStDLEVBQzdDLGlEQUFpRDtJQUVuRCwrQ0FBK0MsRUFDN0MsaURBQWlEO0lBRW5ELDBEQUEwRCxFQUN4RCw0REFBNEQ7SUFFOUQseURBQXlELEVBQ3ZELDJEQUEyRDtJQUU3RCwwREFBMEQsRUFDeEQsNERBQTREO0lBRTlELDhDQUE4QyxFQUM1QyxnREFBZ0Q7SUFFbEQscURBQXFELEVBQ25ELHVEQUF1RDtDQUUxRCxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUdlbmVyaWNFcnJvciB9IGZyb20gJ0BjbG91ZGJhc2UvdHlwZXMnXG5pbXBvcnQgeyBJUmVzcG9uc2VNZXNzYWdlRXJyb3JNc2cgfSBmcm9tICdAY2xvdWRiYXNlL3R5cGVzL3JlYWx0aW1lJ1xuXG5leHBvcnQgY2xhc3MgUmVhbHRpbWVFcnJvck1lc3NhZ2VFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgaXNSZWFsdGltZUVycm9yTWVzc2FnZUVycm9yID0gdHJ1ZVxuICBwYXlsb2FkOiBJUmVzcG9uc2VNZXNzYWdlRXJyb3JNc2dcblxuICBjb25zdHJ1Y3RvcihzZXJ2ZXJFcnJvck1zZzogSVJlc3BvbnNlTWVzc2FnZUVycm9yTXNnKSB7XG4gICAgc3VwZXIoXG4gICAgICBgV2F0Y2ggRXJyb3IgJHtKU09OLnN0cmluZ2lmeShzZXJ2ZXJFcnJvck1zZy5tc2dEYXRhKX0gKHJlcXVlc3RpZDogJHtcbiAgICAgICAgc2VydmVyRXJyb3JNc2cucmVxdWVzdElkXG4gICAgICB9KWBcbiAgICApXG4gICAgdGhpcy5wYXlsb2FkID0gc2VydmVyRXJyb3JNc2dcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgaXNSZWFsdGltZUVycm9yTWVzc2FnZUVycm9yID0gKFxuICBlOiBhbnlcbik6IGUgaXMgUmVhbHRpbWVFcnJvck1lc3NhZ2VFcnJvciA9PiBlPy5pc1JlYWx0aW1lRXJyb3JNZXNzYWdlRXJyb3JcblxuZXhwb3J0IGNsYXNzIFRpbWVvdXRFcnJvciBleHRlbmRzIEVycm9yXG4gIGltcGxlbWVudHMgSUdlbmVyaWNFcnJvcjwndGltZW91dCcsIG51bGw+IHtcbiAgdHlwZSA9ICd0aW1lb3V0JyBhcyBjb25zdFxuICBwYXlsb2FkID0gbnVsbFxuICBnZW5lcmljID0gdHJ1ZVxufVxuXG5leHBvcnQgY29uc3QgaXNUaW1lb3V0RXJyb3IgPSAoZTogYW55KTogZSBpcyBUaW1lb3V0RXJyb3IgPT5cbiAgZS50eXBlID09PSAndGltZW91dCdcblxuZXhwb3J0IGNsYXNzIENhbmNlbGxlZEVycm9yIGV4dGVuZHMgRXJyb3JcbiAgaW1wbGVtZW50cyBJR2VuZXJpY0Vycm9yPCdjYW5jZWxsZWQnLCBudWxsPiB7XG4gIHR5cGUgPSAnY2FuY2VsbGVkJyBhcyBjb25zdFxuICBwYXlsb2FkID0gbnVsbFxuICBnZW5lcmljID0gdHJ1ZVxufVxuXG5leHBvcnQgY29uc3QgaXNDYW5jZWxsZWRFcnJvciA9IChlOiBhbnkpOiBlIGlzIENhbmNlbGxlZEVycm9yID0+XG4gIGUudHlwZSA9PT0gJ2NhbmNlbGxlZCdcblxuZXhwb3J0IGNsYXNzIENsb3VkU0RLRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIHB1YmxpYyBlcnJDb2RlID0gJ1VOS05PV05fRVJST1InXG4gIHB1YmxpYyBlcnJNc2c6IHN0cmluZ1xuXG4gIHB1YmxpYyByZXF1ZXN0SUQ/OiBzdHJpbmdcblxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBJRXJyb3JDb25zdHJ1Y3Rvck9wdGlvbnMpIHtcbiAgICBzdXBlcihvcHRpb25zLmVyck1zZylcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgIG1lc3NhZ2U6IHtcbiAgICAgICAgZ2V0KCkge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBgZXJyQ29kZTogJHt0aGlzLmVyckNvZGV9ICR7RVJSX0NPREVbdGhpcy5lcnJDb2RlXSB8fFxuICAgICAgICAgICAgICAnJ30gfCBlcnJNc2c6IGAgKyB0aGlzLmVyck1zZ1xuICAgICAgICAgIClcbiAgICAgICAgfSxcbiAgICAgICAgc2V0KG1zZzogc3RyaW5nKSB7XG4gICAgICAgICAgdGhpcy5lcnJNc2cgPSBtc2dcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLmVyckNvZGUgPSBvcHRpb25zLmVyckNvZGUgfHwgJ1VOS05PV05fRVJST1InXG4gICAgdGhpcy5lcnJNc2cgPSBvcHRpb25zLmVyck1zZ1xuICB9XG5cbiAgZ2V0IG1lc3NhZ2UoKSB7XG4gICAgcmV0dXJuIGBlcnJDb2RlOiAke3RoaXMuZXJyQ29kZX0gfCBlcnJNc2c6IGAgKyB0aGlzLmVyck1zZ1xuICB9XG5cbiAgc2V0IG1lc3NhZ2UobXNnOiBzdHJpbmcpIHtcbiAgICB0aGlzLmVyck1zZyA9IG1zZ1xuICB9XG59XG5cbmludGVyZmFjZSBJRXJyb3JDb25zdHJ1Y3Rvck9wdGlvbnMge1xuICBlcnJDb2RlPzogc3RyaW5nXG4gIGVyck1zZzogc3RyaW5nXG59XG5cbmV4cG9ydCBjb25zdCBFUlJfQ09ERTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBudW1iZXIgfSA9IHtcbiAgLy8gXCItMVwiOiBcIlwiLFxuICBVTktOT1dOX0VSUk9SOiAnVU5LTk9XTl9FUlJPUicsXG4gIFNES19EQVRBQkFTRV9SRUFMVElNRV9MSVNURU5FUl9JTklUX1dBVENIX0ZBSUw6XG4gICAgJ1NES19EQVRBQkFTRV9SRUFMVElNRV9MSVNURU5FUl9JTklUX1dBVENIX0ZBSUwnLFxuICAvLyBcInJlYWx0aW1lIGxpc3RlbmVyIGluaXQgd2F0Y2ggZmFpbFwiLFxuICBTREtfREFUQUJBU0VfUkVBTFRJTUVfTElTVEVORVJfUkVDT05ORUNUX1dBVENIX0ZBSUw6XG4gICAgJ1NES19EQVRBQkFTRV9SRUFMVElNRV9MSVNURU5FUl9SRUNPTk5FQ1RfV0FUQ0hfRkFJTCcsXG4gIC8vIFwicmVhbHRpbWUgbGlzdGVuZXIgcmVjb25uZWN0IHdhdGNoIGZhaWxcIixcbiAgU0RLX0RBVEFCQVNFX1JFQUxUSU1FX0xJU1RFTkVSX1JFQlVJTERfV0FUQ0hfRkFJTDpcbiAgICAnU0RLX0RBVEFCQVNFX1JFQUxUSU1FX0xJU1RFTkVSX1JFQlVJTERfV0FUQ0hfRkFJTCcsXG4gIC8vIFwicmVhbHRpbWUgbGlzdGVuZXIgcmVidWlsZCB3YXRjaCBmYWlsXCIsXG4gIFNES19EQVRBQkFTRV9SRUFMVElNRV9MSVNURU5FUl9DTE9TRV9XQVRDSF9GQUlMOlxuICAgICdTREtfREFUQUJBU0VfUkVBTFRJTUVfTElTVEVORVJfQ0xPU0VfV0FUQ0hfRkFJTCcsXG4gIC8vIFwicmVhbHRpbWUgbGlzdGVuZXIgcmVidWlsZCB3YXRjaCBmYWlsXCIsXG4gIFNES19EQVRBQkFTRV9SRUFMVElNRV9MSVNURU5FUl9TRVJWRVJfRVJST1JfTVNHOlxuICAgICdTREtfREFUQUJBU0VfUkVBTFRJTUVfTElTVEVORVJfU0VSVkVSX0VSUk9SX01TRycsXG4gIC8vIFwicmVhbHRpbWUgbGlzdGVuZXIgcmVjZWl2ZSBzZXJ2ZXIgZXJyb3IgbXNnXCIsXG4gIFNES19EQVRBQkFTRV9SRUFMVElNRV9MSVNURU5FUl9SRUNFSVZFX0lOVkFMSURfU0VSVkVSX0RBVEE6XG4gICAgJ1NES19EQVRBQkFTRV9SRUFMVElNRV9MSVNURU5FUl9SRUNFSVZFX0lOVkFMSURfU0VSVkVSX0RBVEEnLFxuICAvLyBcInJlYWx0aW1lIGxpc3RlbmVyIHJlY2VpdmUgaW52YWxpZCBzZXJ2ZXIgZGF0YVwiLFxuICBTREtfREFUQUJBU0VfUkVBTFRJTUVfTElTVEVORVJfV0VCU09DS0VUX0NPTk5FQ1RJT05fRVJST1I6XG4gICAgJ1NES19EQVRBQkFTRV9SRUFMVElNRV9MSVNURU5FUl9XRUJTT0NLRVRfQ09OTkVDVElPTl9FUlJPUicsXG4gIC8vIFwicmVhbHRpbWUgbGlzdGVuZXIgd2Vic29ja2V0IGNvbm5lY3Rpb24gZXJyb3JcIixcbiAgU0RLX0RBVEFCQVNFX1JFQUxUSU1FX0xJU1RFTkVSX1dFQlNPQ0tFVF9DT05ORUNUSU9OX0NMT1NFRDpcbiAgICAnU0RLX0RBVEFCQVNFX1JFQUxUSU1FX0xJU1RFTkVSX1dFQlNPQ0tFVF9DT05ORUNUSU9OX0NMT1NFRCcsXG4gIC8vIFwicmVhbHRpbWUgbGlzdGVuZXIgd2Vic29ja2V0IGNvbm5lY3Rpb24gY2xvc2VkXCIsXG4gIFNES19EQVRBQkFTRV9SRUFMVElNRV9MSVNURU5FUl9DSEVDS19MQVNUX0ZBSUw6XG4gICAgJ1NES19EQVRBQkFTRV9SRUFMVElNRV9MSVNURU5FUl9DSEVDS19MQVNUX0ZBSUwnLFxuICAvLyBcInJlYWx0aW1lIGxpc3RlbmVyIGNoZWNrIGxhc3QgZmFpbFwiLFxuICBTREtfREFUQUJBU0VfUkVBTFRJTUVfTElTVEVORVJfVU5FWFBFQ1RFRF9GQVRBTF9FUlJPUjpcbiAgICAnU0RLX0RBVEFCQVNFX1JFQUxUSU1FX0xJU1RFTkVSX1VORVhQRUNURURfRkFUQUxfRVJST1InXG4gIC8vIFwicmVhbHRpbWUgbGlzdGVuZXIgdW5leHBlY3RlZCBmYXRhbCBlcnJvclwiXG59Il19