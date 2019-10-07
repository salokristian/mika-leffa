interface SuccesfulFetchResponse {
  ok: true;
  res: Response;
}

interface FailedFetchResponse {
  ok: false;
  res?: Response;
}

export type FetchResponse = SuccesfulFetchResponse | FailedFetchResponse;

export default async (input: RequestInfo, init?: RequestInit): Promise<FetchResponse> => {
  try {
    const res = await fetch(input, init);

    return {
      ok: res.ok,
      res
    };
  } catch (e) {
    return { ok: false };
  }
};
