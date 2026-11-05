export function checkHTTPstatus(httpStatus: number) {
  return httpStatus >= 200 && httpStatus < 300;
}

export function validateStatus(expected: number, actual: number) {
  return expected === actual;
}

export function limitresponseTime(responseTime: number, maxResponseTime = 1000) {
  return responseTime < maxResponseTime;
}

export function validateUsername(username: string) {
  if (username.trim().length <= 3) {
    return false;
  }
  return true;
}

export function calculateAverage(durations: number[]) {
  if (durations.length === 0) {
    return 0;
  }

  const total = durations.reduce((sum, duration) => sum + duration, 0);
  return total / durations.length;
}
