import { ERR_CODE, CloudSDKError } from './error'

export const CLOSE_EVENT_CODE_INFO = {
  1000: {
    code: 1000,
    name: 'Normal Closure',
    description:
      'Normal closure; the connection successfully completed whatever purpose for which it was created.'
  },
  1001: {
    code: 1001,
    name: 'Going Away',
    description:
      'The endpoint is going away, either because of a server failure or because the browser is navigating away from the page that opened the connection.'
  },
  1002: {
    code: 1002,
    name: 'Protocol Error',
    description:
      'The endpoint is terminating the connection due to a protocol error.'
  },
  1003: {
    code: 1003,
    name: 'Unsupported Data',
    description:
      'The connection is being terminated because the endpoint received data of a type it cannot accept (for example, a text-only endpoint received binary data).'
  },
  1005: {
    code: 1005,
    name: 'No Status Received',
    description:
      'Indicates that no status code was provided even though one was expected.'
  },
  1006: {
    code: 1006,
    name: 'Abnormal Closure',
    description:
      'Used to indicate that a connection was closed abnormally (that is, with no close frame being sent) when a status code is expected.'
  },
  1007: {
    code: 1007,
    name: 'Invalid frame payload data',
    description:
      'The endpoint is terminating the connection because a message was received that contained inconsistent data (e.g., non-UTF-8 data within a text message).'
  },
  1008: {
    code: 1008,
    name: 'Policy Violation',
    description:
      'The endpoint is terminating the connection because it received a message that violates its policy. This is a generic status code, used when codes 1003 and 1009 are not suitable.'
  },
  1009: {
    code: 1009,
    name: 'Message too big',
    description:
      'The endpoint is terminating the connection because a data frame was received that is too large.'
  },
  1010: {
    code: 1010,
    name: 'Missing Extension',
    description:
      "The client is terminating the connection because it expected the server to negotiate one or more extension, but the server didn't."
  },
  1011: {
    code: 1011,
    name: 'Internal Error',
    description:
      'The server is terminating the connection because it encountered an unexpected condition that prevented it from fulfilling the request.'
  },
  1012: {
    code: 1012,
    name: 'Service Restart',
    description:
      'The server is terminating the connection because it is restarting.'
  },
  1013: {
    code: 1013,
    name: 'Try Again Later',
    description:
      'The server is terminating the connection due to a temporary condition, e.g. it is overloaded and is casting off some of its clients.'
  },
  1014: {
    code: 1014,
    name: 'Bad Gateway',
    description:
      'The server was acting as a gateway or proxy and received an invalid response from the upstream server. This is similar to 502 HTTP Status Code.'
  },
  1015: {
    code: 1015,
    name: 'TLS Handshake',
    description:
      "Indicates that the connection was closed due to a failure to perform a TLS handshake (e.g., the server certificate can't be verified)."
  },
  // custom
  3000: {
    code: 3000,
    name: 'Reconnect WebSocket',
    description:
      'The client is terminating the connection because it wants to reconnect'
  },
  3001: {
    code: 3001,
    name: 'No Realtime Listeners',
    description:
      'The client is terminating the connection because no more realtime listeners exist'
  },
  3002: {
    code: 3002,
    name: 'Heartbeat Ping Error',
    description:
      'The client is terminating the connection due to its failure in sending heartbeat messages'
  },
  3003: {
    code: 3003,
    name: 'Heartbeat Pong Timeout Error',
    description:
      'The client is terminating the connection because no heartbeat response is received from the server'
  },
  3050: {
    code: 3050,
    name: 'Server Close',
    description:
      'The client is terminating the connection because no heartbeat response is received from the server'
  }
}

export enum CLOSE_EVENT_CODE {
  // spec
  NormalClosure = 1000,
  GoingAway = 1001,
  ProtocolError = 1002,
  UnsupportedData = 1003,
  NoStatusReceived = 1005,
  AbnormalClosure = 1006,
  InvalidFramePayloadData = 1007,
  PolicyViolation = 1008,
  MessageTooBig = 1009,
  MissingExtension = 1010,
  InternalError = 1011,
  ServiceRestart = 1012,
  TryAgainLater = 1013,
  BadGateway = 1014,
  TLSHandshake = 1015,
  // custom - client close itself
  ReconnectWebSocket = 3000,
  NoRealtimeListeners = 3001,
  HeartbeatPingError = 3002,
  HeartbeatPongTimeoutError = 3003,
  // custom - server close
  NoAuthentication = 3050
}

export const getWSCloseError = (code: CLOSE_EVENT_CODE, reason?: string) => {
  const info = CLOSE_EVENT_CODE_INFO[code]
  const errMsg = !info
    ? `code ${code}`
    : `${info.name}, code ${code}, reason ${reason || info.description}`
  return new CloudSDKError({
    errCode: ERR_CODE.SDK_DATABASE_REALTIME_LISTENER_WEBSOCKET_CONNECTION_CLOSED as string,
    errMsg
  })
}
